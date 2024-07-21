import Navbar from "~/components/layouts/components/Navbar";
import Sidebar from "~/components/layouts/Sidebar";

function Customers() {
  return (
    <>
      <div className="flex w-full pt-[68px]">
        <Navbar />
        <Sidebar />
        <div className="flex min-h-screen w-[inherit] p-[42px]">Customers</div>
      </div>
    </>
  );
}
export default Customers;
