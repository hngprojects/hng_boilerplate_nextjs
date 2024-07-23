import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import "@testing-library/jest-dom";

import { templateOne } from "./template-example";
import HtmlTemplateViewer from "./TemplateViewer";

describe("htmlTemplateViewer", () => {
  it("should render with a fluid width", () => {
    expect.hasAssertions();
    render(<HtmlTemplateViewer template={templateOne} />);
    const container = screen.getByTestId("html-template-viewer");
    expect(container).toHaveClass("max-w-[1035px]");
  });

  it("should scroll its content", () => {
    expect.hasAssertions();
    render(<HtmlTemplateViewer template={templateOne} />);
    const scrollContainer = screen.getByTestId("scroll-container");
    expect(scrollContainer).toHaveClass("overflow-y-auto");
  });

  it("should accept template prop of HTML content", () => {
    expect.hasAssertions();
    const template = templateOne;
    render(<HtmlTemplateViewer template={template} />);
    const content = screen.getByTestId("template-content");
    expect(content).toContainHTML(template);
  });

  it("should accept mode prop - preview", () => {
    expect.hasAssertions();
    const template = templateOne;
    render(<HtmlTemplateViewer template={template} mode="preview" />);
    const content = screen.getByTestId("template-content");
    expect(content.innerHTML).toContain("INBOUND 22 Email");
  });

  it("should accept mode prop - edit", () => {
    expect.hasAssertions();
    const template = templateOne;
    render(<HtmlTemplateViewer template={template} mode="edit" />);
    const content = screen.getByTestId("template-content");
    expect(content.tagName).toBe("TEXTAREA");
  });

  it("should call onEdit with updated content", () => {
    expect.hasAssertions();
    const handleEdit = vi.fn();
    const template = templateOne;
    render(
      <HtmlTemplateViewer
        template={template}
        mode="edit"
        onEdit={handleEdit}
      />,
    );
    const content = screen.getByTestId("template-content");
    fireEvent.change(content, { target: { value: "New Content" } });
    expect(handleEdit).toHaveBeenCalledWith("New Content");
  });
});
