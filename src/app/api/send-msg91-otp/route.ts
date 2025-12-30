import { NextResponse } from 'next/server';

const MSG91_AUTH_KEY = '474017ATbezJxlxhn69454948P1';
const MSG91_TEMPLATE_ID = '694e515ab411140bc3164843';
const MSG91_SEND_OTP_URL = 'https://control.msg91.com/api/v5/otp';

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json(
        { success: false, message: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Normalize phone number to MSG91 format
    // Always add 91 prefix regardless of what user entered
    let mobileNumber = phone.toString().trim();
    
    // Remove any + or spaces, keep only digits
    mobileNumber = mobileNumber.replace(/[\s+]/g, '').replace(/\D/g, '');
    
    // Always add 91 prefix (even if it already starts with 91)
    mobileNumber = `91${mobileNumber}`;

    // Send OTP via MSG91 - POST method with query parameters
    const url = `${MSG91_SEND_OTP_URL}?otp_expiry=10&template_id=${MSG91_TEMPLATE_ID}&mobile=${mobileNumber}&authkey=${MSG91_AUTH_KEY}&realTimeResponse=1`;
    
    console.log('Sending MSG91 OTP request:', { url, mobileNumber, template_id: MSG91_TEMPLATE_ID, authkey: MSG91_AUTH_KEY });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
    });

    const responseText = await response.text();
    console.log('MSG91 OTP response status:', response.status);
    console.log('MSG91 OTP response body:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse MSG91 response as JSON:', responseText);
      // MSG91 might return plain text success message
      if (responseText.toLowerCase().includes('success') || response.ok) {
        return NextResponse.json({
          success: true,
          message: 'OTP sent successfully',
          requestId: responseText,
        });
      }
      return NextResponse.json(
        { success: false, message: 'Failed to send OTP. Please try again.' },
        { status: 500 }
      );
    }

    // MSG91 API v5 returns different response formats
    // Check for success indicators
    const isSuccess = data.type === 'success' || 
                     data.message === 'OTP sent successfully' || 
                     data.message?.toLowerCase().includes('success') ||
                     response.status === 200 || 
                     response.ok;

    if (isSuccess) {
      return NextResponse.json({
        success: true,
        message: 'OTP sent successfully',
        requestId: data.requestId || data.id || data.request_id || 'N/A',
      });
    } else {
      // Handle MSG91 error responses
      const errorMessage = data.message || data.error || data.msg || 'Failed to send OTP';
      console.error('MSG91 OTP send error:', data);
      
      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage,
          note: 'If OTP not received, it may be due to DND settings. Check MSG91 dashboard logs for delivery status.'
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error sending MSG91 OTP:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send OTP. Please try again.' },
      { status: 500 }
    );
  }
}

