import { create } from 'zustand'
import { FAQData } from '~/types'

type ExternalData = {
  faqs: FAQData | null
  setFAQs: (data: FAQData) => void
}

const useExternalStore = create<ExternalData>((set) => ({
  faqs: null,
  setFAQs: (data) => set({ faqs: data }),
}))

export default useExternalStore
