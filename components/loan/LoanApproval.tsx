'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ExternalLink, TrendingUp, Shield, Clock, DollarSign } from 'lucide-react'

const lendingPartners = [
  {
    name: 'MyCreditBaba',
    url: 'https://www.mycreditbaba.in/',
    description: 'Comprehensive financial solutions with flexible loan options and quick approvals.',
    icon: TrendingUp,
    features: ['Personal Loans', 'Home Loans', 'Business Loans', 'Credit Cards'],
  },
  {
    name: 'WeCredit',
    url: 'https://wecredit.co.in/',
    description: 'Fast and easy loan application process with competitive interest rates.',
    icon: Clock,
    features: ['Instant Approval', 'Low Interest Rates', 'Flexible Tenure', 'Quick Disbursal'],
  },
  {
    name: 'CreditMantri',
    url: 'https://www.creditmantri.com/',
    description: 'India\'s leading credit analysis platform with free credit score and loan matching.',
    icon: Shield,
    features: ['Free Credit Score', 'Loan Matching', 'Credit Analysis', 'Multiple Options'],
  },
  {
    name: 'MyMudra',
    url: 'https://www.mymudra.com/',
    description: 'Digital lending platform offering personalized loan solutions for your needs.',
    icon: DollarSign,
    features: ['Digital Process', 'Personalized Solutions', 'Easy Application', 'Transparent Terms'],
  },
  {
    name: 'FinanceBuddha',
    url: 'https://www.financebuddha.com/',
    description: 'Compare and choose from multiple loan options with best interest rates.',
    icon: TrendingUp,
    features: ['Loan Comparison', 'Best Rates', 'Multiple Lenders', 'Expert Guidance'],
  },
]

interface LoanApprovalProps {
  profileData: any
}

export function LoanApproval({ profileData }: LoanApprovalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-10 h-10 text-green-600" />
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Profile Submitted Successfully!
        </h2>
        <p className="text-gray-600">
          Based on your profile, here are the best lending partners for you
        </p>
      </div>

      {profileData && (
        <div className="mb-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
          <h3 className="font-semibold text-gray-900 mb-3">Your Profile Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-600">Name:</span>
              <span className="ml-2 font-medium text-gray-900">{profileData.name}</span>
            </div>
            <div>
              <span className="text-gray-600">Salary:</span>
              <span className="ml-2 font-medium text-gray-900">₹{parseInt(profileData.salaryPerMonth).toLocaleString()}/month</span>
            </div>
            <div>
              <span className="text-gray-600">Location:</span>
              <span className="ml-2 font-medium text-gray-900">{profileData.jobLocation}</span>
            </div>
            <div>
              <span className="text-gray-600">Profession:</span>
              <span className="ml-2 font-medium text-gray-900">{profileData.jobDescription}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Recommended Lending Partners
        </h3>
        <p className="text-gray-600 text-sm">
          Click on any partner below to visit their website and complete your loan application
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lendingPartners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-300 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <partner.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{partner.name}</h4>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4">{partner.description}</p>

            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Key Features:</p>
              <div className="flex flex-wrap gap-2">
                {partner.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors group-hover:shadow-md"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">Next Steps</h4>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Click on any lending partner above to visit their website</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Follow their application process to complete your loan request</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Each partner has different eligibility criteria and interest rates</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Compare offers and choose the one that best fits your needs</span>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

