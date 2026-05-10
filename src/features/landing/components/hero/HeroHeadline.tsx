import { HERO_HEADLINE, HERO_ARIA } from '../../constants/hero-content'

export function HeroHeadline() {
  return (
    <h1
      className="mx-auto text-center font-geist font-semibold leading-[1.167] tracking-[-0.02em]"
      style={{
        maxWidth: '1075px',
        fontSize: 'clamp(36px, 5vw, 60px)',
        color: 'rgba(43, 43, 43, 0.9)',
      }}
      aria-label={HERO_ARIA.section}
    >
      {HERO_HEADLINE}
    </h1>
  )
}
