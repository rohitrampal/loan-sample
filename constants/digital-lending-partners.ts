export interface LendingPartner {
  name: string
  url: string
  description: string
  features: string[]
}

export interface PartnerFeature {
  title: string
  description: string
}

export const digitalLendingPartnersContent = {
  title: 'Digital Lending Partners',
  description: 'We partner with trusted and regulated lending institutions to provide you with the best loan options',
  partners: [
    {
      name: 'MyCreditBaba',
      url: 'https://www.mycreditbaba.in/',
      description: 'Comprehensive financial solutions with flexible loan options and quick approvals.',
      features: ['Personal Loans', 'Home Loans', 'Business Loans', 'Credit Cards'],
    },
    {
      name: 'WeCredit',
      url: 'https://wecredit.co.in/',
      description: 'Fast and easy loan application process with competitive interest rates.',
      features: ['Instant Approval', 'Low Interest Rates', 'Flexible Tenure', 'Quick Disbursal'],
    },
    {
      name: 'CreditMantri',
      url: 'https://www.creditmantri.com/',
      description: 'India\'s leading credit analysis platform with free credit score and loan matching.',
      features: ['Free Credit Score', 'Loan Matching', 'Credit Analysis', 'Multiple Options'],
    },
    {
      name: 'MyMudra',
      url: 'https://www.mymudra.com/',
      description: 'Digital lending platform offering personalized loan solutions for your needs.',
      features: ['Digital Process', 'Personalized Solutions', 'Easy Application', 'Transparent Terms'],
    },
    {
      name: 'FinanceBuddha',
      url: 'https://www.financebuddha.com/',
      description: 'Compare and choose from multiple loan options with best interest rates.',
      features: ['Loan Comparison', 'Best Rates', 'Multiple Lenders', 'Expert Guidance'],
    },
  ] as LendingPartner[],
  whyPartnerSection: {
    title: 'Why We Partner With Them',
    features: [
      {
        title: 'Regulated & Secure',
        description: 'All partners are regulated by RBI and follow strict security protocols',
      },
      {
        title: 'Competitive Rates',
        description: 'Best interest rates and terms in the market',
      },
      {
        title: 'Quick Processing',
        description: 'Fast approval and disbursal processes',
      },
    ] as PartnerFeature[],
  },
  partnerWithUsSection: {
    title: 'Partner With Us',
    description: 'Are you a lending institution interested in partnering with Instant Money? We\'re always looking to expand our network of trusted partners to serve our customers better.',
    contactLink: '/contact-us',
  },
}

