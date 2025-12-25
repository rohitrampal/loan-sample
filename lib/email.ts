import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendOTPEmail(email: string, otp: string) {
  const fromEmail = process.env.SMTP_FROM || 'noreply@instantmoney.com'
  const fromDisplayName = 'No Reply - Instant Money'
  
  const mailOptions = {
    from: `${fromDisplayName} <${fromEmail}>`,
    to: email,
    subject: 'Your OTP for Instant Money Loan Application',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">No Reply - Instant Money</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <h2 style="color: #111827; margin-top: 0;">Email Verification</h2>
            <p style="color: #4b5563;">Thank you for applying for a loan with Instant Money. Please use the following OTP to verify your email address:</p>
            <div style="background: white; border: 2px dashed #0ea5e9; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
              <p style="font-size: 32px; font-weight: bold; color: #0284c7; letter-spacing: 8px; margin: 0;">${otp}</p>
            </div>
            <p style="color: #4b5563; font-size: 14px;">This OTP will expire in 10 minutes. Please do not share this OTP with anyone.</p>
            <p style="color: #4b5563; font-size: 14px; margin-top: 20px;">If you didn't request this OTP, please ignore this email.</p>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>&copy; ${new Date().getFullYear()} Instant Money. All rights reserved.</p>
          </div>
        </body>
      </html>
    `,
  }

  return transporter.sendMail(mailOptions)
}

