import { UserPlus, User, ShieldCheck, CheckCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Step {
  icon: LucideIcon
  title: string
  description: string
  details?: string[]
}

export const howItWorksContent = {
  pageTitle: 'How It Works',
  pageDescription: 'Getting a loan with Instant Money is simple and straightforward. Follow these 4 easy steps to get started.',
  steps: [
    {
      icon: UserPlus,
      title: 'Account Creation',
      description: 'Sign up with your mobile number to get started with Instant Money. The process is quick and requires minimal information.',
      details: [
        'Enter your mobile number',
        'Verify with OTP sent to your email',
        'Create your account in minutes',
      ],
    },
    {
      icon: User,
      title: 'Profile Setup',
      description: 'Help us know you better by filling out basic personal and professional details. This helps us match you with the best loan options.',
      details: [
        'Enter your personal information',
        'Provide job details and location',
        'Share your monthly salary',
        'Complete address verification',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'KYC Verification',
      description: 'Verify your identity securely to unlock instant loan offers and faster approvals. Our digital KYC process is quick and secure.',
      details: [
        'Upload selfie for verification',
        'Submit PAN card details',
        'Provide Aadhaar information',
        'All documents are encrypted and secure',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Loan Approval',
      description: 'Discover your loan eligibility and explore personalized options from our trusted lending partners.',
      details: [
        'View matched loan offers',
        'Compare interest rates and terms',
        'Choose your preferred lender',
        'Complete application on partner site',
      ],
    },
  ] as Step[],
  ctaButton: {
    text: 'Get Started Now',
    href: '/apply',
  },
}

// Simplified steps for home page component
export const homeHowItWorksSteps = [
  {
    icon: UserPlus,
    title: 'Account Creation',
    description: 'Sign up with your mobile number to get started with Instant Money',
  },
  {
    icon: User,
    title: 'Profile Setup',
    description: 'Help us know you better by filling out basic personal and professional details.',
  },
  {
    icon: ShieldCheck,
    title: 'KYC Verification',
    description: 'Verify your identity securely to unlock instant loan offers and faster approvals.',
  },
  {
    icon: CheckCircle,
    title: 'Loan Approval',
    description: 'Discover your loan eligibility and explore personalized options.',
  },
] as Step[]

