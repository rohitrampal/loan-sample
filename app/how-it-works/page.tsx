import { Metadata } from 'next'
import { HowItWorksContent } from './HowItWorksContent'

export const metadata: Metadata = {
  title: 'How It Works - Instant Money | Simple Loan Application Process',
  description: 'Learn how easy it is to get a loan with Instant Money. Our 4-step process makes loan application quick and hassle-free.',
}

export default function HowItWorks() {
  return <HowItWorksContent />
}

