"use client";

import { useState } from "react";

import { Breadcrumb } from "~/components/common/breadcrumb";
import { Button } from "~/components/common/button";
import PageHeader from "../../../_components/page-header";
import { templateOne } from "./template-example";
import TemplateViewer from "./TemplateViewer";

const HtmlTemplateViewer = () => {
  const [template, setTemplate] = useState<string>(templateOne);

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
      <section className="my-[1rem]">
        <Breadcrumb />
      </section>
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
