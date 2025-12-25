import { Percent, Clock, Shield, FileText } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Term {
  icon: LucideIcon
  title: string
  content: string
}

export const rateAndTermsContent = {
  title: 'Rate and Terms',
  description: 'Transparent pricing with no hidden charges. Understand our rates and terms before you apply.',
  terms: [
    {
      icon: Percent,
      title: 'Interest Rates',
      content: 'Interest rates vary based on the lending partner and your credit profile. Rates typically range from 10% to 24% per annum. Our partners offer competitive rates based on your eligibility and loan amount.',
    },
    {
      icon: Clock,
      title: 'Loan Tenure',
      content: 'Loan tenure options range from 12 months to 60 months, depending on the lending partner and your loan amount. You can choose a tenure that best fits your repayment capacity.',
    },
    {
      icon: Shield,
      title: 'Processing Fees',
      content: 'Processing fees vary by lender and are typically between 1% to 3% of the loan amount. Some partners may offer zero processing fees for certain loan products. All fees are clearly disclosed before you apply.',
    },
    {
      icon: FileText,
      title: 'Terms & Conditions',
      content: 'All loans are subject to the terms and conditions of the respective lending partner. We recommend reading the complete terms before accepting any loan offer. We ensure transparency in all communications.',
    },
  ] as Term[],
  importantNotesSection: {
    title: 'Important Notes',
    items: [
      'Interest rates are subject to change based on market conditions and your credit profile',
      'Final rates and terms are determined by the lending partner after reviewing your complete application',
      'All charges and fees are clearly disclosed before loan disbursement',
      'Prepayment charges may apply as per the lending partner\'s policy',
      'Late payment fees may be applicable if EMIs are not paid on time',
    ],
  },
  contactText: 'Have questions about rates and terms? Contact our support team for clarification.',
  contactLink: '/contact-us',
}

