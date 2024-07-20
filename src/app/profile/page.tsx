import Profile from "~/components/layouts/Profile/index";
import Sidebar from "~/components/layouts/Sidebar/index";

const page = () => {
  return (
    <div className="max-w-screen-2xl 2xl:mx-auto">
      <div className="flex">
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
};

export default page;
