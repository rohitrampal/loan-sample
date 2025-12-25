import { Metadata } from 'next'
import { FAQsContent } from './FAQsContent'

export const metadata: Metadata = {
  title: 'FAQs - Instant Money | Frequently Asked Questions',
  description: 'Find answers to commonly asked questions about Instant Money loans, application process, eligibility, and more.',
}

export default function FAQs() {
  return <FAQsContent />
}

