import { FOOTER_BOTTOM_BAR } from '../../constants/footer-meta'

export function FooterBottomBar() {
  return (
    <div className="mx-auto max-w-[1280px] px-5 pb-10 md:px-6 lg:px-8">
      <div
        className="flex w-full flex-col items-center justify-center gap-4 rounded-xl px-6 py-[18px] text-center md:flex-row md:justify-between md:text-left"
        style={{
          backgroundColor: '#072E28',
          border: '1px solid #072E28',
          minHeight: '68px',
        }}
      >
        {/* Copyright */}
        <span
          className="font-inter text-[14px] font-normal leading-[20px] tracking-[-0.005em] text-white"
        >
          {FOOTER_BOTTOM_BAR.copyright}
        </span>

        {/* Badges */}
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
          {FOOTER_BOTTOM_BAR.badges.map((badge) => (
            <li
              key={badge}
              className="font-inter text-[14px] font-normal leading-[20px] tracking-[-0.005em] text-white opacity-80"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
