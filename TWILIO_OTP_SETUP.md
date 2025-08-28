# Twilio OTP Implementation for Landing Page

## Overview
This project now uses Twilio SMS service for OTP verification instead of Firebase. The implementation includes:

- **Send OTP API**: `/api/send-twilio-otp` - Sends OTP via SMS
- **Verify OTP API**: `/api/verify-twilio-otp` - Verifies the entered OTP
- **Updated Landing Page**: `LandingPage1/HeroSection.tsx` - Now uses Twilio OTP

## Setup Instructions

### 1. Twilio Account Setup
1. Sign up for a Twilio account at [twilio.com](https://twilio.com)
2. Get your Account SID and Auth Token from the Twilio Console
3. Purchase a phone number for sending SMS (or use trial number for testing)

### 2. Environment Variables
Create a `.env.local` file in your project root with:

```env
# Twilio Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid_here
TWILIO_AUTH_TOKEN=your_twilio_auth_token_here
TWILIO_PHONE_NUMBER=your_twilio_phone_number_here

# Gmail Configuration (for sending emails)
GMAIL_USER=your_gmail_address@gmail.com
GMAIL_PASS=your_gmail_app_password_here
```

### 3. Dependencies
The project now includes:
- `twilio` - For SMS functionality
- `nodemailer` - For email functionality (already present)

## How It Works

### OTP Flow
1. User fills out the landing page form
2. Form submits immediately as "Unverified User"
3. OTP modal appears asking for phone verification
4. User clicks "Send OTP" → API calls `/api/send-twilio-otp`
5. Twilio sends SMS with 6-digit OTP
6. User enters OTP and clicks "Verify OTP"
7. API calls `/api/verify-twilio-otp` to verify
8. If successful, form resubmits as "Verified User"

### Security Features
- OTP expires after 5 minutes
- Maximum 3 failed attempts allowed
- OTP is stored in memory (for production, use Redis/database)
- Phone number validation and formatting

### API Endpoints

#### POST `/api/send-twilio-otp`
**Request Body:**
```json
{
  "phone": "+919876543210"
}
```

**Response:**
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "sid": "SM1234567890abcdef"
}
```

#### POST `/api/verify-twilio-otp`
**Request Body:**
```json
{
  "phone": "+919876543210",
  "otp": "123456"
}
```

**Response:**
```json
{
  "success": true,
  "message": "OTP verified successfully"
}
```

## Testing

### 1. Local Development
1. Set up environment variables
2. Run `npm run dev`
3. Test the landing page form
4. Check console logs for API responses

### 2. Twilio Trial Limitations
- Trial accounts can only send SMS to verified numbers
- Add your phone number to verified numbers in Twilio Console
- Limited SMS quota for trial accounts

## Production Considerations

### 1. OTP Storage
Current implementation uses in-memory storage. For production:
- Use Redis for OTP storage
- Implement proper session management
- Add rate limiting per phone number

### 2. Error Handling
- Add proper logging for production
- Implement retry mechanisms
- Add monitoring for failed SMS deliveries

### 3. Cost Optimization
- Monitor SMS usage and costs
- Consider implementing OTP expiration notifications
- Add analytics for OTP success/failure rates

## Troubleshooting

### Common Issues

1. **"SMS service not configured"**
   - Check environment variables are set correctly
   - Verify Twilio credentials

2. **"Invalid phone number format"**
   - Ensure phone number includes country code (+91 for India)
   - Check phone number validation logic

3. **"OTP has expired"**
   - OTP expires after 5 minutes
   - User needs to request new OTP

4. **"Too many failed attempts"**
   - User exceeded 3 failed attempts
   - Need to request new OTP

### Debug Steps
1. Check browser console for errors
2. Verify API endpoints are accessible
3. Check Twilio Console for SMS delivery status
4. Verify environment variables in `.env.local`

## Migration from Firebase

### What Was Removed
- Firebase authentication imports
- reCAPTCHA implementation
- Firebase config file
- Firebase-related state variables

### What Was Added
- Twilio SMS integration
- New OTP verification flow
- Simplified OTP modal (no reCAPTCHA)
- Better error handling for SMS failures

## Support
For Twilio-related issues, refer to:
- [Twilio Documentation](https://www.twilio.com/docs)
- [Twilio Console](https://console.twilio.com)
- [Twilio Support](https://support.twilio.com)





