"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import BreadCrumbs from "~/components/common/BreadCrumbs";
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

  // const [htmlContent, setHtmlContent] = useState<string | undefined>();
  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchParameter = useSearchParams();
  const contentPreview = searchParameter.get("htmlContent");

  const router = useRouter();
  const htmlContent = localStorage.getItem("htmlContent") || undefined;

  const onSubmit = (data: FieldValues) => {
    const htmlContent = data.htmlContent;
    setError(undefined);
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("htmlContent", htmlContent);
      router.push("?htmlContent=true");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="bg-white px-4 md:px-8 py-8 min-h-screen">
      <div>
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      {contentPreview === "true" ? (
        <div className="mt-6 sm:max-w-[90%]">
          <div className="flex flex-col sm:flex-row sm:items-center mt-6 mb-9">
            <div>
              <h1 className="text-2xl text-[#0A0A0A] mb-2 font-bold">
                Preview Your Generated Template
              </h1>
              <p className="text-[#0A0A0A]/60">
                Review the layout and look of your email template generated from
                the pasted HTML code to ensure you have pasted the right
                template.
              </p>
            </div>
            <Link
              href={"/email/new-template/generate-template"}
              className="bg-slate-900 w-fit h-10 mt-4 sm:mt-0 border-none text-white text-sm whitespace-nowrap font-medium rounded-[6px] py-2 px-4 hover:opacity-90"
            >
              Edit content
            </Link>
          </div>
          <div className="mt-4 p-5 border border-[#CBD5E180] rounded-[19px] bg-white">
            <div className="flex justify-center border border-[#CBD5E180] rounded-[10px] py-4 sm:py-12">
              <iframe
                srcDoc={htmlContent}
                title="Generated Email Template"
                className="w-full sm:w-[382px] h-[500px] sm:border sm:border-[#CBD5E180] rounded-[7px]"
              ></iframe>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="mt-6 mb-9">
            <h1 className="text-2xl text-[#0A0A0A] mb-2 font-bold">
              Generate Template with HTML
            </h1>
            <p className="text-[#0A0A0A]/60">
              Paste your HTML code below to generate your email template.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-3/5">
            <div className="w-full">
              <label
                htmlFor="html-content"
                className="text-sm text-[#0F172A] mb-[6px]"
              >
                HTML Content
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="w-full">
                  <textarea
                    {...register("htmlContent", {
                      required: "This field is required",
                    })}
                    id="html-content"
                    className={`w-full md:min-w-[540px] h-10 py-2 px-3 rounded-[6px] ${
                      errors.htmlContent
                        ? "text-red-500 border-red-500 focus:outline-none"
                        : "text-slate-400 border-[#CBD5E1] focus:outline-[#CBD5E1]"
                    } border outline-none focus:outline-[1.5px] focus:outline-offset-0`}
                    placeholder="Paste your HTML code here"
                  />
                  {errors.htmlContent && (
                    <p className="text-xs text-red-500 mt-1 mb-">
                      {errors.htmlContent?.message as string}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#F97316] w-fit h-10 border-none text-white text-sm font-medium rounded-[6px] py-2 px-4 hover:opacity-90"
                >
                  {isLoading ? "Generating..." : "Generate"}
                </button>
              </div>
              <div className="mt-6 text-sm">
                <alert.Alert className="bg-[#F973161A] border-[#F9731666]">
                  <alert.AlertTitle className="text-[#F97113] font-semibold mb-3">
                    Tips on Acceptable HTML Content
                  </alert.AlertTitle>
                  <alert.AlertDescription>
                    <ul className="flex flex-col gap-3 list-disc ml-4">
                      <li className="text-[#0A0A0A] opacity-60">
                        Ensure the HTML contains the complete email template.
                      </li>
                      <li className="text-[#0A0A0A] opacity-60">
                        Use static HTML that does not include dynamic content or
                        scripts.
                      </li>
                      <li className="text-[#0A0A0A] opacity-60">
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
