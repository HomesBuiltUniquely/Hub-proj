import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phoneNumber, phone, pincode, tellUsMore, pageUrl } = body;

    // Handle both desktop form (phoneNumber) and mobile form (phone) field names
    const phoneNumberFinal = phoneNumber || phone;

    console.log('Get Estimate API route called with data:', {
      name,
      email,
      phoneNumberFinal,
      pincode,
      tellUsMore,
    });

    // Send data to unified API endpoint
    try {
      const websiteLeadPayload = {
        name: name || '',
        email: email || '',
        phoneNumber: phoneNumberFinal || '',
        propertyPin: pincode || '',
      };

      console.log('Sending get-estimate data to WebsiteLead API:', websiteLeadPayload);
      
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
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // You can change this to a team email
      subject: 'Get Estimate Form Submission',
      html: `
        <h3>Get Estimate Form Submission</h3>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Phone Number:</strong> ${phoneNumberFinal || 'Not provided'}</p>
        <p><strong>Pincode:</strong> ${pincode || 'Not provided'}</p>
        <p><strong>Tell Us More:</strong> ${tellUsMore || 'Not provided'}</p>
        <hr/>
        <p><em>This form was submitted from the Get Estimate page.</em></p>
      `,
    };

    console.log('Sending email with Get Estimate data:', {
      name,
      email,
      phoneNumberFinal,
      pincode,
      tellUsMore,
    });

    await transporter.sendMail(mailOptions);
    console.log('Get Estimate email sent successfully');
    
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Get Estimate email send error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    }, { status: 500 });
  }
}

