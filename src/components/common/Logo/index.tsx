import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="h-[37px] w-full max-w-[283px] md:h-[52px]"
      data-testid="logo"
    >
      <Image
        src="/images/HNG Boilerplate-Logo.png"
        alt="Hgn boiler plate logo"
        height={52}
        width={283}
        className="h-full w-full object-contain"
      />
    </Link>
  );
};

export default Logo;
