import { NextResponse } from 'next/server';
import twilio from 'twilio';

// TypeScript declarations for global OTP store
declare global {
  var otpStore: Map<string, {
    otp: string;
    timestamp: number;
    attempts: number;
  }> | undefined;
}

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();

    // Check if required environment variables are set
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER) {
      console.error('Twilio credentials not configured');
      return NextResponse.json({ 
        success: false, 
        message: 'SMS service not configured' 
      }, { status: 500 });
    }

    // Initialize Twilio client
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store OTP in memory (in production, use Redis or database)
    // For now, we'll use a simple in-memory store
    if (!global.otpStore) {
      global.otpStore = new Map();
    }
    
    global.otpStore.set(phone, {
      otp,
      timestamp: Date.now(),
      attempts: 0
    });

    // Send SMS via Twilio
    const message = await client.messages.create({
      body: `Your HUB INTERIOR verification code is: ${otp}. Valid for 5 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone.startsWith('+') ? phone : `+91${phone}`
    });

    console.log('SMS sent successfully:', message.sid);
    
    return NextResponse.json({ 
      success: true, 
      message: 'OTP sent successfully',
      sid: message.sid
    });

  } catch (error) {
    console.error('Error sending OTP:', error);
    
    if (error instanceof Error) {
      // Handle Twilio-specific errors
      if (error.message.includes('Invalid phone number')) {
        return NextResponse.json({ 
          success: false, 
          message: 'Invalid phone number format' 
        }, { status: 400 });
      }
      
      if (error.message.includes('not a valid phone number')) {
        return NextResponse.json({ 
          success: false, 
          message: 'Please enter a valid phone number' 
        }, { status: 400 });
      }
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send OTP. Please try again.' 
    }, { status: 500 });
  }
}
