import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getVerificationStatus } from '@/lib/leadVerification';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, pincode, pageUrl } = body;

    console.log('Popup form API route called with data:', { name, phone, pincode, pageUrl });
    
    // Send data to unified API endpoint
    try {
      const websiteLeadPayload = {
        name: name || '',
        email: '', // Popup doesn't collect email
        phoneNumber: phone || '',
        propertyPin: pincode || '',
        verificationStatus: getVerificationStatus(false),
        otpSuccess: false,
      };

      console.log('Sending popup data to WebsiteLead API:', websiteLeadPayload);
      
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
        message: 'Form data received successfully (email not sent - credentials not configured)' 
      });
    }

    // Setup transport using Gmail
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

    // Use RECIPIENT_EMAIL if set, otherwise use GMAIL_USER
    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER;

    // Custom email format for Popup form submission
    const subject = `Popup Lead - ${name}`;
    
    // Prepare email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #ef0101; padding-bottom: 20px;">
              <h1 style="color: #ef0101; margin: 0; font-size: 28px; font-weight: bold;">🎁 Popup Form Submission</h1>
              <p style="color: #666; margin: 5px 0 0 0; font-size: 16px;">New Lead from Popup Modal</p>
            </div>

            <!-- Client Information -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h2 style="color: #333; margin: 0 0 15px 0; font-size: 20px;">👤 Lead Information</h2>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <strong style="color: #555;">Name:</strong><br>
                  <span style="color: #333; font-size: 16px;">${name || 'Not provided'}</span>
                </div>
                <div>
                  <strong style="color: #555;">Phone:</strong><br>
                  <span style="color: #333; font-size: 16px;">${phone || 'Not provided'}</span>
                </div>
                <div>
                  <strong style="color: #555;">Pincode:</strong><br>
                  <span style="color: #333; font-size: 16px;">${pincode || 'Not provided'}</span>
                </div>
              </div>
            </div>

            <!-- Action Required -->
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #856404; margin: 0 0 10px 0; font-size: 18px;">⚠️ Action Required</h3>
              <p style="color: #856404; margin: 0; font-size: 14px;">
                A new lead has been captured from the popup modal. Please contact the client to discuss their requirements and offer.
              </p>
            </div>

            <!-- Footer -->
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 0; font-size: 12px;">
                This request was submitted from: <a href="${pageUrl || 'Not provided'}" target="_blank" style="color: #ef0101;">${pageUrl || 'Not provided'}</a>
              </p>
              <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">
                Submitted on: ${new Date().toLocaleString('en-IN', { 
                  timeZone: 'Asia/Kolkata',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>

          </div>
        </div>
      `,
    };

    console.log('Sending popup form email with data:', { name, phone, pincode, pageUrl });
    console.log('Email configuration:', {
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      hasUser: !!process.env.GMAIL_USER,
      hasPass: !!process.env.GMAIL_PASS
    });

    await transporter.sendMail(mailOptions);
    console.log('Popup form email sent successfully');
    
    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error("Popup form email send error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorCode = (error && typeof error === 'object' && 'code' in error) 
      ? String(error.code) 
      : 'UNKNOWN';
    console.error('Error details:', {
      message: errorMessage,
      code: errorCode,
      stack: error instanceof Error ? error.stack : undefined
    });
    
    // Provide more specific error messages
    let userMessage = 'Failed to submit form. Please try again.';
    if (errorMessage.includes('Invalid login') || errorMessage.includes('authentication')) {
      userMessage = 'Email service authentication failed. Please contact support.';
    } else if (errorMessage.includes('ECONNECTION') || errorMessage.includes('timeout')) {
      userMessage = 'Connection timeout. Please try again.';
    }
    
    return NextResponse.json({ 
      success: false, 
      message: userMessage,
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 });
  }
}

