import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      message
    } = body;

    console.log('Contact form API route called with data:', {
      firstName,
      lastName,
      email,
      phone,
      message
    });

    // Check if required environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Gmail credentials not configured');
      console.log('For testing purposes, returning success without sending email');
      return NextResponse.json({ 
        success: true, 
        message: 'Form data received successfully (email not sent - credentials not configured)',
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

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // You can change this to a team email
      subject: 'New ContactUs Form Submission - Hub Interior',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #dc2626; margin-bottom: 20px; text-align: center;">New Contact Form Submission</h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 15px;">Contact Information</h3>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName || 'Not provided'} ${lastName ? lastName : ''}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email || ''}" style="color: #dc2626;">${email || 'Not provided'}</a></p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phone || ''}" style="color: #dc2626;">${phone || 'Not provided'}</a></p>
            </div>
            
            ${message ? `
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
              <h3 style="color: #333; margin-bottom: 15px;">Message</h3>
              <p style="margin: 0; line-height: 1.6; color: #555;">${message}</p>
            </div>
            ` : ''}
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
              <p>This message was sent from the Hub Interior contact form.</p>
              <p>Please respond to the customer within 24 hours.</p>
            </div>
          </div>
        </div>
      `,
    };

    console.log('Sending contact form email...');
    console.log('Email configuration:', {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      hasUser: !!process.env.GMAIL_USER,
      hasPass: !!process.env.GMAIL_PASS
    });
    
    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form email send error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorCode = error instanceof Error && 'code' in error ? (error as any).code : 'UNKNOWN';
    console.error('Error details:', {
      message: errorMessage,
      code: errorCode,
      stack: error instanceof Error ? error.stack : undefined
    });
    
    // Provide more specific error messages
    let userMessage = 'Failed to send message. Please try again or contact us directly.';
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
