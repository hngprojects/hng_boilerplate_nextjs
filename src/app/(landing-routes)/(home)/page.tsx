import Hero from '~/components/homepage/Hero'
import HowItWorks from '~/components/homepage/HowItWorks'
import PerfectFit from '~/components/homepage/PerfectFit'
import Testimonials from '~/components/homepage/Testimonials'
import UserSection from '~/components/homepage/UserSection'
import Video from '~/components/homepage/Video'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HGN Boilerplate',
  description: `HGN Boilerplate presents a boilerplate solution designed 
  to enhance productivity and streamline processes for users. It is a pre-written setup or 
  template that provides a starting point for a project. It includes common configurations, 
  dependencies, and basic code structures to save time and ensure consistency.`,
}
export default function Home() {
  return (
    <>
      <Hero />
      <UserSection />
      <Video />
      <HowItWorks />
      <Testimonials />
      <PerfectFit />
    </>
  )
}
