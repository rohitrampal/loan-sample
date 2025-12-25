// In-memory OTP store (in production, use Redis or a database)
interface OTPEntry {
  otp: string
  email: string
  expiresAt: number
}

const otpStore = new Map<string, OTPEntry>()

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export function storeOTP(email: string, otp: string): void {
  const expiresAt = Date.now() + 10 * 60 * 1000 // 10 minutes
  otpStore.set(email.toLowerCase(), {
    otp,
    email: email.toLowerCase(),
    expiresAt,
  })

  // Clean up expired OTPs
  setTimeout(() => {
    otpStore.delete(email.toLowerCase())
  }, 10 * 60 * 1000)
}

export function verifyOTP(email: string, otp: string): boolean {
  const entry = otpStore.get(email.toLowerCase())
  if (!entry) {
    return false
  }

  if (Date.now() > entry.expiresAt) {
    otpStore.delete(email.toLowerCase())
    return false
  }

  if (entry.otp !== otp) {
    return false
  }

  // OTP verified, remove it
  otpStore.delete(email.toLowerCase())
  return true
}

