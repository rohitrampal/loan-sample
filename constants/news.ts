export interface NewsItem {
  title: string
  date: string
  excerpt: string
  category: string
}

export const newsContent = {
  title: 'News & Updates',
  description: 'Stay informed with the latest news and insights about personal loans and financial services',
  newsItems: [
    {
      title: 'Digital Lending Sees 40% Growth in 2024',
      date: '2024-01-15',
      excerpt: 'The digital lending sector has witnessed significant growth, with more borrowers opting for online loan applications.',
      category: 'Industry News',
    },
    {
      title: 'New RBI Guidelines for Personal Loans',
      date: '2024-01-10',
      excerpt: 'The Reserve Bank of India has introduced new guidelines to make personal loans more accessible and transparent.',
      category: 'Regulatory',
    },
    {
      title: 'Tips for Improving Your Credit Score',
      date: '2024-01-05',
      excerpt: 'Learn how to improve your credit score to get better loan offers and interest rates.',
      category: 'Tips & Advice',
    },
    {
      title: 'Understanding Loan EMI Calculations',
      date: '2023-12-28',
      excerpt: 'A comprehensive guide to understanding how loan EMIs are calculated and how to choose the right tenure.',
      category: 'Education',
    },
    {
      title: 'Benefits of Pre-approved Loans',
      date: '2023-12-20',
      excerpt: 'Discover the advantages of pre-approved loans and how they can help you get funds faster.',
      category: 'Product Info',
    },
    {
      title: 'How to Choose the Right Loan Tenure',
      date: '2023-12-15',
      excerpt: 'Expert advice on selecting the loan tenure that best fits your financial situation and goals.',
      category: 'Tips & Advice',
    },
  ] as NewsItem[],
}

