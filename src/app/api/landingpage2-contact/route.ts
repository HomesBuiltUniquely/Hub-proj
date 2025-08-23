import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse FormData instead of JSON
    const formData = await req.formData();
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const pincode = formData.get('pincode') as string;
    const propertyType = formData.get('propertyType') as string;
    const timeSlot = formData.get('timeSlot') as string;
    const pageUrl = formData.get('pageUrl') as string;
    const file = formData.get('file') as File | null;

    console.log('LandingPage2 API route called with data:', { name, phone, email, pincode, propertyType, timeSlot, pageUrl, hasFile: !!file });
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
    const uniqueId = `APPOINTMENT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // N8N-Friendly Subject with consistent format
    const subject = `[N8N-APPOINTMENT] Meta Lead - ${name} - ${propertyType}`;
    
    // Prepare email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email, // User's email for reply
      subject: subject,
      // N8N-Friendly Headers
      headers: {
        'X-N8N-Appointment-ID': uniqueId,
        'X-N8N-Source': 'Meta Ads',
        'X-N8N-Form-Type': 'Appointment',
        'X-N8N-Property-Type': propertyType,
        'X-N8N-Timestamp': timestamp,
        'X-N8N-Lead-Name': name
      },
      html: `
        <!-- N8N-Friendly Email Template -->
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- N8N Header with Unique ID -->
            <div style="background-color: #ef0101; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🏠 Complete Home Interiors</h1>
              <p style="margin: 5px 0 0 0; font-size: 16px;">Appointment Booking Request</p>
              <p style="margin: 5px 0 0 0; font-size: 14px;">ID: ${uniqueId}</p>
            </div>

            <!-- Client Information -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h2 style="color: #333; margin: 0 0 15px 0; font-size: 20px;">👤 Client Information</h2>
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
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h2 style="color: #333; margin: 0 0 15px 0; font-size: 20px;">🏗️ Project Details</h2>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <strong style="color: #555;">Property Type:</strong><br>
                  <span style="color: #333; font-size: 16px; font-weight: bold;">${propertyType || 'Not selected'}</span>
                </div>
                <div>
                  <strong style="color: #555;">Preferred Time Slot:</strong><br>
                  <span style="color: #333; font-size: 16px; font-weight: bold;">${timeSlot || 'Not selected'}</span>
                </div>
              </div>
            </div>

            <!-- File Upload Information -->
            ${file ? `
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px; border: 1px solid #4caf50;">
              <h2 style="color: #2e7d32; margin: 0 0 15px 0; font-size: 20px;">📎 File Attached</h2>
              <div style="color: #2e7d32; font-size: 16px;">
                <strong>File Name:</strong> ${file.name}<br>
                <strong>File Size:</strong> ${(file.size / 1024).toFixed(2)} KB<br>
                <strong>File Type:</strong> ${file.type}
              </div>
            </div>
            ` : ''}

            <!-- N8N Metadata -->
            <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 25px; border: 1px solid #2196f3;">
              <h4 style="color: #1976d2; margin: 0 0 10px 0; font-size: 16px;">🔧 N8N Automation Data</h4>
              <p style="color: #1976d2; margin: 5px 0; font-size: 12px;"><strong>Appointment ID:</strong> ${uniqueId}</p>
              <p style="color: #1976d2; margin: 5px 0; font-size: 12px;"><strong>Source:</strong> Meta Ads</p>
              <p style="color: #1976d2; margin: 5px 0; font-size: 12px;"><strong>Form Type:</strong> Appointment Booking</p>
              <p style="color: #1976d2; margin: 5px 0; font-size: 12px;"><strong>Property Type:</strong> ${propertyType || 'Not selected'}</p>
              <p style="color: #1976d2; margin: 5px 0; font-size: 12px;"><strong>Timestamp:</strong> ${timestamp}</p>
            </div>

            <!-- Action Required -->
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #856404; margin: 0 0 10px 0; font-size: 18px;">⚠️ Action Required</h3>
              <p style="color: #856404; margin: 0; font-size: 14px;">
                Please contact the client within 24 hours to confirm the appointment and discuss project requirements.
                ${file ? ' A file has been attached to this request for your review.' : ''}
              </p>
            </div>

            <!-- Footer -->
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 0; font-size: 12px;">
                Reply to this email to contact: <strong>${email || 'No email provided'}</strong>
              </p>
              <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">
                This request was submitted from: <a href="${pageUrl || 'Not provided'}" target="_blank" style="color: #ef0101;">${pageUrl || 'Not provided'}</a>
              </p>
              <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">
                Appointment ID: ${uniqueId} | Form: Appointment
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

    // Add file attachment if file exists
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      mailOptions.attachments = [{
        filename: file.name,
        content: buffer,
        contentType: file.type
      }];
    }

    console.log('Sending N8N-friendly LandingPage2 email with data:', { name, phone, email, pincode, propertyType, timeSlot, pageUrl, hasFile: !!file, uniqueId });

    await transporter.sendMail(mailOptions);
    console.log('N8N-friendly LandingPage2 email sent successfully with ID:', uniqueId);
    
    return NextResponse.json({ success: true, message: 'Appointment request sent successfully', appointmentId: uniqueId });
  } catch (error) {
    console.error("LandingPage2 email send error:", error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send appointment request. Please try again.' 
    }, { status: 500 });
  }
} 