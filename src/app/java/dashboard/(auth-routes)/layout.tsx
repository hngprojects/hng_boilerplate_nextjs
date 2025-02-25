import Navbar from '~/components/navigation/navbar/index'
import Footer from '~/components/navigation/footer'
import { Suspense } from 'react'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-5/6">
        <Suspense>{children}</Suspense>
      </div>
      <Footer />
    </>
  )
}
