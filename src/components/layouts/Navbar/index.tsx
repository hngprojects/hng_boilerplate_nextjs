import Image from "next/image";
import Icon from '../../images/icon.svg';
import Logo from '../../images/Logo.svg';
import Notification from '../../images/notification.svg';
import Help from '../../images/help.svg';
import Avater from '../../images/avatar.svg';
import Dropdown from '../../images/dropdown.svg';
import Search from '../../images/magnifying-glass.svg';

const Navbar = () => {
  return (
    <header className="flex py-[16px] px-[40px] items-center justify-between gap-auto">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-[15px]">
          <Image
            src={Icon}
            alt="Menu Button"
            width={24}
            height={24}
          />
          <Image
            src={Logo}
            alt="Logo"
            width={18}
            height={18}
          />
          <p className="flex items-center max-w-33 font-[600] text-[24px] color-greyscale-900">Boilerplate.</p>
        </div>
        <div className="flex items-center gap-[22px] max-w-71 list-none pt-[8px] pl-[8px]">
          <li className="font-[500] text-[12px]">Overview</li>
          <li className="font-[500] text-[12px]">Customers</li>
          <li className="font-[500] text-[12px]">Products</li>
          <li className="text-[#F97316] font-[500] text-[12px]">Settings</li>
        </div>
      </nav>
      <nav className="flex items-center gap-[20px]">
        <div className="relative">
          <Image
            src={Search}
            alt="Search Icon"
            width={16}
            height={16}
            className="absolute left-[12px] top-[10px]"
          />
          <input
            placeholder="Search Option"
            className="max-w-[266px] border rounded-[6px] py-2 pl-[36px] pr-3 outline-none text-[14px] font-[400] text-[#525252]"
          />
        </div>

        <Image
          src={Notification}
          alt="Notification"
          width={24}
          height={24}
        />
        <Image
          src={Help}
          alt="Help"
          width={24}
          height={24}
        />
        <Image
          src={Avater}
          alt="Avater"
          width={40}
          height={40}
        />
        <Image
          src={Dropdown}
          alt="Drop down"
          width={20}
          height={20}
        />
      </nav>
    </header>
  );
};

export default Navbar;
