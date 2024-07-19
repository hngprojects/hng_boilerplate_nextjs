import { fireEvent, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { describe, expect, it } from "vitest";

import CharacterLimitTextarea from "../components/common/CharacterLimitTextarea/CharacterLimitTextarea";

// Helper component to manage state
const TestComponent = ({ maxLength }: { maxLength: number }) => {
  const [value, setValue] = useState("");

  return (
    <CharacterLimitTextarea
      maxLength={maxLength}
      value={value}
      onChange={setValue}
      label="label"
      id="message"
      name="message"
    />
  );
};

describe("CharacterLimitTextarea", () => {
  it("renders the component", () => {
    render(
      <CharacterLimitTextarea
        maxLength={100}
        value=""
        onChange={() => {}}
        label="label"
        id="message"
        name="message"
      />,
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("displays the character count", () => {
    render(
      <CharacterLimitTextarea
        maxLength={100}
        value=""
        onChange={() => {}}
        label="label"
        id="message"
        name="message"
      />,
    );
    expect(screen.getByText("0/100 characters")).toBeInTheDocument();
  });

  it("updates the character count as text is entered", () => {
    render(<TestComponent maxLength={100} />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Hello" } });
    expect(screen.getByText("5/100 characters")).toBeInTheDocument();
  });

  it("displays an error message when character limit is exceeded", () => {
    render(<TestComponent maxLength={5} />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Hello, world!" } });

    const errorMessage = screen.getByText(/cannot exceed/);
    expect(errorMessage).toBeInTheDocument();
  });
});
