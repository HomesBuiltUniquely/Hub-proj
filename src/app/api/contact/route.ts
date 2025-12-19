import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Send data to unified API endpoint
    try {
      const websiteLeadPayload = {
        name: name || '',
        email: email || '',
        phoneNumber: phone || '',
        propertyPin: pincode || '',
      };

      console.log('Sending calculator data to WebsiteLead API:', websiteLeadPayload);
      
      const websiteLeadResponse = await fetch('https://Hows.hubinterior.com/v1/WebsiteLead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(websiteLeadPayload),
      });

      if (websiteLeadResponse.ok) {
        const websiteLeadData = await websiteLeadResponse.json();
        console.log('WebsiteLead API response:', websiteLeadData);
      } else {
        console.error('WebsiteLead API error:', websiteLeadResponse.status, websiteLeadResponse.statusText);
      }
    } catch (websiteLeadError) {
      console.error('Error sending to WebsiteLead API:', websiteLeadError);
      // Continue with email flow even if WebsiteLead API fails
    }

    console.log('Environment variables check:');
    console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER);
    console.log('GMAIL_PASS exists:', !!process.env.GMAIL_PASS);

    // Check if required environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Gmail credentials not configured');
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
    });

    // ✅ Email content including all form data
    const verificationStatusText = verificationStatus === 'Verified User' ? '✅ VERIFIED' : '⚠️ UNVERIFIED - NEEDS FOLLOW UP';
    
    // Check if this is a calculator submission (has calculator data)
    const isCalculatorSubmission = !!(calculator || bhkType || rooms || wardrobe || kitchen || collections || material);
    
    // Determine subject based on page URL and submission type
    const path = pageUrl || '';
    const pathLower = path.toLowerCase();
    const isContactPage = pathLower.includes('/contact');
    const isInteriorCalculator = pathLower.includes('/interior-designers-in-bangalore/calculator');
    // Handle common misspelling as well
    const isHubCalculator = pathLower.includes('/hubinterior/callculator') || pathLower.includes('/hubinterior/calculator') || pathLower.includes('hubinterior.com/calculator');
    // Home calculator should also catch the root /calculator path when not on the interior page
    const isHomeCalculator = (!isInteriorCalculator) && (pathLower.includes('/calculator') || pathLower.endsWith('/calculator'));

    let subject = 'Google Ads Lead (Unverified)';

    if (isInteriorCalculator) {
      subject = verificationStatus === 'Verified User'
        ? 'Google Ads Lead (Verified)'
        : 'Google Ads Lead (Unverified)';
    } else if (isHubCalculator) {
      subject = verificationStatus === 'Verified User'
        ? 'Website Lead (Verified)'
        : 'Website Lead (Unverified)';
    } else if (isHomeCalculator) {
      subject = verificationStatus === 'Verified User'
        ? 'Website Lead (Verified)'
        : 'Website Lead (Unverified)';
    } else if (isContactPage) {
      subject = verificationStatus === 'Verified User'
        ? 'Lead from Website(Verified)'
        : 'Lead from Website (Unverified)';
    } else if (isCalculatorSubmission) {
      // If calculator data is present but URL didn’t match known routes, default to Website Lead
      subject = verificationStatus === 'Verified User'
        ? 'Website Lead (Verified)'
        : 'Website Lead (Unverified)';
    } else {
      subject = verificationStatus === 'Verified User'
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
      from:  process.env.GMAIL_USER ,
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
        <p><strong>Preferred Date:</strong> ${date ? `Dec-${date}` : 'Not provided'}</p>
        <p><strong>Preferred Time:</strong> ${time || 'Not provided'}</p>
        <p><strong>WhatsApp Consent:</strong> ${typeof whatsappConsent === 'boolean' ? (whatsappConsent ? 'Yes' : 'No') : 'Not provided'}</p>
        <p><strong>Verification Status:</strong> <span style="color: ${verificationStatus === 'Verified User' ? 'green' : 'red'}; font-weight: bold;">${verificationStatusText}</span></p>
        <p><strong>Page URL:</strong> <a href="${pageUrl || '#'}" target="_blank">${pageUrl || 'Not provided'}</a></p>
        ${verificationStatus !== 'Verified User' ? '<p style="color: red; font-weight: bold;">⚠️ IMPORTANT: This user did not verify their phone number. Please follow up to verify their details.</p>' : ''}
        <hr/>
        <h3>Selections (Calculator)</h3>
        <p><strong>BHK Type:</strong> ${bhkType || (calculator?.bhkType ?? 'Not provided')}</p>
        <p><strong>Rooms:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(rooms || calculator?.rooms)}</pre>
        <p><strong>Wardrobe:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(wardrobe || calculator?.wardrobe)}</pre>
        <p><strong>Kitchen:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(kitchen || calculator?.kitchen)}</pre>
        <p><strong>Collections:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(collections || calculator?.collections)}</pre>
        <p><strong>Material Finish:</strong></p>
        <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(material || calculator?.material)}</pre>
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

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    }, { status: 500 });
  }
}
