import CoreValues from '~/components/about/CoreValues'
import ExecutiveTeam from '~/components/about/ExecutiveTeam'
import Hero from '~/components/about/Hero'
import Join from '~/components/about/Join'
import Mission from '~/components/about/Mission'
import OurServices from '~/components/about/OurServices'

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
