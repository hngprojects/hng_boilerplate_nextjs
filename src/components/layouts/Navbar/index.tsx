import Menu from "../../../../public/menu.svg"
import Logo from "../../../../public/logo.svg"
import Boilerplate from "../../../../public/Boilerplate.svg"
import Search from "../../../../public/search.svg"
import Notification from "../../../../public/notification-icon.svg"
import Help from "../../../../public/help.svg"
import ArrowDown from "../../../../public/arrow-down.svg"
import userImg from "../../../../public/user-img.png"
import Navigation from "../components/Navigation"


const Navbar = () => {

  return (
    <div className="absolute w-full top-0 z-[1000] bg-white py-[16px] px-[40px] flex justify-between items-center">
      <div className="flex gap-[50px]">
        <div className="flex items-center gap-[20px]">
          <Menu />
          <div className="flex gap-[20px] items-center">
            <Logo />
            <Boilerplate className="mt-[4px]"/>
          </div>
        </div>

        <div className="flex items-center">
          <Navigation />
        </div>
      </div>

      <div className="flex gap-[20px] items-center">
        <div className="py-[7px] x-[25px] flex gap-[10px] rounded-sm border border-solid border-gray-500 items-center px-[12px] text-sm">
          <Search />
          <input type="text" className="text-sm outline-none" placeholder="Search Option..." />
        </div>
        <Notification />
        <Help />
        <div className="flex items-center gap-[5px] cursor-pointer">
          <div className="h-[35px] w-[35px] bg-gray-400 rounded-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${userImg.src})` }}
          ></div>
          <ArrowDown />
        </div>

      </div>

    </div>
  )
};

export default Navbar;
