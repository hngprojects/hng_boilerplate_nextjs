import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

export function HeaderActions() {
  return (
    <div className="flex items-center gap-3">
      {/* Log in — secondary/outline style */}
      <Link
        href={ROUTES.LOGIN}
        className="flex h-12 items-center justify-center gap-1.5 rounded-xl border border-primary bg-white px-6 py-3 text-base font-medium leading-6 text-body transition-opacity duration-200 hover:opacity-80"
      >
        Log in
      </Link>

      {/* Start Free Trial — primary/filled style */}
      <Link
        href={ROUTES.REGISTER}
        className="flex h-12 items-center justify-center gap-1.5 rounded-xl border border-secondary bg-primary py-3 pl-6 pr-4 text-base font-medium leading-6 text-white transition-opacity duration-200 hover:opacity-90"
      >
        Start Free Trial
        <ArrowRight className="h-[11px] w-[14px] shrink-0 stroke-white" strokeWidth={1.4} />
      </Link>
    </div>
  )
}
