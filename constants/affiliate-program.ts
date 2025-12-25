import { Users, DollarSign, TrendingUp, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface AffiliateBenefit {
  icon: LucideIcon
  title: string
  description: string
}

export interface HowItWorksStep {
  step: number
  description: string
}

export const affiliateProgramContent = {
  title: 'Affiliate Program',
  description: 'Partner with us and earn commissions by referring customers to Instant Money',
  whyJoinSection: {
    title: 'Why Join Our Affiliate Program?',
    description: 'Join thousands of affiliates who are earning by promoting Instant Money. Our program offers competitive commissions, easy tracking, and dedicated support.',
    benefits: [
      'High conversion rates with quality leads',
      'Regular payouts with no minimum threshold',
      'Dedicated account manager for support',
      'Marketing materials and resources provided',
    ],
  },
  benefits: [
    {
      icon: DollarSign,
      title: 'Competitive Commissions',
      description: 'Earn attractive commissions on every successful referral. The more you refer, the more you earn.',
    },
    {
      icon: TrendingUp,
      title: 'Real-time Tracking',
      description: 'Track your referrals and earnings in real-time through our dedicated affiliate dashboard.',
    },
    {
      icon: Users,
      title: 'Easy Referral Process',
      description: 'Simple referral process with unique tracking links. Share and earn with minimal effort.',
    },
    {
      icon: Award,
      title: 'Support & Resources',
      description: 'Get marketing materials, support, and resources to help you succeed as an affiliate partner.',
    },
  ] as AffiliateBenefit[],
  howItWorksSection: {
    title: 'How It Works',
    steps: [
      {
        step: 1,
        description: 'Sign up for our affiliate program by filling out the application form',
      },
      {
        step: 2,
        description: 'Get your unique affiliate link and tracking code',
      },
      {
        step: 3,
        description: 'Share your link with your audience through your website, social media, or email',
      },
      {
        step: 4,
        description: 'Earn commissions when your referrals successfully apply for loans',
      },
      {
        step: 5,
        description: 'Track your earnings and get paid regularly',
      },
    ] as HowItWorksStep[],
  },
  ctaButton: {
    text: 'Join Affiliate Program',
    href: '/contact-us',
  },
  contactText: 'Have questions?',
  contactLink: '/contact-us',
}

