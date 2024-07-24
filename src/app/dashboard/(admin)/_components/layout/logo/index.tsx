import Image from "next/image";
import Link from "next/link";

const DashboardLogo = () => {
  return (
    <Link
      href="/"
      className="flex w-full max-w-[24px] items-center justify-center gap-2.5 py-[14px] md:justify-start"
    >
      <Image
        src="/logo/logo.png"
        alt="Hgn boiler plate logo"
        height={24}
        width={24}
        data-testid="admin-logo"
        className="h-full w-full object-contain"
      />
      <span
        className="neutral-dark hidden text-2xl font-semibold md:block"
        data-testid="admin-logo-text"
      >
        Boilerplate
      </span>
    </Link>
  );
};

export default DashboardLogo;
