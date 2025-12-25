'use client'

import { motion } from 'framer-motion'
import { aboutUsContent } from '@/constants'

export function AboutUsContent() {
  const { title, sections } = aboutUsContent

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{sections.mission.title}</h2>
              {sections.mission.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{sections.whatWeOffer.title}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {sections.whatWeOffer.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{sections.whyChooseUs.title}</h2>
              {sections.whyChooseUs.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{sections.commitment.title}</h2>
              {sections.commitment.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

