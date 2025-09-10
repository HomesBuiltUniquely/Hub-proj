import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      city,
    } = body;

    console.log('Franchise API route called with data:', {
      name,
      email,
      phone,
      city,
    });

    // Check if required environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Gmail credentials not configured');
      console.log('For testing purposes, returning success without sending email');
      return NextResponse.json({ 
        success: true, 
        message: 'Franchise form data received successfully (email not sent - credentials not configured)',
      });
    }

    // Setup transport using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_FRANCHISE_USER,
        pass: process.env.GMAIL_FRANCHISE_PASS,
      },
    });

    // Email content for franchise inquiries
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to:  process.env.GMAIL_FRANCHISE_USER || process.env.GMAIL_FRANCHISE_USER, 
      subject: 'New Franchise Inquiry - HUB Interior',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef0101; border-bottom: 2px solid #ef0101; padding-bottom: 10px;">
            🏢 New Franchise Inquiry
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>City:</strong> ${city || 'Not provided'}</p>
          </div>

          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
            <h4 style="color: #856404; margin-top: 0;">📋 Next Steps</h4>
            <ul style="color: #856404;">
              <li>Contact the potential franchisee within 24 hours</li>
              <li>Send franchise information package</li>
              <li>Schedule initial consultation call</li>
              <li>Assess their investment capacity and location suitability</li>
            </ul>
          </div>

          <div style="background-color: #d1ecf1; padding: 15px; border-radius: 8px; border-left: 4px solid #17a2b8; margin-top: 20px;">
            <h4 style="color: #0c5460; margin-top: 0;">💼 Franchise Information</h4>
            <p style="color: #0c5460; margin: 0;">
              This inquiry came from the Franchise page. The person is interested in becoming a HUB Interior franchisee.
            </p>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was automatically generated from the HUB Interior franchise inquiry form.
          </p>
        </div>
      `,
    };

    console.log('Sending franchise email to:', process.env.FRANCHISE_EMAIL || process.env.GMAIL_USER);

    await transporter.sendMail(mailOptions);
    console.log('Franchise email sent successfully');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Franchise inquiry submitted successfully! We will contact you soon.' 
    });
  } catch (error) {
    console.error('Franchise email send error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit franchise inquiry. Please try again.' 
    }, { status: 500 });
  }
}
