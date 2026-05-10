import { HeroContent } from './HeroContent'
import { HeroDashboardPreview } from './HeroDashboardPreview'
import { HeroBackgroundGlow } from './HeroBackgroundGlow'
import { HERO_ARIA } from '../../constants/hero-content'

export function Hero() {
  return (
    <section
      aria-label={HERO_ARIA.section}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Desktop Gradient Background */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          background: 'linear-gradient(180.52deg, #FFFFFF 54.04%, #A0E870 106.46%)',
        }}
        aria-hidden="true"
      />

      {/* Background glow — positioned behind content */}
      <HeroBackgroundGlow />

      {/* Mobile wavy green gradient wave background — shown only on mobile */}
      <div className="absolute bottom-0 left-0 right-0 z-0 block md:hidden" aria-hidden="true">
        <svg
          width="390"
          height="243"
          viewBox="0 0 390 243"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M-8.85791 43.0656C-26.5933 47.9925 -43.2788 95.732 -43.2788 95.732L-47 273.321L488.106 266.577V43.0656C488.106 43.0656 470.928 12.5557 456.662 3.56581C420.108 -19.4681 404.496 88.089 366.237 75.8215C338.467 66.9172 335.28 9.66568 307.256 3.56581C272.908 -3.9108 263.034 87.7581 229.112 75.8215C204.034 66.9975 203.904 -4.00955 178.69 3.56581C154.285 10.8979 168.111 83.0465 144.455 95.732C117.203 110.346 110.045 28.3496 81.5668 31.5047C60.4785 33.8411 55.0672 75.7103 33.9357 75.8215C15.6541 75.9178 9.19141 38.0516 -8.85791 43.0656Z"
            fill="url(#paint0_linear_4803_20143)"
            stroke="#E9EFFD"
            strokeWidth="0.640845"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4803_20143"
              x1="-135.5"
              y1="-27.6794"
              x2="220.553"
              y2="273.321"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A0E870" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content: headline + description + CTA */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-16 pt-20 md:px-8 md:pt-24 lg:pt-28">
        <HeroContent />
      </div>

      {/* Dashboard preview (Handles both desktop and mobile internally) */}
      <div className="relative z-10 pb-0">
        <HeroDashboardPreview />
      </div>
    </section>
  )
}
