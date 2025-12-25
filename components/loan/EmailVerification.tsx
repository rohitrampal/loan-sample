'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Mail, Loader2 } from 'lucide-react'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type EmailFormData = z.infer<typeof emailSchema>

interface EmailVerificationProps {
  onSuccess: (email: string) => void
}

export function EmailVerification({ onSuccess }: EmailVerificationProps) {
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const sendOTP = async (data: EmailFormData) => {
    setSending(true)
    setError('')
    try {
      const response = await axios.post('/api/send-otp', { email: data.email })
      if (response.data.success) {
        setOtpSent(true)
      } else {
        setError(response.data.message || 'Failed to send OTP')
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to send OTP. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const verifyOTP = async () => {
    if (otp.length !== 6) {
      setError('Please enter a 6-digit OTP')
      return
    }

    setVerifying(true)
    setError('')
    try {
      const email = getValues('email')
      const response = await axios.post('/api/verify-otp', {
        email,
        otp,
      })
      if (response.data.success) {
        onSuccess(email)
      } else {
        setError(response.data.message || 'Invalid OTP')
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid OTP. Please try again.')
    } finally {
      setVerifying(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-primary-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Email Verification
        </h2>
        <p className="text-gray-600">
          {otpSent
            ? 'Enter the OTP sent to your email address'
            : 'Enter your email address to receive an OTP'}
        </p>
      </div>

      {!otpSent ? (
        <form onSubmit={handleSubmit(sendOTP)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {sending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending OTP...
              </>
            ) : (
              'Send OTP'
            )}
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6)
                setOtp(value)
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-center text-2xl tracking-widest text-gray-900 placeholder:text-gray-400"
              placeholder="000000"
              maxLength={6}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={verifyOTP}
              disabled={verifying || otp.length !== 6}
              className="flex-1 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {verifying ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify OTP'
              )}
            </button>
            <button
              onClick={() => {
                setOtpSent(false)
                setOtp('')
                setError('')
              }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Change Email
            </button>
          </div>

          <button
            onClick={async () => {
              setSending(true)
              setError('')
              try {
                const email = getValues('email')
                await axios.post('/api/send-otp', { email })
              } catch (err) {
                setError('Failed to resend OTP')
              } finally {
                setSending(false)
              }
            }}
            disabled={sending}
            className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium disabled:opacity-50"
          >
            {sending ? 'Resending...' : "Didn't receive OTP? Resend"}
          </button>
        </div>
      )}
    </motion.div>
  )
}

