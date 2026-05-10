import Image from 'next/image'

export function HeroDashboardPreview() {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-[1440px] md:mt-20">
      {/* Desktop Image */}
      <Image
        src="/images/hero-image-all.png"
        alt="VulnWatch AI Dashboard Preview"
        width={1440}
        height={760}
        className="hidden h-auto w-full object-cover object-top md:block"
        priority
      />
      
      {/* Mobile Image */}
      <Image
        src="/images/hero-image-mobile.png"
        alt="VulnWatch AI Mobile Dashboard Preview"
        width={390}
        height={340}
        className="block h-auto w-full object-cover object-top md:hidden"
        priority
      />
    </div>
  )
}
