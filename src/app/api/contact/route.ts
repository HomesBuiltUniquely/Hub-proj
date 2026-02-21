import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { resolveLeadVerificationStatus } from '@/lib/leadVerification';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      pincode,
      city,
      budget,
      possession,
      whatsappConsent,
      pageUrl,
      verificationStatus,
      otpSuccess,
      date,
      time,
      // New calculator fields (flattened)
      bhkType,
      rooms,
      wardrobe,
      kitchen,
      collections,
      material,
      // Nested calculator object (optional)
      calculator,
    } = body;

    console.log('API route called with data:', {
      name,
      phone,
      email,
      pincode,
      city,
      budget,
      possession,
      whatsappConsent,
      pageUrl,
      verificationStatus,
      date,
      time,
      bhkType,
      rooms,
      wardrobe,
      kitchen,
      collections,
      material,
      calculator,
    });

    const path = (pageUrl || '').toString();
    const pathLower = path.toLowerCase();
    const normalizedVerificationStatus = resolveLeadVerificationStatus({
      verificationStatus,
      otpSuccess,
    });
    const normalizedOtpSuccess = normalizedVerificationStatus === 'VERIFIED';

    // Identify Meta lead pages (best-interior-designers-in-bangalore and its calculator)
    const isBestInteriorBangalorePage =
      pathLower.includes('/best-interior-designers-in-bangalore') ||
      pathLower.includes('best-interior-designers-in-bangalore');
    const isBestInteriorBangaloreCalculator =
      pathLower.includes('/best-interior-designers-in-bangalore/calculator');
    const isMetaLeadPage = isBestInteriorBangalorePage || isBestInteriorBangaloreCalculator;

    // Identify which submissions are pure Google Ads (should NOT hit WebsiteLead API)
    const isInteriorBangalorePage =
      (pathLower.includes('/interior-designers-in-bangalore') ||
      pathLower.includes('interior-designers-in-bangalore')) &&
      !isBestInteriorBangalorePage;
    const isInteriorBangaloreCalculator =
      pathLower.includes('/interior-designers-in-bangalore/calculator');

    const isGoogleAdsLead = isInteriorBangalorePage || isInteriorBangaloreCalculator;

    // Send to MetaLead API for best-interior-designers-in-bangalore (main + calculator)
    if (isMetaLeadPage) {
      try {
        const metaLeadPayload = {
          name: name || '',
          email: email || '',
          phoneNumber: phone || '',
          pinCode: pincode || null,
          propertyPin: pincode || null,
          propertyType: bhkType || city || null,
          bookASlot: date || time || null,
          leadSource: 'Website',
          verificationStatus: normalizedVerificationStatus,
          otpSuccess: normalizedOtpSuccess,
        };

        console.log('Sending data to MetaLead API:', metaLeadPayload);

        const metaLeadResponse = await fetch('https://hows.hubinterior.com/v1/MetaLead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(metaLeadPayload),
        });

        if (metaLeadResponse.ok) {
          const metaLeadText = await metaLeadResponse.text();
          console.log('MetaLead API response:', metaLeadText);
        } else {
          console.error('MetaLead API error:', metaLeadResponse.status, metaLeadResponse.statusText);
        }
      } catch (metaLeadError) {
        console.error('Error sending to MetaLead API:', metaLeadError);
      }
    }
    // Send data to WebsiteLead API only for WEBSITE leads (not Google Ads, not Meta lead pages)
    else if (!isGoogleAdsLead) {
      try {
        const websiteLeadPayload = {
          name: name || '',
          email: email || '',
          phoneNumber: phone || '',
          propertyPin: pincode || '',
          verificationStatus: normalizedVerificationStatus,
          otpSuccess: normalizedOtpSuccess,
        };

        console.log('Sending data to WebsiteLead API:', websiteLeadPayload);

        const websiteLeadResponse = await fetch('https://Hows.hubinterior.com/v1/WebsiteLead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(websiteLeadPayload),
        });

        if (websiteLeadResponse.ok) {
          const websiteLeadText = await websiteLeadResponse.text();
          console.log('WebsiteLead API response:', websiteLeadText);
        } else {
          console.error('WebsiteLead API error:', websiteLeadResponse.status, websiteLeadResponse.statusText);
        }
      } catch (websiteLeadError) {
        console.error('Error sending to WebsiteLead API:', websiteLeadError);
      }
    } else {
      console.log(
        'Skipping WebsiteLead API for Google Ads lead from path:',
        path
      );
    }

    console.log('Environment variables check:');
    console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER);
    console.log('GMAIL_USER value (first 3 chars):', process.env.GMAIL_USER ? process.env.GMAIL_USER.substring(0, 3) + '...' : 'NOT SET');
    console.log('GMAIL_PASS exists:', !!process.env.GMAIL_PASS);
    console.log('GMAIL_PASS length:', process.env.GMAIL_PASS ? process.env.GMAIL_PASS.length : 0);

    // Check if required environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Gmail credentials not configured');
      console.error('GMAIL_USER:', process.env.GMAIL_USER ? 'SET' : 'NOT SET');
      console.error('GMAIL_PASS:', process.env.GMAIL_PASS ? 'SET' : 'NOT SET');
      console.log('For testing purposes, returning success without sending email');
      return NextResponse.json({
        success: true,
        message: 'Form data received successfully (email not sent - credentials not configured)',
      });
    }

    // ✅ Setup transport using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      // Add connection timeout and retry options
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // ✅ Email content including all form data
    const verificationStatusText =
      normalizedVerificationStatus === 'VERIFIED' ? '✅ VERIFIED' : '⚠️ UNVERIFIED - NEEDS FOLLOW UP';

    // Check if this is a calculator submission (has calculator data)
    const isCalculatorSubmission = !!(
      calculator ||
      bhkType ||
      rooms ||
      wardrobe ||
      kitchen ||
      collections ||
      material
    );

    // Determine subject based on page URL and submission type
    const isContactPage = pathLower.includes('/contact');
    const isInteriorCalculator = pathLower.includes('/interior-designers-in-bangalore/calculator');
    // Handle common misspelling as well
    const isHubCalculator =
      pathLower.includes('/hubinterior/callculator') ||
      pathLower.includes('/hubinterior/calculator') ||
      pathLower.includes('hubinterior.com/calculator');
    // Home calculator should also catch the root /calculator path when not on the interior page
    const isHomeCalculator =
      !isInteriorCalculator && (pathLower.includes('/calculator') || pathLower.endsWith('/calculator'));

    let subject = 'Google Ads Lead (Unverified)';

    // Check for Meta lead page first (best-interior-designers-in-bangalore)
    if (isBestInteriorBangalorePage) {
      subject =
        normalizedVerificationStatus === 'VERIFIED'
          ? 'Meta Lead (Verified)'
          : 'Meta Lead (Unverified)';
    } else if (isInteriorCalculator || isInteriorBangalorePage) {
      subject =
        normalizedVerificationStatus === 'VERIFIED'
          ? 'Google Ads Lead (Verified)'
          : 'Google Ads Lead (Unverified)';
    } else if (isHubCalculator) {
      subject =
        normalizedVerificationStatus === 'VERIFIED' ? 'Website Lead (Verified)' : 'Website Lead (Unverified)';
    } else if (isHomeCalculator) {
      subject =
        normalizedVerificationStatus === 'VERIFIED' ? 'Website Lead (Verified)' : 'Website Lead (Unverified)';
    } else if (isContactPage) {
      subject =
        normalizedVerificationStatus === 'VERIFIED'
          ? 'Lead from Website(Verified)'
          : 'Lead from Website (Unverified)';
    } else if (isCalculatorSubmission) {
      // If calculator data is present but URL didn't match known routes, default to Website Lead
      subject =
        normalizedVerificationStatus === 'VERIFIED' ? 'Website Lead (Verified)' : 'Website Lead (Unverified)';
    } else {
      subject =
        normalizedVerificationStatus === 'VERIFIED'
          ? 'Google Ads Lead (Verified)'
          : 'Google Ads Lead (Unverified)';
    }

    const renderJSON = (value: unknown) => {
      try {
        if (typeof value === 'string') return value;
        return value ? JSON.stringify(value, null, 2) : 'Not provided';
      } catch {
        return String(value ?? 'Not provided');
      }
    };

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // You can change this to a team email
      subject: subject,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Pincode:</strong> ${pincode || 'Not provided'}</p>
        <p><strong>Interior Setup:</strong> ${city || 'Not provided'}</p>
        <p><strong>Possession Timeline:</strong> ${possession || budget || 'Not provided'}</p>
        <p><strong>Preferred Date:</strong> ${date ? (date.includes('-') ? date : `Dec-${date}`) : 'Not provided'}</p>
        <p><strong>Preferred Time:</strong> ${time || 'Not provided'}</p>
        <p><strong>WhatsApp Consent:</strong> ${
          typeof whatsappConsent === 'boolean' ? (whatsappConsent ? 'Yes' : 'No') : 'Not provided'
        }</p>
        <p><strong>Verification Status:</strong> <span style="color: ${
          normalizedVerificationStatus === 'VERIFIED' ? 'green' : 'red'
        }; font-weight: bold;">${verificationStatusText}</span></p>
        <p><strong>Page URL:</strong> <a href="${pageUrl || '#'}" target="_blank">${
          pageUrl || 'Not provided'
        }</a></p>
        ${
          normalizedVerificationStatus !== 'VERIFIED'
            ? '<p style="color: red; font-weight: bold;">⚠️ IMPORTANT: This user did not verify their phone number. Please follow up to verify their details.</p>'
            : ''
        }
        <hr/>
        <h3>Selections (Calculator)</h3>
        <p><strong>BHK Type:</strong> ${bhkType || (calculator?.bhkType ?? 'Not provided')}</p>
        <p><strong>Rooms:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(
          rooms || calculator?.rooms
        )}</pre>
        <p><strong>Wardrobe:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(
          wardrobe || calculator?.wardrobe
        )}</pre>
        <p><strong>Kitchen:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(
          kitchen || calculator?.kitchen
        )}</pre>
        <p><strong>Collections:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(
          collections || calculator?.collections
        )}</pre>
        <p><strong>Material Finish:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(
          material || calculator?.material
        )}</pre>
      `,
    };

    console.log('Sending email with data (flattened + calculator):', {
      name,
      phone,
      email,
      pincode,
      city,
      budget,
      possession,
      whatsappConsent,
      pageUrl,
      verificationStatus,
      date,
      time,
      bhkType,
      rooms,
      wardrobe,
      kitchen,
      collections,
      material,
      calculator,
    });

    console.log('Sending email with configuration:', {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      hasUser: !!process.env.GMAIL_USER,
      hasPass: !!process.env.GMAIL_PASS
    });
    
    // Verify transporter connection before sending
    try {
      await transporter.verify();
      console.log('Gmail transporter verified successfully');
    } catch (verifyError) {
      console.error('Gmail transporter verification failed:', verifyError);
      const verifyMsg = verifyError instanceof Error ? verifyError.message : 'Unknown verification error';
      throw new Error(`Gmail connection failed: ${verifyMsg}`);
    }
    
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorCode = (error && typeof error === 'object' && 'code' in error) 
      ? String(error.code) 
      : 'UNKNOWN';
    
    // Log full error details for debugging
    console.error('Error details:', {
      message: errorMessage,
      code: errorCode,
      name: error instanceof Error ? error.name : undefined,
      stack: error instanceof Error ? error.stack : undefined,
      fullError: JSON.stringify(error, Object.getOwnPropertyNames(error))
    });
    
    // Provide more specific error messages based on common Gmail errors
    let userMessage = 'Failed to send email. Please try again.';
    
    // Check for specific Gmail error codes and messages
    if (errorCode === 'EAUTH' || errorMessage.includes('Invalid login') || errorMessage.includes('authentication') || errorMessage.includes('Username and Password not accepted')) {
      userMessage = 'Email authentication failed. Please check Gmail credentials in server configuration.';
      console.error('Gmail authentication error - check GMAIL_USER and GMAIL_PASS in .env.local');
    } else if (errorCode === 'ECONNECTION' || errorMessage.includes('ECONNECTION') || errorMessage.includes('Connection closed') || errorMessage.includes('timeout')) {
      userMessage = 'Connection timeout. Please check your internet connection and try again.';
    } else if (errorMessage.includes('self signed certificate') || errorMessage.includes('certificate')) {
      userMessage = 'Email service certificate error. Please contact support.';
    } else if (errorMessage.includes('rate limit') || errorMessage.includes('quota')) {
      userMessage = 'Email service rate limit exceeded. Please try again later.';
    }
    
    // Log full error for debugging
    if (error && typeof error === 'object') {
      console.error('Full email error object:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
    }
    
    return NextResponse.json(
      {
        success: false,
        message: userMessage,
        error: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
        errorCode: process.env.NODE_ENV === 'development' ? errorCode : undefined
      },
      { status: 500 },
    );
  }
}
