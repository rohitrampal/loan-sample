'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { User, Loader2 } from 'lucide-react'

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  jobDescription: z.string().min(2, 'Job description is required'),
  jobLocation: z.string().min(2, 'Job location is required'),
  address: z.string().min(10, 'Please enter a complete address'),
  salaryPerMonth: z.string().regex(/^\d+$/, 'Please enter a valid salary amount'),
})

type ProfileFormData = z.infer<typeof profileSchema>

interface ProfileSetupProps {
  email: string
  onSuccess: (data: ProfileFormData) => void
}

export function ProfileSetup({ email, onSuccess }: ProfileSetupProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  })

  const onSubmit = async (data: ProfileFormData) => {
    onSuccess(data)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-primary-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Profile Setup
        </h2>
        <p className="text-gray-600">
          Help us know you better by filling out your details
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Verified Email: {email}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              {...register('phoneNumber')}
              type="tel"
              id="phoneNumber"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
              placeholder="9876543210"
              maxLength={10}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2">
            Job Description *
          </label>
          <input
            {...register('jobDescription')}
            type="text"
            id="jobDescription"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
            placeholder="Software Engineer"
          />
          {errors.jobDescription && (
            <p className="mt-1 text-sm text-red-600">{errors.jobDescription.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="jobLocation" className="block text-sm font-medium text-gray-700 mb-2">
            Job Location *
          </label>
          <input
            {...register('jobLocation')}
            type="text"
            id="jobLocation"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
            placeholder="Mumbai, Maharashtra"
          />
          {errors.jobLocation && (
            <p className="mt-1 text-sm text-red-600">{errors.jobLocation.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Address *
          </label>
          <textarea
            {...register('address')}
            id="address"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
            placeholder="Complete residential address"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="salaryPerMonth" className="block text-sm font-medium text-gray-700 mb-2">
            Salary Per Month (₹) *
          </label>
          <input
            {...register('salaryPerMonth')}
            type="text"
            id="salaryPerMonth"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
            placeholder="50000"
          />
          {errors.salaryPerMonth && (
            <p className="mt-1 text-sm text-red-600">{errors.salaryPerMonth.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Continue to Loan Approval'
          )}
        </button>
      </form>
    </motion.div>
  )
}

