import { Metadata } from 'next'
import { AffiliateProgramContent } from './AffiliateProgramContent'

export const metadata: Metadata = {
  title: 'Affiliate Program - Instant Money | Partner With Us',
  description: 'Join Instant Money affiliate program and earn commissions by referring customers. Become our partner today.',
}

export default function AffiliateProgram() {
  return <AffiliateProgramContent />
}

