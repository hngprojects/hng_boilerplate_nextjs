import Navbar from "~/components/layouts/Navbar";
import Sidebar from "~/components/layouts/Sidebar";
import Overview from "../../../components/overview/overview";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center">
        <Sidebar />
        <Overview />
      </div>
    </div>
  );
};

export default page;
