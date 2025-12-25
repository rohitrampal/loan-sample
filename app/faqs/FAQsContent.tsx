'use client'

import { motion } from 'framer-motion'
import { FAQAccordion } from '@/components/FAQAccordion'
import { faqsContent } from '@/constants'

export function FAQsContent() {
  const { title, description, faqs } = faqsContent

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-white">
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

          <FAQAccordion faqs={faqs} />
        </motion.div>
      </div>
    </div>
  )
}

