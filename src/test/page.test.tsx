import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import LanguageRegion from "../app/settings/language-settings/page";

describe("languageRegion Component", () => {
  it("renders without crashing", () => {
    expect.assertions(1);
    render(<LanguageRegion />);
    expect(screen.getByText("Language & Region")).toBeInTheDocument();
  });

  it("displays error messages when required fields are not selected", () => {
    expect.assertions(3);
    render(<LanguageRegion />);

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(screen.getByText("Please select a language")).toBeInTheDocument();
    expect(screen.getByText("Please select a region")).toBeInTheDocument();
    expect(
      screen.getByText(
        "There was a problem updating your timezone. Please try again.",
      ),
    ).toBeInTheDocument();
  });

  it("does not display error messages when required fields are selected", () => {
    expect.assertions(3);
    render(<LanguageRegion />);

    const languageSelect = screen.getByLabelText("Language");
    fireEvent.change(languageSelect, { target: { value: "English" } });

    const regionSelect = screen.getByLabelText("Region");
    fireEvent.change(regionSelect, { target: { value: "Americas" } });

    const timeZoneSelect = screen.getByLabelText("Time-Zone");
    fireEvent.change(timeZoneSelect, { target: { value: "UTC+00:00" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(
      screen.queryByText("Please select a language"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please select a region"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "There was a problem updating your timezone. Please try again.",
      ),
    ).not.toBeInTheDocument();
  });

  it("displays success message on successful save", async () => {
    expect.assertions(2);
    render(<LanguageRegion />);

    const languageSelect = screen.getByLabelText("Language");
    fireEvent.change(languageSelect, { target: { value: "English" } });

    const regionSelect = screen.getByLabelText("Region");
    fireEvent.change(regionSelect, { target: { value: "Americas" } });

    const timeZoneSelect = screen.getByLabelText("Time-Zone");
    fireEvent.change(timeZoneSelect, { target: { value: "UTC+00:00" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    await screen.findByText("Settings have been saved successfully");

    await waitFor(
      () =>
        expect(
          screen.queryByText("Settings have been saved successfully"),
        ).not.toBeInTheDocument(),
      { timeout: 4000 },
    );
  });
});
