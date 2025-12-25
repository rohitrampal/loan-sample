'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EmailVerification } from '@/components/loan/EmailVerification'
import { ProfileSetup } from '@/components/loan/ProfileSetup'
import { LoanApproval } from '@/components/loan/LoanApproval'

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [profileData, setProfileData] = useState<any>(null)

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                      step >= stepNumber
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-600">
                    {stepNumber === 1 && 'Email Verification'}
                    {stepNumber === 2 && 'Profile Setup'}
                    {stepNumber === 3 && 'Loan Approval'}
                  </p>
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step > stepNumber ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Content */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <EmailVerification
                onSuccess={(verifiedEmail) => {
                  setEmail(verifiedEmail)
                  setStep(2)
                }}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ProfileSetup
                email={email}
                onSuccess={(data) => {
                  setProfileData(data)
                  setStep(3)
                }}
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <LoanApproval profileData={profileData} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

