import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-[rgba(225,214,214,0.4)] p-16">
      <Image src="/icon-logo.svg" alt="Logo" width={18} height={18} />
      <h1 className="text-[#121a26] text-[2.4rem] font-semibold ml-4">Boilerplate.</h1>
    </header>
  );
}
