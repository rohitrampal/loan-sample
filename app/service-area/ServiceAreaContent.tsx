'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { serviceAreaContent } from '@/constants'

export function ServiceAreaContent() {
  const { title, description, cities, notListedSection } = serviceAreaContent

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 md:p-12 border border-primary-100 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Cities We Serve</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all text-center"
                >
                  <span className="text-gray-900 font-medium">{city}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">{notListedSection.title}</h2>
            <p className="text-blue-800 mb-4">
              {notListedSection.paragraphs[0]}
            </p>
            <p className="text-blue-800">
              For more information about service availability in your area, please{' '}
              <Link href={notListedSection.contactLink} className="text-primary-600 hover:text-primary-700 font-semibold underline">
                contact us
              </Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

