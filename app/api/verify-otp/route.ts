import { NextRequest, NextResponse } from 'next/server'
import { verifyOTP } from '@/lib/otp-store'

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      )
    }

    if (!otp || typeof otp !== 'string') {
      return NextResponse.json(
        { success: false, message: 'OTP is required' },
        { status: 400 }
      )
    }

    // Verify OTP
    const isValid = verifyOTP(email, otp)

    if (isValid) {
      return NextResponse.json({
        success: true,
        message: 'OTP verified successfully',
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid or expired OTP',
        },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error in verify-otp route:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

