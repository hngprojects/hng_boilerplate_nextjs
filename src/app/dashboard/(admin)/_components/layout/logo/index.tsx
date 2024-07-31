import Image from "next/image";
import Link from "next/link";

import { cn } from "~/lib/utils";

type DashboardLogoProperties = {
  responsive?: boolean;
};
const DashboardLogo = ({ responsive }: DashboardLogoProperties) => {
  return (
    <Link href="/" className="flex w-full items-center gap-2.5 py-3.5">
      <span className="size-6">
        <Image
          src="/logo/logo.svg"
          alt="HNG Boilerplate logo"
          height={24}
          width={24}
          data-testid="admin-logo"
          className="size-full object-contain"
          unoptimized
        />
      </span>
      <span
        className={cn(
          "neutral-dark text-2xl font-semibold",
          responsive && "max-md:hidden",
        )}
        data-testid="admin-logo-text"
      >
        Boilerplate.
      </span>
    </Link>
  );
};

export default DashboardLogo;
