import { Metadata } from 'next'
import { ServiceAreaContent } from './ServiceAreaContent'

export const metadata: Metadata = {
  title: 'Service Area - Instant Money | Cities We Serve',
  description: 'Find out if Instant Money services are available in your city. We serve customers across major cities in India.',
}

export default function ServiceArea() {
  return <ServiceAreaContent />
}

