import { Metadata } from 'next'
import { AboutUsContent } from './AboutUsContent'

export const metadata: Metadata = {
  title: 'About Us - Instant Money | Your Trusted Loan Partner',
  description: 'Learn about Instant Money, your trusted partner for instant personal loans. We provide fast, transparent, and accessible financial solutions.',
}

export default function AboutUs() {
  return <AboutUsContent />
}

