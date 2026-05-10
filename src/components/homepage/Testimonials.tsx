import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className="space-y-12 py-10">
      <div className="mx-auto max-w-xl space-y-4 px-5 text-center">
        <span className="inline-block rounded-lg border border-border bg-neutral-100 px-4 py-1.5 text-sm font-medium">
          Testimonials
        </span>
        <h1 className="text-4xl font-semibold">
          Trusted by over 12,000+ teams worldwide
        </h1>
        <p className="text-muted-foreground">
          Loved by website security teams. Doubt us? Here’s what our amazing
          users say.
        </p>
      </div>
      <Image
        src="/images/landing-page/testimonials-image.jpg"
        alt=""
        width={1000}
        height={1000}
        className="pointer-events-none w-full"
      />
    </div>
  )
}

export default Testimonials
