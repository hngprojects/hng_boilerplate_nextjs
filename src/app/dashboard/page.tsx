import Navbar from "~/components/layouts/components/Navbar";
import Sidebar from "~/components/layouts/Sidebar";
import Overview from "./overview/page";

const page = () => {
  return (
    <div className="flex w-full pt-[68px]">
      <Navbar />
      <Sidebar />
      <Overview />
    </div>
  );
};

export default page;
