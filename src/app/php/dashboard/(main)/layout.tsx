import { Suspense } from 'react'
import Navbar from '~/components/dashboard/navbar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="">
      <Navbar />
      <div className="px-4 py-8">
        <Suspense>{children}</Suspense>
      </div>
    </main>
  )
}
