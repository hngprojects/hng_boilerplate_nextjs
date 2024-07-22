import Image from "next/image";

import help from "./assets/help.svg";
import notification from "./assets/notification.svg";
import profilePic from "./assets/profilePic.svg";
import shadcn from "./assets/shadcn.svg";

const Header = () => {
  return (
    <header>
      <div className="flex w-[100%]">
        <div className="flex h-[67px] w-[24.75%] gap-2 border-b-[1px] border-b-[#DCDCDC] bg-white">
          <Image
            src={shadcn}
            alt="shadcn"
            width={400}
            height={300}
            className="h-6 w-4"
          />
          <p className="mt-[6%] text-[16px] leading-[24px]">Shadcn</p>
        </div>
        <div className="flex w-[100%] flex-row justify-between border-b-[1px] border-[#DCDCDC]">
          <div>
            <p>SearchBar</p>
          </div>
          <div className="flex gap-3">
            <Image
              src={notification}
              alt="notification"
              width={400}
              height={300}
              className="h-6 w-4"
            />
            <Image
              src={help}
              alt="help"
              width={400}
              height={300}
              className="h-6 w-4"
            />
            <Image
              src={profilePic}
              alt="profile"
              width={400}
              height={300}
              className="h-6 w-4"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
