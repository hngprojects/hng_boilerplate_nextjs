import { Hero } from '@/features/landing/components/hero/Hero'
import HowItWorks from '~/components/homepage/HowItWorks'
import PerfectFit from '~/components/homepage/PerfectFit'
import Testimonials from '~/components/homepage/Testimonials'
import UserSection from '~/components/homepage/UserSection'
import Video from '~/components/homepage/Video'

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
