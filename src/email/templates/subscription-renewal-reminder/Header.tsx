import Image from "next/image";

import Logo from "./socials/icon-logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-[rgba(225,214,214,0.4)] p-16">
      <Image src={Logo} alt="Logo" width={20} height={20} />
      <h1 className="ml-4 text-[1.8rem] font-semibold text-[#121a26]">
        Boilerplate.
      </h1>
    </header>
  );
}
