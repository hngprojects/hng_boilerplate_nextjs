import Hero from '~/components/homepage/Hero'
import HowItWorks from '~/components/homepage/HowItWorks'
import PricingSection from '~/components/homepage/PricingSection'
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
      <PricingSection />
    </>
  )
}
