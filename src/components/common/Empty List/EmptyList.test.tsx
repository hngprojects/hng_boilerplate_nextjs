import { render, screen } from "../../../test/utils";
import EmptyList from "./EmptyList";

describe("emptyList", () => {
  it("should render the component and the required contents correctly", () => {
    expect.assertions(3);

    const image = "/no-job-img-desktop.png";
    const mainText = "No available Jobs at the moment";
    const subText = "Come back later!";

    render(<EmptyList image={image} mainText={mainText} subText={subText} />);

    expect(screen.getByRole("heading", { level: 5 })).toHaveTextContent(
      mainText,
    );
    expect(screen.getByRole("heading", { level: 6 })).toHaveTextContent(
      subText,
    );

    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src");
  });
});
