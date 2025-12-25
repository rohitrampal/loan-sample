import { CreditCard, Calendar, Smartphone, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface RepaymentMethod {
  icon: LucideIcon
  title: string
  description: string
}

export const repayLoanContent = {
  title: 'Repay Your Loan',
  description: 'Multiple convenient ways to repay your loan. Choose the method that works best for you.',
  repaymentMethods: [
    {
      icon: CreditCard,
      title: 'Online Payment',
      description: 'Pay your EMIs online using credit card, debit card, or net banking through the lender\'s portal.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Use the lender\'s mobile app to make quick payments anytime, anywhere. Set up auto-debit for hassle-free repayments.',
    },
    {
      icon: Building2,
      title: 'Bank Transfer',
      description: 'Transfer funds directly from your bank account to the lender\'s account using NEFT, RTGS, or IMPS.',
    },
    {
      icon: Calendar,
      title: 'Auto-Debit',
      description: 'Set up automatic EMI deduction from your bank account. Never miss a payment with this convenient option.',
    },
  ] as RepaymentMethod[],
  importantInfoSection: {
    title: 'Important Information',
    items: [
      'EMI due dates are fixed and mentioned in your loan agreement',
      'Ensure sufficient balance in your account before the due date',
      'Late payments may attract penalty charges and affect your credit score',
      'Contact your lender directly for repayment-related queries',
      'You can make part prepayments or full prepayments as per the lender\'s policy',
    ],
  },
  needHelpSection: {
    title: 'Need Help?',
    description: 'If you\'re facing any issues with loan repayment or have questions about your EMI, please contact your lending partner directly. You can find their contact information in your loan agreement or on their website.',
    contactLink: '/contact-us',
  },
}

