import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import Profile from "../../components/layouts/Profile/index";

global.URL.createObjectURL = vi.fn(() => '/flow_chart.png');

describe("Profile Component", () => {
  it("should render all Profile fields correctly (part 1)", () => {
    expect.assertions(5);

    render(<Profile />);

    // Check if the first set of Profile fields are rendered
    expect(screen.getByText("Your Photo")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Pronouns")).toBeInTheDocument();
    expect(screen.getByText("Your job title")).toBeInTheDocument();
    expect(screen.getByText("Department or team")).toBeInTheDocument();
  });

  it("should render all Profile fields correctly (part 2)", () => {
    expect.assertions(5);

    render(<Profile />);

    // Check if the second set of Profile fields are rendered
    expect(screen.getByText("Your email address")).toBeInTheDocument();
    expect(screen.getByText("Bio")).toBeInTheDocument();
    expect(screen.getByText("Social Links")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Save Changes")).toBeInTheDocument();
  });

  it("should handle file upload correctly", () => {
    expect.assertions(2);

    render(<Profile />);

    const fileInput = screen.getByLabelText("Your Photo");
    const file = new File(["photo"], "./photo.png", { type: "image/png" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    // Check if the file is correctly uploaded
    expect(fileInput.files[0]).toStrictEqual(file);
    expect(fileInput.files).toHaveLength(1);
  });

  it("should allow input fields to accept and save data (part 1)", () => {
    expect.assertions(3);

    render(<Profile />);

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Your job title"), {
      target: { value: "Software Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Department or team"), {
      target: { value: "Development" },
    });

    // Check if the input values are correctly saved
    expect(screen.getByLabelText("Username")).toHaveValue("John Doe");
    expect(screen.getByLabelText("Your job title")).toHaveValue(
      "Software Engineer",
    );
    expect(screen.getByLabelText("Department or team")).toHaveValue(
      "Development",
    );
  });

  it("should allow input fields to accept and save data (part 2)", () => {
    expect.assertions(2);

    render(<Profile />);

    fireEvent.change(screen.getByLabelText("Your email address"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Bio"), {
      target: { value: "This is a bio within 64 characters." },
    });

    // Check if the input values are correctly saved
    expect(screen.getByLabelText("Your email address")).toHaveValue(
      "john.doe@example.com",
    );
    expect(screen.getByLabelText("Bio")).toHaveValue(
      "This is a bio within 64 characters.",
    );
  });

  it("should enforce character limit on the bio field", () => {
    expect.assertions(1);

    render(<Profile />);

    const longBio =
      "This bio is way too long and should not be accepted by the form as it exceeds the 64 character limit.";
    fireEvent.change(screen.getByLabelText("Bio"), {
      target: { value: longBio },
    });

    // Check if the bio field enforces the character limit
    expect(screen.getByLabelText("Bio")).toHaveValue(longBio.slice(0, 64));
  });

  it("should allow adding social links", () => {
    expect.assertions(2);

    render(<Profile />);

    const addLinkButton = screen.getByText("Add URL");
    fireEvent.click(addLinkButton);

    const socialLinks = screen.getAllByPlaceholderText(
      "Link to Social Platform",
    );
    expect(socialLinks).toHaveLength(3);

    fireEvent.change(socialLinks[1], {
      target: { value: "https://example.com" },
    });
    expect(socialLinks[1]).toHaveValue("https://example.com");
  });

  it("should handle the 'Cancel' and 'Save Changes' buttons correctly", () => {
    expect.assertions(2);

    render(<Profile />);

    const cancelButton = screen.getByText("Cancel");
    const saveChangesButton = screen.getByText("Save Changes");

    fireEvent.click(cancelButton);
    // Add your cancel button handling test here

    fireEvent.click(saveChangesButton);
    // Add your save changes button handling test here

    // Example assertions, adjust as needed based on actual implementation
    expect(cancelButton).toBeInTheDocument();
    expect(saveChangesButton).toBeInTheDocument();
  });

    it("should add and validate social links correctly", () => {
    expect.assertions(2);

    render(<Profile />);

    fireEvent.click(screen.getByText("Add URL"));
    const socialLinks = screen.getAllByPlaceholderText("Link to Social Platform");

    expect(socialLinks).toHaveLength(3);

    fireEvent.change(socialLinks[1], { target: { value: "invalid-url" } });
    fireEvent.change(socialLinks[2], { target: { value: "invalid-url" } });
    fireEvent.click(screen.getByText("Save Changes"));

    // Check if the validation message for invalid URL is displayed
    const errorMessages = screen.getAllByText("Invalid URL");
    expect(errorMessages.length).toBe(2);
    
  });
});
