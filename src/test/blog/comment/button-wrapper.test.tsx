import { render, screen } from "@testing-library/react";

import ButtonWrapper from "~/components/common/comment-component/button-wrapper";

describe("button wrapper component", () => {
  it("should render children correctly", () => {
    expect.assertions(1);
    render(
      <ButtonWrapper data-testid="test-button-wrapper">
        <button>Click Me</button>
      </ButtonWrapper>,
    );
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should apply the correct data-testid attribute", () => {
    expect.assertions(1);
    render(
      <ButtonWrapper data-testid="test-button-wrapper">
        <button>Click Me</button>
      </ButtonWrapper>,
    );
    expect(screen.getByTestId("test-button-wrapper")).toBeInTheDocument();
  });

  it("should pass additional props to the wrapper div", () => {
    expect.assertions(1);
    render(
      <ButtonWrapper data-testid="test-button-wrapper" className="custom-class">
        <button>Click Me</button>
      </ButtonWrapper>,
    );
    expect(screen.getByTestId("test-button-wrapper")).toHaveClass(
      "custom-class",
    );
  });
});
