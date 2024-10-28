'use client'

import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import useExternalStore from '~/hooks/external/use-external'
import { getFaqs } from '~/actions/external/faq'
import { FAQData } from '~/types'
import useEnvironmentStore from '~/hooks/global/use-enviroment'
import { Skeleton } from '../ui/skeleton'
import Heading from '../miscellaneous/heading'
import FaqAccordion from './accordin'

interface QueryRes {
  data?: FAQData
  success: boolean
  message?: string
  status_code?: number
}

const FaqPage = () => {
  const { setFAQs, faqs } = useExternalStore()
  const { backend } = useEnvironmentStore()

  const { data, error, isLoading } = useQuery<QueryRes, Error>({
    queryKey: ['faqs', backend],
    queryFn: () => getFaqs(backend),
  })

  useEffect(() => {
    if (data && data.success && data.data) {
      setFAQs(data.data)
    }
  }, [data, setFAQs])

  if (isLoading) {
    return (
      <main className="mx-auto max-w-7xl bg-white px-5 py-10 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
        <Heading
          tag="FAQS"
          title="Frequently {{asked}} questions"
          content="Questions you might ask about our product"
        />
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className="mb-3 w-full rounded-xl border border-border px-2 py-2"
            key={index}
          >
            <Skeleton
              className="h-[40px] w-full rounded-md"
              data-testid="skeleton"
            />
          </div>
        ))}
      </main>
    )
  }

  if (error) {
    return <div>an error {error.message} occured </div>
  }

  return (
    <main className="mx-auto max-w-7xl bg-white px-5 py-10 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
      <Heading
        tag="FAQS"
        title="Frequently {{asked}} questions"
        content="Questions you might ask about our product"
      />
      <div className="mx-auto mb-40 mt-4 max-w-xl">
        {faqs ? (
          <>
            {Object.entries(faqs).map(
              ([category, questions], categoryIndex) => (
                <div key={categoryIndex} className="mb-6">
                  <h2 className="mb-2 text-xl font-semibold">{category}</h2>
                  <FaqAccordion
                    faqs={questions}
                    containerClassName="sm:w-full px-4 py-1 bg-white"
                    data-testid="faq-accordion"
                  />
                </div>
              )
            )}
          </>
        ) : (
          <p className="py-20 text-center">No results found.</p>
        )}
      </div>
    </main>
  )
}

export default FaqPage
