'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils'
import { NAV_LINKS } from '../../constants/nav-links'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-10">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = pathname === href
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'font-geist text-base font-normal leading-6 text-primary transition-opacity duration-200 hover:opacity-70',
                  isActive && 'font-medium'
                )}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
