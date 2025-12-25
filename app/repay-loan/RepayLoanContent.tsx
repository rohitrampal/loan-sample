'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { repayLoanContent } from '@/constants'

export function RepayLoanContent() {
  const { title, description, repaymentMethods, importantInfoSection, needHelpSection } = repayLoanContent

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            {title}
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {repaymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h2>
                <p className="text-gray-700">{method.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-xl p-8 border border-primary-100 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{importantInfoSection.title}</h2>
            <ul className="space-y-3 text-gray-700">
              {importantInfoSection.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">{needHelpSection.title}</h2>
            <p className="text-blue-800 mb-4">
              {needHelpSection.description}
            </p>
            <Link
              href={needHelpSection.contactLink}
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Contact Us →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

