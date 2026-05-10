import { FooterBrand } from './FooterBrand'
import { FooterLinks } from './FooterLinks'
import { FooterBottomBar } from './FooterBottomBar'

export function Footer() {
  return (
    <footer aria-label="Site footer" className="w-full bg-[#F0F0F0]">
      {/* Divider */}
      <div className="border-t border-[#E4E4E7]" />

      {/* Top section: Brand + Links */}
      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <FooterBrand />
          <FooterLinks />
        </div>
      </div>

      {/* Bottom status bar */}
      <FooterBottomBar />

    </footer>
  )
}
