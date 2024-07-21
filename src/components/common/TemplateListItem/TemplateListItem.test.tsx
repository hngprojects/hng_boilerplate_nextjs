import { fireEvent, render, screen } from "~/test/utils";

import "@testing-library/jest-dom";

import { describe, expect, it, vi } from "vitest";

import TemplateListItem from "./TemplateListItem";

describe("templateListItem Component", () => {
  const template = {
    id: 1,
    name: "Sample Template",
    image: "/sample-image.png",
  };

  const onPreviewMock = vi.fn();

  it("should render the template name and image", () => {
    expect.hasAssertions();
    render(<TemplateListItem template={template} onPreview={onPreviewMock} />);

    expect(screen.getByText("Sample Template")).toBeInTheDocument();
    expect(screen.getByAltText("Sample Template")).toBeInTheDocument();
  });

  it('should call onPreview with the correct id when "Preview" is clicked', () => {
    expect.hasAssertions();
    render(<TemplateListItem template={template} onPreview={onPreviewMock} />);

    const previewButton = screen.getByText("Preview");
    fireEvent.click(previewButton);

    expect(onPreviewMock).toHaveBeenCalledWith(template.id);
  });

  it("should apply activePreview class when activePreview is true", () => {
    expect.hasAssertions();
    render(
      <TemplateListItem
        template={template}
        onPreview={onPreviewMock}
        activePreview
      />,
    );

    const previewButton = screen.getByText("Preview");
    expect(previewButton).toHaveClass("text-primary");
  });

  it("should not apply activePreview class when activePreview is false", () => {
    expect.hasAssertions();
    render(
      <TemplateListItem
        template={template}
        onPreview={onPreviewMock}
        activePreview={false}
      />,
    );

    const previewButton = screen.getByText("Preview");
    expect(previewButton).not.toHaveClass("text-primary");
  });
});
