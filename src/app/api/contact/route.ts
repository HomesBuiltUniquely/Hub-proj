import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, email, pincode, city, budget, whatsappConsent, pageUrl, verificationStatus } = await req.json();

    console.log('API route called with data:', { name, phone, email, pincode, city, budget, whatsappConsent, pageUrl, verificationStatus });
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
    
    // Determine subject based on page URL
    let subject = 'Google Ads Lead (Unverified)';
    if (verificationStatus === 'Verified User') {
      if (pageUrl && pageUrl.includes('/Contact')) {
        subject = 'Lead from Website(Verified)';
      } else {
        subject = 'Google Ads Lead (Verified)';
      }
    } else {
      if (pageUrl && pageUrl.includes('/Contact')) {
        subject = 'Lead from Website (Unverified)';
      } else {
        subject = 'Google Ads Lead (Unverified)';
      }
    }
    
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
        <p><strong>Possession Timeline:</strong> ${budget || 'Not provided'}</p>
        <p><strong>WhatsApp Consent:</strong> ${whatsappConsent ? 'Yes' : 'No'}</p>
        <p><strong>Verification Status:</strong> <span style="color: ${verificationStatus === 'Verified User' ? 'green' : 'red'}; font-weight: bold;">${verificationStatusText}</span></p>
        <p><strong>Page URL:</strong> <a href="${pageUrl || 'Not provided'}" target="_blank">${pageUrl || 'Not provided'}</a></p>
        ${verificationStatus !== 'Verified User' ? '<p style="color: red; font-weight: bold;">⚠️ IMPORTANT: This user did not verify their phone number. Please follow up to verify their details.</p>' : ''}
    `,
  };

    console.log('Sending email with data:', { name, phone, email, pincode, city, budget, whatsappConsent, pageUrl, verificationStatus });

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    }, { status: 500 });
  }
}
