import { Zap, FileCheck, Percent, Calculator } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const featuresContent = {
  title: 'Why Instant Money?',
  features: [
    {
      icon: Zap,
      title: 'Instant Loan Approval',
      description: 'Apply and get a loan decision within minutes. No need to wait for days. Our automated checks ensure fast approvals without lengthy paperwork.',
    },
    {
      icon: FileCheck,
      title: 'Paperless KYC',
      description: 'Upload selfie, PAN and Aadhaar, and you\'re good to go. Skip the long forms — everything is 100% digital and secure.',
    },
    {
      icon: Percent,
      title: 'Low Interest Rates',
      description: 'Enjoy fair and affordable interest rates designed to ease your repayment, not overwhelm it. Because we believe small loans shouldn\'t come with big burdens.',
    },
    {
      icon: Calculator,
      title: 'Loan Amount & EMI Calculator',
      description: 'Easily calculate how much you can borrow and what your EMI will look like — no guesswork, just real numbers that fit your monthly budget.',
    },
  ] as Feature[],
}

