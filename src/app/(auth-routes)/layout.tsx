import Navbar from "~/components/layouts/navbar";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-5/6">{children}</div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
