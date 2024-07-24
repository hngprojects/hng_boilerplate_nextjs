import Sidebar from ".";
import { Box, House, Mail, Settings, Users } from "lucide-react";

import { render, screen } from "~/test/utils";

const sideItems = [
  {
    route: "Dashboard",
    link: "/admin/dashboard",
    icon: House,
    id: "dashboard",
  },
  {
    route: "Products",
    link: "/admin/products",
    icon: Box,
    id: "products",
  },
  {
    route: "Users",
    link: "/admin/users",
    icon: Users,
    id: "users",
  },
  {
    route: "Email Templates",
    link: "/admin/email",
    icon: Mail,
    id: "email",
  },
  {
    route: "Squeeze Pages",
    link: "/admin/squeeze-pages",
    icon: Users,
    id: "squeeze",
  },
  {
    route: "Waitlist Page",
    link: "/admin/waitlist-page",
    icon: Mail,
    id: "waitlist",
  },
  {
    route: "Settings",
    link: "/admin/settings",
    icon: Settings,
    id: "settings",
  },
];

describe("page tests", () => {
  const renderComponent = () => {
    render(<Sidebar sideNavitems={sideItems} currenPathName="dashboard" />);

    return {
      logo: screen.getByTestId("admin-logo"),
      logoText: screen.getByTestId("admin-logo-text"),
      dashboardlink: screen.getByTestId("dashboard"),
    };
  };
  it("side logo renders", () => {
    expect.assertions(2);

    const { logo, logoText } = renderComponent();

    expect(logo).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
  });

  it("renders all sidebar items", () => {
    expect.assertions(1);
    renderComponent();
    expect(screen.getAllByRole("sidebar-link")).toHaveLength(sideItems.length);
  });

  it("highlights active link", () => {
    expect.assertions(1);
    renderComponent();
    expect(screen.getByTestId("dashboard")).toHaveClass(
      "bg-primary text-white",
    );
  });
});
