import CoreValues from '~/components/about/CoreValues'
import ExecutiveTeam from '~/components/about/ExecutiveTeam'
import Hero from '~/components/about/Hero'
import Join from '~/components/about/Join'
import Mission from '~/components/about/Mission'
import OurServices from '~/components/about/OurServices'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About HGN Boilerplate',
  description: `At Hng Boilerplate, we are dedicated to exceeding your expectations. 
  We strive to understand your unique needs and challenges, providing tailored solutions 
  that drive real results and empower your success.`
}

const AboutUs = () => {
  return (
    <div className="">
      <Hero />
      <OurServices />
      <Mission />
      <CoreValues />
      <ExecutiveTeam />
      <Join />
    </div>
  )
}

export default AboutUs
