'use client'

import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '../../constants/nav-links'
import { ROUTES } from '@/constants/routes'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop — fades in/out */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      />

      {/* Drawer — slides down from top */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
        className="fixed inset-x-0 top-0 z-50 flex flex-col bg-white px-5 pb-8 pt-5 shadow-xl transition-transform duration-300 ease-in-out"
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        {/* Close button */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex items-center justify-center rounded-lg p-2 text-primary transition-colors hover:bg-gray-50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="mt-6">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="font-geist text-lg font-normal text-primary transition-opacity hover:opacity-70"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-100" />

        {/* CTA buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={ROUTES.LOGIN}
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-xl border border-primary bg-white text-base font-medium text-body transition-opacity hover:opacity-80"
          >
            Log in
          </Link>
          <Link
            href={ROUTES.REGISTER}
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-primary text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Start Free Trial
            <ArrowRight className="h-[11px] w-[14px] shrink-0 stroke-white" strokeWidth={1.4} />
          </Link>
        </div>
      </div>
    </>
  )
}

