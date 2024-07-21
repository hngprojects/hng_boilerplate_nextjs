import userEvent from "@testing-library/user-event";

import { render, screen } from "../../../test/utils";
import Modal from "./index";

describe("action Modal tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(
      <Modal
        heading="Heading"
        description="Description"
        triggerMsg="Open Dialog"
        variant="Basic information"
        close={() => {}}
        cancel={() => {}}
        confirm={() => {}}
      />,
    );

    expect(true).toBeTruthy();
  });
});

describe("modal Trigger is rendered", () => {
  it("should display modal trigger", () => {
    expect.assertions(1);
    const triggerMessage = "Open Dialog";
    render(
      <Modal
        heading="Heading"
        description="Description"
        triggerMsg={triggerMessage}
        variant="Basic information"
        close={() => {}}
        cancel={() => {}}
        confirm={() => {}}
      />,
    );
    expect(
      screen.getByRole("button", { name: triggerMessage }),
    ).toBeInTheDocument();
  });
});

describe("renders Basic information DialogContent after DialogTrigger is clicked", () => {
  it("heading and description are displayed", async () => {
    expect.assertions(3);
    const user = userEvent.setup();
    const header = "Heading";
    const description =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?";
    render(
      <Modal
        heading={header}
        description={description}
        triggerMsg="Open Dialog"
        variant="Basic information"
        close={() => {}}
        cancel={() => {}}
        confirm={() => {}}
      />,
    );
    const trigger = screen.getByRole("button");

    await user.click(trigger);
    expect(screen.getByTestId("Dialog")).toBeInTheDocument();
    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});

describe("renders Confirmation DialogContent after DialogTrigger is clicked", () => {
  it("heading and description are displayed", async () => {
    expect.assertions(2);
    const user = userEvent.setup();
    const header = "Heading";
    const description =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?";
    render(
      <Modal
        heading={header}
        description={description}
        triggerMsg="Open Dialog"
        variant="Confirmation"
        close={() => {}}
        cancel={() => {}}
        confirm={() => {}}
      />,
    );
    const trigger = screen.getByRole("button");

    await user.click(trigger);
    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});

describe("renders Destructive confirmation DialogContent after DialogTrigger is clicked", () => {
  it("heading and description are displayed", async () => {
    expect.assertions(2);
    const user = userEvent.setup();
    const header = "Heading";
    const description =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?";
    render(
      <Modal
        heading={header}
        description={description}
        triggerMsg="Open Dialog"
        variant="Destructive confirmation"
        close={() => {}}
        cancel={() => {}}
        confirm={() => {}}
      />,
    );
    const trigger = screen.getByRole("button");

    await user.click(trigger);
    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});

describe("renders Success DialogContent after DialogTrigger is clicked", () => {
  it("heading and description are displayed", async () => {
    expect.assertions(2);
    const user = userEvent.setup();
    const header = "Heading";
    const description =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?";
    render(
      <Modal
        heading={header}
        description={description}
        triggerMsg="Open Dialog"
        variant="Success"
        close={() => {}}
        cancel={() => {}}
        confirm={() => {}}
      />,
    );
    const trigger = screen.getByRole("button");

    await user.click(trigger);
    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});

describe("renders Error DialogContent after DialogTrigger is clicked", () => {
  it("heading and description are displayed", async () => {
    expect.assertions(2);
    const user = userEvent.setup();
    const header = "Heading";
    const description =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium sint laboriosam nemo. Atque dicta nisi natus nihil numquam vero recusandae aperiam dolorem harum! Ad, unde quibusdam. Aspernatur, reiciendis eius?";
    render(
      <Modal
        heading={header}
        description={description}
        triggerMsg="Open Dialog"
        variant="Error"
        close={() => {}}
        cancel={() => {}}
        confirm={() => {}}
      />,
    );
    const trigger = screen.getByRole("button");

    await user.click(trigger);
    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
