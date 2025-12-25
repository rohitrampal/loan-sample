import { Metadata } from 'next'
import { DigitalLendingPartnersContent } from './DigitalLendingPartnersContent'

export const metadata: Metadata = {
  title: 'Digital Lending Partners - Instant Money | Trusted Loan Providers',
  description: 'Meet our trusted digital lending partners. We work with leading financial institutions to provide you the best loan options.',
}

export default function DigitalLendingPartners() {
  return <DigitalLendingPartnersContent />
}

