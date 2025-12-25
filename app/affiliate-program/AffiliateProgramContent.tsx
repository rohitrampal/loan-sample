'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { affiliateProgramContent } from '@/constants'

export function AffiliateProgramContent() {
  const { title, description, whyJoinSection, benefits, howItWorksSection, ctaButton, contactText, contactLink } = affiliateProgramContent

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

          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{whyJoinSection.title}</h2>
            <p className="text-lg text-primary-100 mb-6">
              {whyJoinSection.description}
            </p>
            <ul className="space-y-3 text-primary-100">
              {whyJoinSection.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200 mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">{howItWorksSection.title}</h2>
            <ol className="space-y-4 text-blue-800">
              {howItWorksSection.steps.map((step) => (
                <li key={step.step} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">{step.step}</span>
                  <span>{step.description}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="text-center">
            <Link
              href={ctaButton.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            >
              {ctaButton.text}
            </Link>
            <p className="mt-4 text-gray-600">
              {contactText} <Link href={contactLink} className="text-primary-600 hover:text-primary-700 font-semibold">Contact us</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

