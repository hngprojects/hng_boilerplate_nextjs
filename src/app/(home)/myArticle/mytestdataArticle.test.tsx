
import { fireEvent, render, screen } from "../../../test/utils";
import Page from "./page";

describe("page tests", () => {
  it("should render correctly", () => {
    render(<Page />);
    expect(screen.getByText("Latest Articles")).toBeInTheDocument();
    const cardElements = screen.getAllByTestId("card-list");
    expect(cardElements).toHaveLength(5);
    const button = screen.getByTestId("buttontestid");
    fireEvent.click(button);
    expect.assertions(1);
    render(<Page />);
    expect(screen.getByText('Latest Articles')).toBeInTheDocument()
    const cardElements = screen.getAllByTestId('card-list');
    expect(cardElements).toHaveLength(5);
    const button = screen.getByTestId('buttontestid');
    fireEvent.click(button)

    setTimeout(() => {
      const cardElementsSecondTime = screen.getAllByTestId('card-list');


      expect(cardElementsSecondTime).toHaveLength(6);

    }, 2500)

    setTimeout(() => {
      const cardElementsSecondTime = screen.getAllByTestId("card-list");

      expect(cardElementsSecondTime).toHaveLength(6);
    }, 2500);
    expect(true).toBeTruthy();
  });
});
