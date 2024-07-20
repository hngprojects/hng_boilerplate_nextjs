"use client";

import {
  Banknote,
  Bell,
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  LucideIcon,
  User,
  UserCog,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type navSidebarProperty = {
  id: number;
  name: string;
  href: string;
  icon: LucideIcon;
  submenu: boolean;
};

const profileNav: navSidebarProperty[] = [
  {
    id: 601,
    name: "General",
    href: "/general",
    icon: User,
    submenu: false,
  },
  {
    id: 602,
    name: "Account",
    href: "/account",
    icon: UserCog,
    submenu: true,
  },
  {
    id: 603,
    name: "Notification",
    href: "/notification",
    icon: Bell,
    submenu: true,
  },
  {
    id: 604,
    name: "Payment Information",
    href: "/payment",
    icon: Banknote,
    submenu: true,
  },
  {
    id: 605,
    name: "Data and Privacy",
    href: "/privacy",
    icon: Database,
    submenu: false,
  },
  {
    id: 606,
    name: "Language and Region",
    href: "/langauge",
    icon: Globe,
    submenu: false,
  },
];

const OrganizationNav: navSidebarProperty[] = [
  {
    id: 607,
    name: "Members",
    href: "/members",
    icon: Users,
    submenu: true,
  },
  {
    id: 608,
    name: "Roles and Permissions",
    href: "/roles",
    icon: Bell,
    submenu: true,
  },
  {
    id: 609,
    name: "Integrations",
    href: "/notification",
    icon: Banknote,
    submenu: true,
  },
];

const MemberSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const pathname = usePathname();

  return (
    <nav
      data-testid="nav"
      className={`min-h-full rounded-2xl bg-background text-base transition-all ${isExpanded ? "w-80 p-6" : "w-20 p-2.5"}`}
    >
      <div className="flex items-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-10 w-10"
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
        <p
          className={`overflow-hidden text-2xl font-semibold transition-all ${isExpanded ? "w-auto" : "w-0"}`}
        >
          Settings
        </p>
      </div>

      <p
        className={`mb-1.5 mt-5 flex h-12 items-center overflow-hidden font-semibold transition-all ${isExpanded ? "w-auto" : "w-0"}`}
      >
        Profile
      </p>

      <ul>
        {profileNav.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`w-100 group mb-1.5 flex h-12 cursor-pointer items-center rounded px-2.5 transition-all hover:bg-primary hover:text-background ${isExpanded ? "justify-between" : "justify-center"} ${pathname === link.href ? "bg-primary text-background" : ""}`}
            >
              <div
                className={`flex items-center ${isExpanded ? "gap-x-3" : "gap-x-0"}`}
              >
                <link.icon />
                <p
                  className={`overflow-hidden ${isExpanded ? "w-auto" : "w-0"}`}
                >
                  {link.name}
                </p>
              </div>
              {link.submenu && isExpanded ? (
                <ChevronRight />
              ) : (
                <ChevronRight className="w-0" />
              )}
            </Link>
          </li>
        ))}
      </ul>
      <p
        className={`mb-1.5 mt-5 flex h-12 items-center overflow-hidden text-2xl font-semibold transition-all ${isExpanded ? "w-auto" : "w-0"}`}
      >
        Organization
      </p>

      <ul>
        {OrganizationNav.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`w-100 group mb-1.5 flex h-12 cursor-pointer items-center rounded px-2.5 transition-all hover:bg-primary hover:text-background ${isExpanded ? "justify-between" : "justify-center"} ${pathname === link.href ? "bg-primary text-background" : ""}`}
            >
              <div
                className={`flex items-center ${isExpanded ? "gap-x-3" : "gap-x-0"}`}
              >
                <link.icon />
                <p
                  className={`overflow-hidden ${isExpanded ? "w-auto" : "w-0"}`}
                >
                  {link.name}
                </p>
              </div>
              {isExpanded ? <ChevronRight /> : <ChevronRight className="w-0" />}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MemberSidebar;
