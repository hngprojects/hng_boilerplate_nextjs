import { render, screen } from "@testing-library/react";
import { CodeIcon, FileIcon, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

import PageHeader from "../page-header";
import NewTemplate, { Options } from "./NewTemplate";

interface Option {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  link: string;
}

const options: Option[] = [
  {
    title: "Generate with HTML",
    description:
      "Create an email template by pasting your custom-coded template",
    icon: CodeIcon,
    link: "email/generate-with-html",
  },
  {
    title: "Edit in-built Template",
    description:
      "Create an email template by choosing from our custom template library",
    icon: FileIcon,
    link: "email/edit-in-buit-templates",
  },
];

describe("newTemplate component", () => {
  it("renders admin page cards correctly", () => {
    expect.assertions(6);
    for (const item of options) {
      render(<Options data={item} />);
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
      expect(screen.getAllByRole("option-icon")).toBeTruthy();
    }
  });

  it("renders page header", () => {
    expect.assertions(2);
    render(
      <PageHeader
        title="Create a New Template"
        description="Choose an option below to begin crafting your email design."
      />,
    );
    expect.assertions(2);
    expect(screen.getByText("Create a New Template")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Choose an option below to begin crafting your email design.",
      ),
    ).toBeInTheDocument();
  });

  it("renders card with links", () => {
    expect.assertions(2);
    render(<NewTemplate />);
    expect(screen.getAllByRole("link")[0]).toHaveAttribute(
      "href",
      "email/generate-with-html",
    );
    expect(screen.getAllByRole("link")[1]).toHaveAttribute(
      "href",
      "email/edit-in-buit-templates",
    );
  });
});
