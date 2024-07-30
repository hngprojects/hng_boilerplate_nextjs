import Image from "next/image";
import Link from "next/link";

const DashboardLogo = () => {
  return (
    <Link
      href="/"
      className="flex w-full items-center justify-center gap-2.5 py-[14px] md:justify-start"
    >
      <div>
        <Image
          src="/logo/logo.png"
          alt="Hgn boiler plate logo"
          height={24}
          width={24}
          data-testid="admin-logo"
          className="h-full w-full object-contain"
        />
      </div>
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
