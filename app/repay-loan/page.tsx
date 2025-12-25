import { Metadata } from 'next'
import { RepayLoanContent } from './RepayLoanContent'

export const metadata: Metadata = {
  title: 'Repay Loan - Instant Money | Easy Loan Repayment Options',
  description: 'Learn about various loan repayment options available. Make your EMI payments easily through multiple channels.',
}

export default function RepayLoan() {
  return <RepayLoanContent />
}

