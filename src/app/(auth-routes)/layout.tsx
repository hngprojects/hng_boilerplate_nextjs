import Footer from "../../components/layouts/footer/index.tsx";
import Navbar from "../../components/layouts/navbar/index.tsx";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto mb-[133px] mt-[85px] flex justify-center px-6">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
