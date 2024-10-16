import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '~/utils'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HNG Boilerplate',
  description: 'HNG Boilerplate',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={cn(inter.className, 'max-w-[1920px] antialiased')}>
          {children}
        </body>
      </Providers>
    </html>
  )
}
