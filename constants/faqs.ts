export interface FAQ {
  question: string
  answer: string
}

export const faqsContent = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about our loan services',
  faqs: [
    {
      question: 'What is Instant Money?',
      answer: 'Instant Money is a loan aggregator platform that connects borrowers with trusted lending partners. We help you find the best loan options based on your profile and requirements.',
    },
    {
      question: 'How do I apply for a loan?',
      answer: 'Applying for a loan is simple. Click on "Apply Now", verify your email with OTP, fill in your profile details, and you\'ll be matched with suitable lending partners. You can then visit their website to complete the application.',
    },
    {
      question: 'What documents do I need?',
      answer: 'You\'ll need basic documents like PAN card, Aadhaar card, bank statements, and salary slips. The exact documents required may vary by lender.',
    },
    {
      question: 'How long does the approval process take?',
      answer: 'The initial matching process is instant. Once you apply with a lending partner, approval typically takes a few minutes to a few hours, depending on the lender.',
    },
    {
      question: 'What is the interest rate?',
      answer: 'Interest rates vary by lender and your credit profile. Rates typically range from 10% to 24% per annum. You\'ll see the exact rates when you visit the lender\'s website.',
    },
    {
      question: 'What is the minimum and maximum loan amount?',
      answer: 'Loan amounts vary by lender. Typically, personal loans range from ₹10,000 to ₹40,00,000, depending on your eligibility and the lender\'s policies.',
    },
    {
      question: 'What is the loan tenure?',
      answer: 'Loan tenure options typically range from 12 months to 60 months. You can choose a tenure that fits your repayment capacity.',
    },
    {
      question: 'Is there a processing fee?',
      answer: 'Processing fees vary by lender and are typically between 1% to 3% of the loan amount. Some lenders may offer zero processing fees. All fees are clearly disclosed.',
    },
    {
      question: 'How do I repay my loan?',
      answer: 'You can repay your loan through various methods including online payment, mobile app, bank transfer, or auto-debit. Check with your lender for available options.',
    },
    {
      question: 'Can I prepay my loan?',
      answer: 'Yes, most lenders allow prepayment. However, prepayment charges may apply as per the lender\'s policy. Check your loan agreement for details.',
    },
    {
      question: 'What happens if I miss an EMI?',
      answer: 'Missing an EMI may result in late payment charges and could negatively impact your credit score. Contact your lender immediately if you\'re unable to make a payment.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take data security seriously. All your information is encrypted and handled with strict confidentiality. We never share your data without your consent.',
    },
  ] as FAQ[],
}

