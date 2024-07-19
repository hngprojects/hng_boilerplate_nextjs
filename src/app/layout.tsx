import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          Navbar
          {children}
          Footer
        </main>
      </body>
    </html>
  );
}
