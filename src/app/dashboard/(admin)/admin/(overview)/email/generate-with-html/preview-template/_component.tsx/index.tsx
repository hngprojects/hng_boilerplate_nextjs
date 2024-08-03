"use client";

import { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";

import { Button } from "~/components/common/common-button";
import { useToast } from "~/components/ui/use-toast";
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

  // const [template, setTemplate] = useState<string>("");
  const [template, setTemplate] = useState<string>(welcomeEmailString);
  const [mode, setMode] = useState<"preview" | "edit">("preview");
  const { toast } = useToast();
  useEffect(() => {
    const searchParameters = new URLSearchParams(window.location.search);
    const content = searchParameters.get("content");
    if (content) {
      setTemplate(decodeURIComponent(content));
    }
  }, []);

  const toggleMode = () => {
    setMode((previousMode) =>
      previousMode === "preview" ? "edit" : "preview",
    );
  };

  const handleEdit = (newContent: string) => {
    setTemplate(newContent);
  };

  const handleSaveTemplate = async () => {
    const baseUrl = process.env.API_URL;
    try {
      const response = await fetch(`${baseUrl}/api/v1/EmailTemplate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ template }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Template has been created successfully",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed create template",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `Error creating template: ${error}`,
        variant: "destructive",
      });
    }
  };

  return (
    <main>
      <section className="flex items-center justify-between">
        <PageHeader
          title="Preview Your Generated Template"
          description="Review the layout and look of your email template generated from the
            pasted HTML code to ensure you have pasted the right template."
        />
        <div className="flex gap-2">
          <Button
            variant={"primary"}
            onClick={handleSaveTemplate}
            className="h-[40px] px-[1.5rem]"
          >
            Save Template
          </Button>
          <Button className="h-[40px] px-[1.5rem]" onClick={toggleMode}>
            {mode === "preview" ? "Edit Content" : "Preview Content"}
          </Button>
        </div>
      </section>
      <section>
        <TemplateViewer template={template} mode={mode} onEdit={handleEdit} />
      </section>
    </main>
  );
};

export default HtmlTemplateViewer;
