import Footer from "../../components/layouts/footer/index.tsx";
import Navbar from "../../components/layouts/navbar/index.tsx";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-5/6">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
