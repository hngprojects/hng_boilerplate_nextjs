import { render, screen } from "../../../test/utils";
import Modal from "./index";

describe("Action Modal tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(<Modal heading="Heading" description="Description" variant="Basic information" close={() => {}} cancel={() => {}} confirm={() => {}} />);

    expect(true).toBeTruthy();
  });
});

describe("Heading and Description in Basic information modal", () => {
    test("Heading and description are displayed", () => {
        const header = "Heading"
        const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?"
        render(<Modal heading={header} description={description} variant="Basic information" close={() => {}} cancel={() => {}} confirm={() => {}} />)
        expect(screen.getByText(header)).toBeInTheDocument()
        expect(screen.getByText(description)).toBeInTheDocument()
    })
})

describe("Heading and Description in Confirmation modal", () => {
    test("Heading and description are displayed", () => {
        const header = "Heading"
        const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?"
        render(<Modal heading={header} description={description} variant="Confirmation" close={() => {}} cancel={() => {}} confirm={() => {}} />)
        expect(screen.getByText(header)).toBeInTheDocument()
        expect(screen.getByText(description)).toBeInTheDocument()
    })
})

describe("Heading and Description in Destructive confirmation modal", () => {
    test("Heading and description are displayed", () => {
        const header = "Heading"
        const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?"
        render(<Modal heading={header} description={description} variant="Destructive confirmation" close={() => {}} cancel={() => {}} confirm={() => {}} />)
        expect(screen.getByText(header)).toBeInTheDocument()
        expect(screen.getByText(description)).toBeInTheDocument()
    })
})

describe("Heading and Description in Success modal", () => {
    test("Heading and description are displayed", () => {
        const header = "Heading"
        const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?"
        render(<Modal heading={header} description={description} variant="Success" close={() => {}} cancel={() => {}} confirm={() => {}} />)
        expect(screen.getByText(header)).toBeInTheDocument()
        expect(screen.getByText(description)).toBeInTheDocument()
    })
})

describe("Heading and Description in Error modal", () => {
    test("Heading and description are displayed", () => {
        const header = "Heading"
        const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?"
        render(<Modal heading={header} description={description} variant="Error" close={() => {}} cancel={() => {}} confirm={() => {}} />)
        expect(screen.getByText(header)).toBeInTheDocument()
        expect(screen.getByText(description)).toBeInTheDocument()
    })
})