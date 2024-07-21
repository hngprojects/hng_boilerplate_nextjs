import { render } from "../../test/utils";
import LinearGradientGenerator from "./LinearGradientGenerator";

describe("linearGradientGenerator Component", () => {
  it("should render with gradient based on colors and direction", () => {
    expect.assertions(1);
    const { container } = render(
      <LinearGradientGenerator
        colors={["#ff0000", "#00ff00"]}
        direction="to right"
      />,
    );
    const div = container.firstChild as HTMLDivElement;
    expect(div).toHaveStyle(
      "background: linear-gradient(to right, #ff0000, #00ff00)",
    );
  });

  it("should handle gradient stops correctly", () => {
    expect.assertions(1);
    const { container } = render(
      <LinearGradientGenerator
        colors={["#ff0000", "#00ff00"]}
        direction="to bottom"
        stops={["0%", "100%"]}
      />,
    );
    const div = container.firstChild as HTMLDivElement;
    expect(div).toHaveStyle(
      "background: linear-gradient(to bottom, #ff0000 0%, #00ff00 100%)",
    );
  });

  it("should handle missing stops gracefully", () => {
    expect.assertions(1);
    const { container } = render(
      <LinearGradientGenerator
        colors={["#ff0000", "#00ff00"]}
        direction="45deg"
      />,
    );
    const div = container.firstChild as HTMLDivElement;
    expect(div).toHaveStyle(
      "background: linear-gradient(45deg, #ff0000, #00ff00)",
    );
  });
});
