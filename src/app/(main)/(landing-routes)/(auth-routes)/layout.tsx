import { Suspense } from 'react'
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Suspense>{children}</Suspense>
    </>
  )
}
