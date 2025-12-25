import { Metadata } from 'next'
import { NewsContent } from './NewsContent'

export const metadata: Metadata = {
  title: 'News - Instant Money | Latest Updates and Financial News',
  description: 'Stay updated with the latest news, updates, and insights about personal loans and financial services.',
}

export default function News() {
  return <NewsContent />
}

