import Footer from "../../components/layouts/footer/index.tsx";
import Navbar from "../../components/layouts/navbar/index.tsx";

function Layout({children}) {
  return (
  <>
      <Navbar />
<div className="w-5/6 mx-auto">
{children}

      </div>
      <Footer />

  </>
  )
}

export default Layout
