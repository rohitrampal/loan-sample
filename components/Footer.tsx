import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { href: '/about-us', label: 'About Us' },
      { href: '/how-it-works', label: 'How it Works' },
      { href: '/service-area', label: 'Service Area' },
      { href: '/affiliate-program', label: 'Affiliate Program' },
    ],
    resources: [
      { href: '/rate-and-terms', label: 'Rate and Terms' },
      { href: '/repay-loan', label: 'Repay Loan' },
      { href: '/faqs', label: "FAQ's" },
      { href: '/news', label: 'News' },
    ],
    legal: [
      { href: '/digital-lending-partners', label: 'Digital Lending Partners' },
      { href: '/contact-us', label: 'Contact Us' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Instant Money</h3>
            <p className="text-sm mb-4">
              Your trusted partner for instant personal loans. Fast approval, transparent process, and flexible repayment options.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Instant Money. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

