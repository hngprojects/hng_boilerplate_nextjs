import Navbar from '~/components/navigation/navbar/index'
import GotoTop from '~/components/miscellaneous/goto-top'
import Footer from '~/components/navigation/footer'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <GotoTop />
    </div>
  )
}
