import Footer from "~/components/layouts/footer";
import Navbar from "~/components/layouts/navbar";
import GotoTop from "~/components/miscellaneous/goto-top";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <GotoTop />
    </div>
  );
}
