import Image from "next/image";

import Logo from "~/components/common/Logo";

function SideBar() {
  return (
    <div className="max-w-[298px] flex-1 flex flex-col gap-6 border border-r-[0.5px] border-stroke-100">
      <Logo />
      <ul className="px-4">
        <li className="mb-[10px]">
          <a
            href="#"
            className="flex flex-row gap-[11px] items-center px-[10px] py-[15px]"
          >
            <Image src="/dashboard.svg" width={20} height={20} alt="" />{" "}
            <span className="text-base font-normal">Dashboard</span>
          </a>
        </li>
        <li className=" mb-[10px]">
          <a
            href="#"
            className="flex flex-row gap-[11px] items-center bg-acent-400 px-[10px] py-[15px] border rounded-[8px]"
          >
            <Image src="/product.svg" width={20} height={20} alt="" />{" "}
            <span className="text-base font-normal">Product</span>
          </a>
        </li>
        <li className="mb-[10px]">
          <a
            href="#"
            className="flex flex-row gap-[11px] items-center px-[10px] py-[15px]"
          >
            <Image src="/users.svg" width={20} height={20} alt="" />{" "}
            <span className="text-base font-normal">Users</span>
          </a>
        </li>
        <li className="mb-[10px]">
          <a
            href="#"
            className="flex flex-row gap-[11px] items-center px-[10px] py-[15px]"
          >
            <Image src="/email.svg" width={20} height={20} alt="" />{" "}
            <span className="text-base font-normal">Email Templates</span>
          </a>
        </li>
        <li className="mb-[10px]">
          <a
            href="#"
            className="flex flex-row gap-[11px] items-center px-[10px] py-[15px]"
          >
            <Image src="/pages.svg" width={20} height={20} alt="" />{" "}
            <span className="text-base font-normal">Squeeze Pages</span>
          </a>
        </li>
        <li className="mb-[10px]">
          <a
            href="#"
            className="flex flex-row gap-[11px] items-center px-[10px] py-[15px]"
          >
            <Image src="/dashboard.svg" width={20} height={20} alt="" />{" "}
            <span className="text-base font-normal">Waitlist Page</span>
          </a>
        </li>
        <li className="mb-[10px]">
          <a
            href="#"
            className="flex flex-row gap-[11px] items-center px-[10px] py-[15px]"
          >
            <Image src="/dashboard.svg" width={20} height={20} alt="" />{" "}
            <span className="text-base font-normal">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
