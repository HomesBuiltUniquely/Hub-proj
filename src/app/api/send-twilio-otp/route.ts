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
    if (!phone) {
      return NextResponse.json({ success: false, message: 'Phone is required' }, { status: 400 });
    }

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

    // Generate 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    
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

    // Normalize phone to E.164 (+91XXXXXXXXXX) for India
    const digits = String(phone).replace(/\D/g, '');
    let toNumber = '';
    if (phone.startsWith('+')) {
      toNumber = phone; // assume already E.164
    } else if (digits.length === 10) {
      toNumber = `+91${digits}`;
    } else if (digits.length === 12 && digits.startsWith('91')) {
      toNumber = `+${digits}`;
    } else {
      return NextResponse.json({ success: false, message: 'Invalid phone number' }, { status: 400 });
    }

    // Send SMS via Twilio
    const message = await client.messages.create({
      body: `Your HUB INTERIOR verification code is: ${otp}. Valid for 5 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: toNumber,
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
    
    const message = process.env.NODE_ENV !== 'production' && error instanceof Error
      ? `Failed to send OTP: ${error.message}`
      : 'Failed to send OTP. Please try again.';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
