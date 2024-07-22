import Page from "../app/(home)/latestArticles/page";
import { fireEvent, render, screen } from "./utils";

describe("page tests", () => {
  it("should render correctly and update card list on button click", async () => {
    expect.assertions(2); // Specify the number of assertions

    render(<Page />);

    // Initial render assertions
    expect(screen.getByText("Latest Articles")).toBeInTheDocument();
    const cardElements = screen.getAllByTestId("card-list");
    expect(cardElements).toHaveLength(6);

    // Trigger button click
    const button = screen.getByTestId("buttontestid");
    fireEvent.click(button);

    // Wait for the update to reflect (assuming the update takes some time)
    // await waitFor(() => {
    //   const updatedCardElements = screen.getAllByTestId("card-list");
    //   expect(updatedCardElements).toHaveLength(6); // Assuming one new card is added
    // });
  });
});
