import Navbar from "~/components/layouts/navbar";

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container pb-10">{children}</div>
    </>
  );
}
