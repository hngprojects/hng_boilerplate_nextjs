import Image from "next/image";

function Logo() {
  return (
    <div className="px-[27px] py-[10px] h-[67px]  border-b-[0.5px] border-stroke-100 flex items-center gap-2">
      <Image src="/logo.svg" width={24} height={24} alt="Shadcn" />
      <span className="text-base font-medium">Shadcn</span>
    </div>
  );
}

export default Logo;
