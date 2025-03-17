import { Suspense } from 'react'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Suspense>{children}</Suspense>
}
