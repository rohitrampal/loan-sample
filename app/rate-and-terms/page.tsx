import { Metadata } from 'next'
import { RateAndTermsContent } from './RateAndTermsContent'

export const metadata: Metadata = {
  title: 'Rate and Terms - Instant Money | Transparent Loan Terms',
  description: 'Understand our loan rates and terms. Transparent pricing with no hidden charges. Competitive interest rates from trusted lending partners.',
}

export default function RateAndTerms() {
  return <RateAndTermsContent />
}

