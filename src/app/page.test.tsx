import { render,screen,fireEvent } from "../test/utils";
import Page from "./page";

describe("page tests", () => {
  it("should render correctly", () => {
  
    // console.log('Hello world')
    render(<Page />);
    // required-latest-articles
    expect(screen.getByText('Latest Articles')).toBeInTheDocument()
    const cardElements = screen.getAllByTestId('card-list');
    expect(cardElements).toHaveLength(5);
    const button = screen.getByTestId('buttontestid');
    fireEvent.click(button)

      setTimeout(()=>{
        const cardElementsSecondTime = screen.getAllByTestId('card-list');


        expect(cardElementsSecondTime).toHaveLength(6);
    
      },2500)


  });
});
