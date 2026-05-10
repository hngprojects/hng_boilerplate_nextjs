import Link from 'next/link'

const TrustTransparency = () => {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: 'var(--vw-secondary)' }}
    >
      <div
        className="mx-auto flex flex-col items-center justify-center gap-[9px] px-5 py-10 text-center md:gap-10 md:px-20 md:py-10"
        style={{ minHeight: 'clamp(415px, 50vh, 502px)' }}
      >
        <div className="mb-2 md:mb-0">
          <span
            className="inline-block rounded-2xl px-6 py-3 text-[15px] font-medium shadow-sm md:text-[16px]"
            style={{
              backgroundColor: 'var(--vw-cards)',
              color: 'var(--vw-header)',
            }}
          >
            Trust & Transparency
          </span>
        </div>

        <h2
          className="max-w-[350px] text-[36px] font-extrabold leading-tight tracking-tight md:max-w-[860px] md:text-[56px] lg:text-[64px]"
          style={{ color: 'var(--vw-header)' }}
        >
          Your Website could be compromised right now
        </h2>

        <p
          className="text-[16px] font-normal md:text-[18px]"
          style={{ color: 'var(--vw-body)' }}
        >
          Find out in under 60 seconds
        </p>

        <div className="mt-4 md:mt-0">
          <Link
            href="/register"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-2xl px-10 py-5 text-[17px] font-semibold transition-colors duration-200 md:text-[18px]"
            style={{
              backgroundColor: 'var(--vw-primary)',
              color: 'var(--vw-cards)',
            }}
          >
            Start Free Scan
            <span className="text-[20px] leading-none">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TrustTransparency
