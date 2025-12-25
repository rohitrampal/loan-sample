export interface Testimonial {
  name: string
  location: string
  text: string
}

export const testimonialsContent = {
  title: 'Trusted by Thousands',
  description: 'See what our customers have to say about their experience',
  testimonials: [
    {
      name: 'Sameer Khan',
      location: 'Lucknow',
      text: 'I work in a private hospital and earn ₹28,000 monthly. When my daughter got admission in a new city, I had to arrange two months\' rent quickly. Instead of wasting time at banks, I applied through Instant Money. Within minutes, ₹12,000 was credited. No paperwork, no stress – just instant help when I needed it most',
    },
    {
      name: 'Neha Gupta',
      location: 'Delhi',
      text: 'Five months back, I cleared my first Instant Money loan. Since then, I regularly get pre-approved offers. This month, when I needed ₹9,000 urgently for a family medical bill, the app disbursed the loan in minutes. Safe, reliable, and trustworthy, I now consider Instant Money my financial backup.',
    },
    {
      name: 'Amit Verma',
      location: 'New Delhi',
      text: 'Instant Money has become my go-to app. First time they asked for documents like PAN, Aadhaar, bank statement and selfie. But the second time, they only needed an updated statement. So much faster than banks that ask for everything again!',
    },
    {
      name: 'Pooja Rani',
      location: 'Jaipur',
      text: 'I was amazed by how quick the loan approval was. No endless follow-ups or bank visits. The support team was polite and guided me step by step.',
    },
  ] as Testimonial[],
}

