import { NextResponse } from 'next/server';

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
    const { phone, otp } = await req.json();

    // Check if OTP store exists
    if (!global.otpStore) {
      return NextResponse.json({ 
        success: false, 
        message: 'No OTP found. Please request a new OTP.' 
      }, { status: 400 });
    }

    const otpData = global.otpStore.get(phone);
    
    if (!otpData) {
      return NextResponse.json({ 
        success: false, 
        message: 'No OTP found for this phone number. Please request a new OTP.' 
      }, { status: 400 });
    }

    // Check if OTP has expired (5 minutes)
    const now = Date.now();
    const otpAge = now - otpData.timestamp;
    const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds

    if (otpAge > fiveMinutes) {
      // Remove expired OTP
      global.otpStore.delete(phone);
      return NextResponse.json({ 
        success: false, 
        message: 'OTP has expired. Please request a new one.' 
      }, { status: 400 });
    }

    // Check if too many attempts
    if (otpData.attempts >= 3) {
      // Remove OTP after too many failed attempts
      global.otpStore.delete(phone);
      return NextResponse.json({ 
        success: false, 
        message: 'Too many failed attempts. Please request a new OTP.' 
      }, { status: 400 });
    }

    // Verify OTP
    if (otpData.otp === otp) {
      // Remove OTP after successful verification
      global.otpStore.delete(phone);
      
      return NextResponse.json({ 
        success: true, 
        message: 'OTP verified successfully' 
      });
    } else {
      // Increment attempt counter
      otpData.attempts += 1;
      global.otpStore.set(phone, otpData);
      
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid OTP. Please try again.' 
      }, { status: 400 });
    }

  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to verify OTP. Please try again.' 
    }, { status: 500 });
  }
}
