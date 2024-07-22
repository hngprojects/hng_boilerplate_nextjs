"use client";

import {
  Archive,
  Box,
  ChevronRight,
  House,
  IndentDecrease,
  Mail,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";

import { Nav } from "./nav";

// type Properties = {};

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button onClick={handleToggleSidebar} className="lg:hidden">
        <ChevronRight />
      </button>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: House,
            variant: "ghost",
          },
          {
            title: "Products",
            icon: Box,
            variant: "ghost",
          },
          {
            title: "Users",
            icon: Users,
            variant: "default",
          },
          {
            title: "Email Templates",
            icon: Mail,
            variant: "ghost",
          },
          {
            title: "Squeeze Pages",
            icon: IndentDecrease,
            variant: "ghost",
          },
          {
            title: "Waitlist Page",
            icon: Archive,
            variant: "ghost",
          },
          {
            title: "settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
