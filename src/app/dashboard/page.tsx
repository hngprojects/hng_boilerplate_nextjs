import Navbar from "~/components/layouts/Navbar";
import Sidebar from "~/components/layouts/Sidebar";
import Overview from "./overview/page";

const page = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Overview />
    </div>
  );
};

export default page;
