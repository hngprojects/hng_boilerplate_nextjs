"use client";

import { useState } from "react";
import { renderToString } from "react-dom/server";

import { Button } from "~/components/common/common-button";
import AccountActivationSuccessful from "~/email/templates/account-activation-successful/image";
import PageHeader from "../../../_components/page-header";
import TemplateViewer from "./TemplateViewer";

const HtmlTemplateViewer = () => {
  // Define the props for the component
  const previewProperties = {
    title: "Your Account is Now Active!",
    username: "John Doe",
    image: "https://imgur.com/3Yymb22.png",
    link: "/",
    description:
      "Congratulations! Your account with Boilerplate is now active and ready to use.",
    descriptionOne:
      "We're thrilled to have you as part of our community and look forward to helping you make the most out of your experience with us.",
    descriptionTwo:
      "You can now log in and start exploring all the features and benefits we have to offer. ",
  };

  // Convert the React component to a string with the props
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const welcomeEmailString = renderToString(
    <AccountActivationSuccessful {...previewProperties} />,
  );

  const [template, setTemplate] = useState<string>(welcomeEmailString);
  const [mode, setMode] = useState<"preview" | "edit">("preview");

  const toggleMode = () => {
    setMode((previousMode) =>
      previousMode === "preview" ? "edit" : "preview",
    );
  };

  const handleEdit = (newContent: string) => {
    setTemplate(newContent);
  };

  return (
    <main>
      <section className="flex items-center justify-between">
        <PageHeader
          title=" Preview Your Generated Template"
          description="Review the layout and look of your email template generated from the
            pasted HTML code to ensure you have pasted the right template."
        />
        <Button className="h-[40px] px-[1.5rem]" onClick={toggleMode}>
          {mode === "preview" ? "Edit Content" : "Preview Content"}
        </Button>
      </section>
      <section>
        <TemplateViewer template={template} mode={mode} onEdit={handleEdit} />
      </section>
    </main>
  );
};

export default HtmlTemplateViewer;
