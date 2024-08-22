"use client";

import {
  Banknote,
  Bell,
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  LucideProps,
  User,
  UserRoundCog,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ForwardRefExoticComponent, RefAttributes } from "react";

import { useOrgContext } from "~/contexts/orgContext";
import { useLocalStorage } from "~/hooks/use-local-storage";

const sideItems = [
  {
    route: "General",
    link: "/dashboard/admin/settings",
    icon: User,
    id: "general",
  },
  {
    route: "Account",
    link: "/dashboard/admin/settings/account",
    icon: UserRoundCog,
    id: "account",
  },
  {
    route: "Notification",
    link: "/dashboard/admin/settings/notification",
    icon: Bell,
    id: "notification",
  },
  {
    route: "Payment Information",
    link: "/dashboard/admin/settings/payment-information",
    icon: Banknote,
    id: "payment-information",
  },
  {
    route: "Data and Privacy",
    link: "/dashboard/admin/settings/data-and-privacy",
    icon: Database,
    id: "data-and-privacy",
  },
  {
    route: "Language and Region",
    link: "/dashboard/admin/settings/language-and-region",
    icon: Globe,
    id: "language-and-region",
  },
];

const organizationLinks = [
  {
    route: "Members",
    link: "/dashboard/admin/settings/organization/members",
    icon: UsersIcon,
    id: "members",
  },
  {
    route: "Roles and permissions",
    link: "/dashboard/admin/settings/organization/roles-and-permissions",
    icon: Bell,
    id: "roles-and-permissions",
  },
  {
    route: "Integrations",
    link: "/dashboard/admin/settings/organization/integrations",
    icon: Banknote,
    id: "integrations",
  },
];

interface Iproperties {
  sideNavitems?: {
    route: string;
    link: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    id: string;
  }[];
  currenPathName?: string;
}
const SettingsSidebar: FC<Iproperties> = ({ sideNavitems = sideItems }) => {
  const pathname = usePathname();
  const currentPath =
    pathname?.split("/").length == 2 ? "general" : pathname?.split("/")[3];
  const organizationPath = pathname?.split("/")[4];
  const { organizations } = useOrgContext();
  const [org_id] = useLocalStorage<string>("current_orgid", "");

  const organization = organizations.find(
    (org) => org.organisation_id === org_id,
  );

  return (
    <div className="h-screen w-[50px] flex-col items-center justify-center bg-[#FAFAFA] pt-6 md:block md:w-[304px] md:justify-start md:px-4">
      <div className="mb-6 flex items-center justify-center md:justify-start md:gap-2">
        <ChevronLeft className="h-5 w-5 text-neutral-dark-2" />
        <h2 className="hidden text-xl text-neutral-dark-2 md:block">
          Settings
        </h2>
      </div>
      <h3 className="hidden p-2.5 text-lg text-neutral-dark-2 md:block">
        Profile
      </h3>
      <section className="mb-2 flex flex-col items-center gap-y-3 border-b-[1px] border-border pb-2 pt-2 md:items-stretch">
        {sideNavitems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            data-testid={item.id}
            role="sidebar-link"
            className={`${currentPath === item.id ? "bg-primary text-white" : "bg-transparent text-neutral-dark-2 hover:bg-gray-200"} flex items-center justify-center gap-2.5 rounded-full px-2.5 py-3 text-sm transition-all duration-300 ease-in md:h-auto md:w-auto md:justify-start md:rounded-sm`}
          >
            <item.icon className="h-5 w-5" role="sidebar-icon" />
            <span className="hidden md:block">{item.route}</span>
          </Link>
        ))}
      </section>
      {organization?.user_role !== "user" && (
        <>
          <h3 className="hidden p-2.5 text-lg text-neutral-dark-2 md:block">
            Organization
          </h3>
          <section className="flex flex-col items-center gap-y-3 pt-2 md:items-stretch">
            {organizationLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                data-testid={item.id}
                role="sidebar-link"
                className={`${
                  organizationPath === item.id
                    ? "bg-primary text-white"
                    : "bg-transparent text-neutral-dark-2 hover:bg-gray-200"
                } flex items-center justify-center gap-2.5 rounded-full px-2.5 py-3 text-sm transition-all duration-300 ease-in md:h-auto md:w-auto md:justify-between md:rounded-sm`}
              >
                <div className="flex items-center justify-start gap-2.5">
                  <item.icon className="h-5 w-5" role="sidebar-icon" />
                  <span className="hidden md:block">{item.route}</span>
                </div>
                <ChevronRight className="hidden h-5 w-5 md:block" />
              </Link>
            ))}
          </section>
        </>
      )}
      {/* <section className="flex flex-col items-center gap-y-3 pt-2 md:items-stretch">
        {organizationLinks.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            data-testid={item.id}
            role="sidebar-link"
            className={`${organizationPath === item.id ? "bg-primary text-white" : "bg-transparent text-neutral-dark-2 hover:bg-gray-200"} flex items-center justify-center gap-2.5 rounded-full px-2.5 py-3 text-sm transition-all duration-300 ease-in md:h-auto md:w-auto md:justify-between md:rounded-sm`}
          >
            <div className="flex items-center justify-start gap-2.5">
              <item.icon className="h-5 w-5" role="sidebar-icon" />
              <span className="hidden md:block">{item.route}</span>
            </div>
            <ChevronRight className="hidden h-5 w-5 md:block" />
          </Link>
        ))}
      </section> */}
    </div>
  );
};

export default SettingsSidebar;
