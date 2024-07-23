import Image from "next/image";
import Link from "next/link";

const DashboardLogo = () => {
  return (
    <Link
      href="/"
      className="h-[37px] w-full max-w-[80px] md:h-[52px] md:max-w-[160px]"
      data-testid="logo"
    >
      <Image
        src="/logo/dashboard-logo.png"
        alt="Hgn boiler plate logo"
        height={30}
        width={160}
        className="h-full w-full object-contain"
      />
    </Link>
  );
};

export default DashboardLogo;
