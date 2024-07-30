// import DashboardNavbar from ".";
// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// // import { useSession } from "next-auth/react";
// import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// vi.mock("next-auth/react");

// // const mockUseSession = useSession as vi.Mock;

// const renderComponents = () => {
//   render(<DashboardNavbar />);
//   return {
//     helpIcon: screen.getByTestId("help"),
//     bellIcon: screen.getByTestId("bell"),
//     chevronDown: screen.getByTestId("chevronDown"),
//     searchIcon: screen.getByTestId("search"),
//     inputField: screen.getByTestId("input"),
//   };
// };

// describe("dashboardNavbar component rendering tests", () => {
//   beforeEach(() => {
//     mockUseSession.mockReturnValue({
//       data: {
//         user: { name: "Test User", email: "testuser@gmail.com" },
//       },
//       status: "authenticated",
//     });
//   });

//   afterEach(() => {
//     mockUseSession.mockReset();
//   });

//   it("renders help icon", () => {
//     const { helpIcon } = renderComponents();
//     expect(helpIcon).toBeInTheDocument();
//   });

//   it("renders bell icon", () => {
//     const { bellIcon } = renderComponents();
//     expect(bellIcon).toBeInTheDocument();
//   });

//   it("no notification initially", () => {
//     expect(screen.queryByTestId("notificationContent")).not.toBeInTheDocument();
//   });

//   it("bell icon triggers notification", async () => {
//     const { bellIcon } = renderComponents();
//     fireEvent.click(bellIcon);
//     await waitFor(() => {
//       expect(screen.getByTestId("notificationContent")).toBeInTheDocument();
//     });
//     expect(bellIcon).toBeInTheDocument();
//   });

//   it("renders chevron down icon", () => {
//     const { chevronDown } = renderComponents();
//     expect(chevronDown).toBeInTheDocument();
//   });

//   it("renders input search icon", () => {
//     const { searchIcon } = renderComponents();
//     expect(searchIcon).toBeInTheDocument();
//   });

//   it("renders input field", () => {
//     const { inputField } = renderComponents();
//     expect(inputField).toBeInTheDocument();
//   });
// });
