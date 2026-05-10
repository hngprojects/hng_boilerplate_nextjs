import { HeroHeadline } from './HeroHeadline'
import { HeroDescription } from './HeroDescription'
import { HeroScanForm } from './HeroScanForm'

export function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <HeroHeadline />
      <HeroDescription />
      <HeroScanForm />
    </div>
  )
}
