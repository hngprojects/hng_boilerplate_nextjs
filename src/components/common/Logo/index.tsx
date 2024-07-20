import Image from "next/image";
import Link from "next/link";

import { LogoImg } from "~/assets";

const Logo = () => {
  return (
    <Link href="/" className="h-[37px] w-full max-w-[283px] md:h-[52px]">
      <Image
        src={LogoImg}
        alt="Hgn boiler plate logo"
        className="h-full w-full object-contain"
      />
    </Link>
  );
};

export default Logo;
