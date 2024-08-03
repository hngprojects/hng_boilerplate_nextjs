import { MenuIcon } from "lucide-react";

import DashboardLogo from "~/app/dashboard/(admin)/_components/layout/logo";
import { Navlinks } from "~/app/dashboard/(user-dashboard)/_components/layout/navbar/navlinks";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

export function MobileNavlinks() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon className="size-6 text-neutral-dark-2 transition-all duration-300 hover:text-neutral-dark-2/50" />
      </SheetTrigger>
      <SheetContent side="left" className="p-8 sm:max-w-[270px]">
        <div className="flex flex-col gap-6">
          <DashboardLogo />
          <Navlinks mobile />
        </div>
      </SheetContent>
    </Sheet>
  );
}
