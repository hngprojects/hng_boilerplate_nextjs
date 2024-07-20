import Image from "next/image";

import avatar from "../../../../public/public/avatar.svg";
import bell from "../../../../public/public/bell.svg";
import down from "../../../../public/public/down.svg";
import Logo from "../../../../public/public/Logo.svg";
import magnifying from "../../../../public/public/magnifying.svg";
import Menu from "../../../../public/public/Menu.svg";
import query from "../../../../public/public/query.svg";

export default function Header() {
  return (
    <>
      <header className="flex flex-row items-center justify-between px-5 py-4 sm:px-7">
        {/* The left side */}
        <div className="flex flex-row items-center gap-4">
          <Image
            src={Menu}
            alt="Menu-icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />

          <div className="flex flex-row gap-2 lg:mr-12">
            <Image
              src={Logo}
              alt="logo"
              width={16}
              height={20}
              className="cursor-pointer"
            />

            <h1 className="font-sans text-xl font-[600]">Boilerplate.</h1>
          </div>

          <div className="hidden items-center justify-center gap-6 lg:flex">
            <p className="font-sans text-xs font-semibold leading-5 text-neutral-dark-2">
              Overview
            </p>
            <p className="font-sans text-xs font-semibold leading-5 text-neutral-dark-2">
              Customers
            </p>
            <p className="font-sans text-xs font-semibold leading-5 text-neutral-dark-2">
              Products
            </p>
            <p className="font-sans text-xs font-bold leading-5 text-primary">
              Settings
            </p>
          </div>
        </div>

        {/* The right side */}
        <div className="flex flex-row items-center justify-evenly gap-5">
          <div className="hidden h-[2.5rem] w-[14rem] items-center gap-2 rounded-md border bg-[#fff] px-3 sm:flex sm:w-56 md:w-80 lg:w-64">
            <Image
              src={magnifying}
              alt={magnifying}
              width={20}
              height={24}
              className="cursor-pointer"
            />

            <input
              className="md:w- flex h-[1.25rem] w-[6.5rem] items-center gap-[0.625rem] py-2 text-black text-input outline-none"
              placeholder="Search option"
            />
          </div>

          <Image
            src={bell}
            alt={bell}
            width={22}
            height={24}
            className="cursor-pointer"
          />

          <Image
            src={query}
            alt={query}
            width={22}
            height={24}
            className="cursor-pointer"
          />

          <div className="flex">
            <Image
              src={avatar}
              alt={avatar}
              width={26}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src={down}
              alt={down}
              width={22}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  );
}
