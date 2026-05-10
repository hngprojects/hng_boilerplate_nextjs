export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <div className="flex-1">{children}</div>
    </div>
  )
}
