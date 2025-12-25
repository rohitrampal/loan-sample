import { NextRequest, NextResponse } from 'next/server'
import { sendOTPEmail } from '@/lib/email'
import { generateOTP, storeOTP } from '@/lib/otp-store'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Generate OTP
    const otp = generateOTP()

    // Store OTP
    storeOTP(email, otp)

    // Send email
    try {
      await sendOTPEmail(email, otp)
      return NextResponse.json({
        success: true,
        message: 'OTP sent successfully',
      })
    } catch (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send OTP. Please check your SMTP configuration.',
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error in send-otp route:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

