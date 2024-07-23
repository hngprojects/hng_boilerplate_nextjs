"use client";

import { useState } from "react";

import { Button } from "~/components/common/Button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
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
    <main className="px-[10px]">
      <section className="max-w-[988px] 2xl:mx-auto">
        <section className="my-[1rem]">
          <Breadcrumb>
            <BreadcrumbList className="text-[12px]">
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-neutral-dark-1 hover:text-primary"
                  href="#"
                >
                  Email
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-neutral-dark-1 hover:text-primary"
                  href="#"
                >
                  New Template
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-[#6A6A6A50] hover:text-primary"
                  href="#"
                >
                  Generate with HTML
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
        <section className="my-[2rem] flex flex-col-reverse justify-between gap-7 xl:flex-row xl:items-center">
          <div className="max-w-[777px]">
            <h4 className="text-2xl font-[700] text-neutral-dark-2">
              Preview Your Generated Template
            </h4>
            <p className="mt-[.5rem] leading-[19px] text-neutral-dark-2 opacity-60">
              Review the layout and look of your email template generated from
              the pasted HTML code to ensure you have pasted the right template.
            </p>
          </div>
          <div>
            <Button
              className="h-[40px] px-[1.5rem] hover:bg-primary"
              onClick={toggleMode}
            >
              {mode === "preview" ? "Edit Content" : "Preview Content"}
            </Button>
          </div>
        </section>
      </section>
      <section className="mt-[2rem]">
        <TemplateViewer template={template} mode={mode} onEdit={handleEdit} />
      </section>
    </main>
  );
};

export default HtmlTemplateViewer;
