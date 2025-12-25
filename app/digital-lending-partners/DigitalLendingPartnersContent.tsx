'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, Clock, CheckCircle, ExternalLink } from 'lucide-react'
import { digitalLendingPartnersContent } from '@/constants'

export function DigitalLendingPartnersContent() {
  const { title, description, partners, whyPartnerSection, partnerWithUsSection } = digitalLendingPartnersContent

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-primary-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700 mb-4 text-sm">{partner.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {partner.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-xl p-8 border border-primary-100 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{whyPartnerSection.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{whyPartnerSection.features[0].title}</h3>
                  <p className="text-sm text-gray-700">{whyPartnerSection.features[0].description}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{whyPartnerSection.features[1].title}</h3>
                  <p className="text-sm text-gray-700">{whyPartnerSection.features[1].description}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{whyPartnerSection.features[2].title}</h3>
                  <p className="text-sm text-gray-700">{whyPartnerSection.features[2].description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">{partnerWithUsSection.title}</h2>
            <p className="text-blue-800 mb-4">
              {partnerWithUsSection.description}
            </p>
            <a
              href={partnerWithUsSection.contactLink}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              Contact Us to Partner
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

