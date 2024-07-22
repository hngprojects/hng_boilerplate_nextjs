import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DialogBox from "../components/modals/DialogBox/DialogBox";

type Variant = "success" | "warning" | "error" | "default";

const renderDialogBox = (variant: Variant) => {
  const headerText =
    variant === "success"
      ? "Success Header"
      : variant === "warning"
        ? "Warning Header"
        : variant === "error"
          ? "Error Header"
          : "Default Header";

  const description =
    variant === "success"
      ? "This is a success message."
      : variant === "warning"
        ? "This is a warning message."
        : variant === "error"
          ? "This is an error message."
          : "This is a default message.";

  render(
    <DialogBox
      headerText={headerText}
      description={description}
      buttons={[
        <button
          key="1"
          className="bg-background, rounded-md border-2 border-solid border-border px-4 py-2 text-foreground"
        >
          Cancel
        </button>,
        <button
          key="2"
          className={`rounded ${
            variant === "success"
              ? "bg-success"
              : variant === "warning"
                ? "bg-warning"
                : variant === "error"
                  ? "bg-error"
                  : "bg-neutral-dark-2"
          } px-4 py-2 text-background`}
        >
          {variant === "success"
            ? "Success"
            : variant === "warning"
              ? "Warning"
              : variant === "error"
                ? "Error"
                : "Confirm"}
        </button>,
      ]}
    />,
  );
};

describe("dialogBox Component", () => {
  it("renders with success variant", () => {
    expect.assertions(3); // Expecting 3 assertions to be made
    renderDialogBox("success");
    expect(screen.getByText("Success Header")).toBeInTheDocument();
    expect(screen.getByText("This is a success message.")).toBeInTheDocument();
    expect(screen.getByText("Success")).toBeInTheDocument();
  });

  it("renders with warning variant", () => {
    expect.assertions(3); // Expecting 3 assertions to be made
    renderDialogBox("warning");
    expect(screen.getByText("Warning Header")).toBeInTheDocument();
    expect(screen.getByText("This is a warning message.")).toBeInTheDocument();
    expect(screen.getByText("Warning")).toBeInTheDocument();
  });

  it("renders with error variant", () => {
    expect.assertions(3); // Expecting 3 assertions to be made
    renderDialogBox("error");
    expect(screen.getByText("Error Header")).toBeInTheDocument();
    expect(screen.getByText("This is an error message.")).toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("renders with default variant", () => {
    expect.assertions(3); // Expecting 3 assertions to be made
    renderDialogBox("default");
    expect(screen.getByText("Default Header")).toBeInTheDocument();
    expect(screen.getByText("This is a default message.")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });
});
