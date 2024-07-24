"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import BreadCrumbs from "~/components/common/BreadCrumbs";
import CustomButton from "~/components/common/Button/button";
import * as alert from "~/components/ui/alert";

const breadcrumbItems = [
  { text: "Email", href: "/email" },
  { text: "New Template", href: "email/new-template" },
  { text: "Generate with HTML" },
];

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "all" });

  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [htmlContent, setHtmlContent] = useState<string | undefined>();

  const searchParameter = useSearchParams();
  const contentPreview = searchParameter
    ? searchParameter.get("htmlContent")
    : undefined;

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedHtmlContent = localStorage.getItem("htmlContent");
      setHtmlContent(storedHtmlContent || undefined);
    }
  }, []);

  const onSubmit = (data: FieldValues) => {
    const htmlContent = data.htmlContent;
    setError(undefined);
    setIsLoading(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("htmlContent", htmlContent);
        router.push("?htmlContent=true");
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-white px-4 py-8 md:px-8">
      <div>
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      {contentPreview === "true" ? (
        <div className="mt-6 sm:max-w-[90%]">
          <div className="mb-9 mt-6 flex flex-col sm:flex-row sm:items-center">
            <div className="mb-9 mt-6">
              <h1 className="mb-2 flex flex-col text-2xl font-bold sm:flex-row sm:items-center">
                Preview Your Generated Template
              </h1>
              <p className="max-w-[80%] text-neutral-dark-1">
                Review the layout and look of your email template generated from
                the pasted HTML code to ensure you have pasted the right
                template.
              </p>
            </div>
            <Link
              href={"/admin/email-template/new-template/generate-template"}
              className="mt-4 h-10 w-fit whitespace-nowrap rounded-[6px] border-none bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90 sm:mt-0"
            >
              Edit content
            </Link>
          </div>
          <div className="rounded-[19px] border border-[#CBD5E180] bg-white p-5">
            <div className="flex w-full justify-center rounded-[7px] py-12 sm:border sm:border-[#CBD5E180]">
              <iframe
                srcDoc={htmlContent}
                title="Generated Email Template"
                className="sm:w-fi h-[500px] w-full rounded-[7px] sm:mx-5 sm:border sm:border-[#CBD5E180]"
              ></iframe>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-9 mt-6">
            <h1 className="mb-2 text-2xl font-bold text-default">
              Generate Template with HTML
            </h1>
            <p className="text-default/60">
              Paste your HTML code below to generate your email template.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-3/5">
            <div className="w-full">
              <label
                htmlFor="html-content"
                className="mb-[6px] text-sm text-[#0F172A]"
              >
                HTML Content
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="w-full">
                  <textarea
                    {...register("htmlContent", {
                      required: "This field is required",
                      pattern: {
                        value: /<\/?[a-z][\S\s]*>/i,
                        message: "Only valid HTML content is allowed",
                      },
                    })}
                    id="html-content"
                    className={`h-9 w-full rounded-[6px] px-3 py-2 md:min-w-[540] ${
                      errors.htmlContent
                        ? "border-red-500 text-red-500 focus:outline-none"
                        : "border-[#CBD5E1] text-slate-400 focus:outline-[#CBD5E1]"
                    } overflow-hidden border outline-none focus:outline-[1.5px] focus:outline-offset-0`}
                    placeholder="Enter your link here"
                  />
                  {errors.htmlContent && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.htmlContent?.message as string}
                    </p>
                  )}
                </div>
                <CustomButton
                  variant="primary"
                  isLeftIconVisible={false}
                  isLoading={isLoading}
                  isDisabled={false}
                >
                  {isLoading ? "" : "Generate"}
                </CustomButton>
              </div>
              <div className="mt-6 text-sm">
                <alert.Alert className="border-[#F9731666] bg-[#F973161A]">
                  <alert.AlertTitle className="mb-3 font-semibold text-primary">
                    Tips on Acceptable HTML Content
                  </alert.AlertTitle>
                  <alert.AlertDescription>
                    <ul className="ml-4 flex list-disc flex-col gap-3">
                      <li className="text-default opacity-60">
                        Ensure the HTML contains the complete email template.
                      </li>
                      <li className="text-default opacity-60">
                        Use static HTML that does not include dynamic content or
                        scripts.
                      </li>
                      <li className="text-default opacity-60">
                        Ensure the HTML content is well-structured and valid.
                      </li>
                    </ul>
                  </alert.AlertDescription>
                </alert.Alert>
              </div>
            </div>
          </form>
        </div>
      )}
      {error && (
        <div className="mt-6 text-red-500">
          <p>{error}</p>
        </div>
      )}
    </section>
  );
}
