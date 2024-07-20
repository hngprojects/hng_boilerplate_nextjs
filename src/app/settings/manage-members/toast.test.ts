// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import React from "react";
// import { describe, expect, it } from "vitest";

// import "@testing-library/jest-dom/vitest";

// import MockPage from "../../app/settings/members/page";

// describe("Invite Alert", () => {
//   it("should show the alert when the button is clicked", () => {
//     render(<MockPage />);
//     const showAlertButton = screen.getByText(/Show Alert/i);
//     fireEvent.click(showAlertButton);
//     expect(screen.getByText(/1 Invite sent successfully/i)).toBeInTheDocument();
//   });

//   it("should close the alert when the close button is clicked", () => {
//     render(<MockPage />);

//     const showAlertButton = screen.getByText(/Show Alert/i);
//     fireEvent.click(showAlertButton);

//     const closeButton = screen.getByLabelText(/close/i);
//     fireEvent.click(closeButton);

//     expect(screen.queryByText(/1 Invite sent successfully/i)).toBeNull();
//   });

//   it("should hide the alert after 10 seconds", async () => {
//     render(<MockPage />);

//     const showAlertButton = screen.getByText(/Show Alert/i);
//     fireEvent.click(showAlertButton);

//     await waitFor(
//       () => {
//         expect(screen.queryByText(/1 Invite sent successfully/i)).toBeNull();
//       },
//       { timeout: 11000 },
//     );
//   });
// });
