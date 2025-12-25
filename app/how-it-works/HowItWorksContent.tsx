'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { howItWorksContent } from '@/constants'

export function HowItWorksContent() {
  const { pageTitle, pageDescription, steps, ctaButton } = howItWorksContent
  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {pageTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {pageDescription}
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-primary-600">Step {index + 1}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h2>
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-4">{step.description}</p>
                {step.details && step.details.length > 0 && (
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <ArrowRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="text-6xl font-bold text-primary-100">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href={ctaButton.href}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            {ctaButton.text}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

