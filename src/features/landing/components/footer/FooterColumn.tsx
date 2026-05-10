import Link from 'next/link'
import type { FooterLink } from '../../constants/footer-links'

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Column heading */}
      <h3
        className="font-geist text-[16px] font-semibold leading-[110%]"
        style={{ color: '#2B2B2B' }}
      >
        {title}
      </h3>

      {/* Links */}
      <ul className="flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="font-inter text-[16px] font-normal leading-[24px] tracking-[-0.005em] transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#737373' }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
