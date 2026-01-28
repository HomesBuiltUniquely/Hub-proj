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

    // Use franchise-specific credentials
    const franchiseEmail = process.env.GMAIL_FRANCHISE_USER || process.env.FRANCHISE_EMAIL || process.env.GMAIL_USER;
    const franchisePassRaw = process.env.GMAIL_FRANCHISE_PASS || process.env.GMAIL_PASS;
    // Remove spaces from app password (Gmail app passwords sometimes have spaces)
    const franchisePass = franchisePassRaw ? franchisePassRaw.replace(/\s/g, '') : '';
    
    // Get franchise recipient emails
    const franchiseEmail1 = process.env.GMAIL_FRANCHISE_USER; // dorothy@hubinterior.com
    const franchiseEmail2 = process.env.GMAIL_FRANCHISE_USER2; // expansion@hubinterior.com
    
    // Use franchise email as sender, fallback to GMAIL_USER
    const fromEmail = franchiseEmail1 || process.env.GMAIL_USER;
    
    // Build array of recipient emails (remove duplicates and empty values)
    const recipientEmails: string[] = [];
    if (franchiseEmail1) recipientEmails.push(franchiseEmail1);
    if (franchiseEmail2 && franchiseEmail2 !== franchiseEmail1) recipientEmails.push(franchiseEmail2);
    
    // Fallback to franchiseEmail if no recipients found
    const toEmails = recipientEmails.length > 0 ? recipientEmails : [franchiseEmail];

    // Check if required environment variables are set
    if (!fromEmail || !franchisePass) {
      console.error('Franchise Gmail credentials not configured');
      console.error('GMAIL_FRANCHISE_USER:', !!franchiseEmail1, 'GMAIL_FRANCHISE_PASS:', !!process.env.GMAIL_FRANCHISE_PASS);
      console.log('For testing purposes, returning success without sending email');
      return NextResponse.json({ 
        success: true, 
        message: 'Franchise form data received successfully (email not sent - credentials not configured)',
      });
    }
    
    console.log('Franchise email configuration:');
    console.log('From email:', fromEmail);
    console.log('Recipients:', toEmails.join(', '));
    console.log('GMAIL_FRANCHISE_USER:', franchiseEmail1 || 'Not set');
    console.log('GMAIL_FRANCHISE_USER2:', franchiseEmail2 || 'Not set');
    console.log('GMAIL_FRANCHISE_PASS:', process.env.GMAIL_FRANCHISE_PASS ? 'SET' : 'NOT SET');

    // Setup transport using Gmail with franchise credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: franchiseEmail1 || franchiseEmail, // Use GMAIL_FRANCHISE_USER for authentication
        pass: franchisePass,
      },
      // Add connection timeout and retry options
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Email content for franchise inquiries
    const mailOptions = {
      from: fromEmail,
      to: toEmails.join(', '), // Send to multiple recipients
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

    console.log('Sending franchise email to:', toEmails.join(', '));
    console.log('From email:', fromEmail);

    await transporter.sendMail(mailOptions);
    console.log('Franchise email sent successfully');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Franchise inquiry submitted successfully! We will contact you soon.' 
    });
  } catch (error) {
    console.error('Franchise email send error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error details:', {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json({ 
      success: false, 
      message: `Failed to submit franchise inquiry: ${errorMessage}. Please try again.` 
    }, { status: 500 });
  }
}
