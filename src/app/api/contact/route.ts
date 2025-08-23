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

    // ✅ N8N-Friendly Email Configuration
    const timestamp = new Date().toISOString();
    const uniqueId = `LEAD_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // N8N-Friendly Subject with consistent format
    let subject = '';
    if (verificationStatus === 'Verified User') {
      if (pageUrl && pageUrl.includes('/Contact')) {
        subject = '[N8N-LEAD] Website Contact Form - VERIFIED ✅';
      } else {
        subject = '[N8N-LEAD] Google Ads Lead - VERIFIED ✅';
      }
    } else {
      if (pageUrl && pageUrl.includes('/Contact')) {
        subject = '[N8N-LEAD] Website Contact Form - UNVERIFIED ⚠️';
      } else {
        subject = '[N8N-LEAD] Google Ads Lead - UNVERIFIED ⚠️';
      }
    }
    
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email, // User's email for reply
    subject: subject,
    // N8N-Friendly Headers
    headers: {
      'X-N8N-Lead-ID': uniqueId,
      'X-N8N-Source': pageUrl && pageUrl.includes('/Contact') ? 'Website' : 'Google Ads',
      'X-N8N-Status': verificationStatus === 'Verified User' ? 'VERIFIED' : 'UNVERIFIED',
      'X-N8N-Timestamp': timestamp,
      'X-N8N-Form-Type': 'Contact'
    },
    html: `
      <!-- N8N-Friendly Email Template -->
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- N8N Header with Unique ID -->
          <div style="background-color: #007bff; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">🎯 NEW LEAD RECEIVED</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px;">ID: ${uniqueId}</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Status: ${verificationStatus === 'Verified User' ? '✅ VERIFIED' : '⚠️ UNVERIFIED'}</p>
          </div>

          <!-- Lead Information -->
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">👤 Lead Details</h3>
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
                <strong style="color: #555;">Email:</strong><br>
                <span style="color: #333; font-size: 16px;">${email || 'Not provided'}</span>
              </div>
              <div>
                <strong style="color: #555;">Pincode:</strong><br>
                <span style="color: #333; font-size: 16px;">${pincode || 'Not provided'}</span>
              </div>
            </div>
          </div>

          <!-- Project Details -->
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">🏗️ Project Information</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <strong style="color: #555;">Interior Setup:</strong><br>
                <span style="color: #333; font-size: 16px;">${city || 'Not provided'}</span>
              </div>
              <div>
                <strong style="color: #555;">Possession Timeline:</strong><br>
                <span style="color: #333; font-size: 16px;">${budget || 'Not provided'}</span>
              </div>
            </div>
          </div>

          <!-- Additional Details -->
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">📋 Additional Information</h3>
            <p><strong>WhatsApp Consent:</strong> ${whatsappConsent ? '✅ Yes' : '❌ No'}</p>
            <p><strong>Page URL:</strong> <a href="${pageUrl || 'Not provided'}" target="_blank" style="color: #007bff;">${pageUrl || 'Not provided'}</a></p>
            <p><strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>

          <!-- N8N Metadata -->
          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #2196f3;">
            <h4 style="color: #1976d2; margin: 0 0 10px 0; font-size: 16px;">🔧 N8N Automation Data</h4>
            <p style="color: #1976d2; margin: 5px 0; font-size: 12px;"><strong>Lead ID:</strong> ${uniqueId}</p>
            <p style="color: #1976d2; margin: 5px 0; font-size: 12px;"><strong>Source:</strong> ${pageUrl && pageUrl.includes('/Contact') ? 'Website Contact Form' : 'Google Ads'}</p>
            <p style="color: #1976d2; margin: 5px 0; font-size: 12px;"><strong>Verification:</strong> ${verificationStatus === 'Verified User' ? 'VERIFIED' : 'UNVERIFIED'}</p>
            <p style="color: #1976d2; margin: 5px 0; font-size: 12px;"><strong>Timestamp:</strong> ${timestamp}</p>
          </div>

          <!-- Action Required -->
          ${verificationStatus !== 'Verified User' ? `
          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #856404; margin: 0 0 10px 0; font-size: 18px;">⚠️ IMMEDIATE ACTION REQUIRED</h3>
            <p style="color: #856404; margin: 0; font-size: 14px;">
              This user did not verify their phone number. Please follow up immediately to verify their details and convert this lead.
            </p>
          </div>
          ` : ''}

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; margin: 0; font-size: 12px;">
              Reply to this email to contact: <strong>${email || 'No email provided'}</strong>
            </p>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">
              Lead ID: ${uniqueId} | Form: Contact
            </p>
          </div>

        </div>
      </div>
    `,
  };

    console.log('Sending N8N-friendly email with data:', { name, phone, email, pincode, city, budget, whatsappConsent, pageUrl, verificationStatus, uniqueId });

    await transporter.sendMail(mailOptions);
    console.log('N8N-friendly email sent successfully with ID:', uniqueId);
    
    return NextResponse.json({ success: true, message: 'Email sent successfully', leadId: uniqueId });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    }, { status: 500 });
  }
}
