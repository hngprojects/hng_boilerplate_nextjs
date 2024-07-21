// footer.test.tsx
import { render, screen } from "@testing-library/react";

import EmailFooter from "./index";

describe("emailFooter Component", () => {
  it("renders without crashing", () => {
    expect.hasAssertions();
    render(<EmailFooter />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("contains social media icons", () => {
    expect.hasAssertions();
    render(<EmailFooter />);
    expect(screen.getByTestId("twitter-icon")).toBeInTheDocument();
    expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
    expect(screen.getByTestId("tiktok-icon")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin-icon")).toBeInTheDocument();
  });

  it("contains footer text", () => {
    expect.hasAssertions();
    render(<EmailFooter />);
    expect(
      screen.getByText(/thank you for choosing boilerplate.com/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/contact our customer support/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /you are receiving this email because you signed up at boilerplate.com/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/update your preferences/i)).toBeInTheDocument();
    expect(screen.getByText(/unsubscribe from this list/i)).toBeInTheDocument();
  });
});
