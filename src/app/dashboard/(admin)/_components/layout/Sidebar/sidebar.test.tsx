import { Box, House, List, Mail, Settings, Users } from "lucide-react";

import { render, screen } from "~/test/utils";
import Sidebar from "./index";

const sideItems = [
  {
    route: "Dashboard",
    link: "/dashboard/admin/dashboard",
    icon: House,
    id: "dashboard",
  },
  {
    route: "Products",
    link: "/dashboard/admin/products",
    icon: Box,
    id: "products",
  },
  {
    route: "Users",
    link: "/dashboard/admin/users",
    icon: Users,
    id: "users",
  },
  {
    route: "Email Templates",
    link: "/dashboard/admin/email",
    icon: Mail,
    id: "email",
  },
  {
    route: "Squeeze Pages",
    link: "/dashboard/admin/squeeze-pages",
    icon: Users,
    id: "squeeze",
  },
  {
    route: "Waitlist Page",
    link: "/dashboard/admin/waitlist-page",
    icon: List,
    id: "waitlist",
  },
  {
    route: "Settings",
    link: "/dashboard/admin/settings",
    icon: Settings,
    id: "settings",
  },
];

describe("page tests", () => {
  const renderComponent = () => {
    render(<Sidebar sideNavitems={sideItems} currenPathName="dashboard" />);

    return {
      dashboardlink: screen.getByTestId("dashboard"),
    };
  };

  it("renders all sidebar items", () => {
    expect.assertions(1);
    renderComponent();
    expect(screen.getAllByRole("sidebar-link")).toHaveLength(sideItems.length);
  });

  // temporary ommit of test

  // it("highlights active link", () => {
  //   expect.assertions(1);
  //   renderComponent();
  //   expect(screen.getByTestId("dashboard")).toHaveClass(
  //     "bg-primary text-white",
  //   );
  // });
});
