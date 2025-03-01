import React from 'react'
import FaqPage from '~/components/faq/faqpage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HGN Boilerplate | Frequently asked questions',
  description: `Find answers to common questions about our HNG boilerplate , setup, usage, and troubleshooting.`,
}

const Faq = () => {
  return <FaqPage />
}

export default Faq
