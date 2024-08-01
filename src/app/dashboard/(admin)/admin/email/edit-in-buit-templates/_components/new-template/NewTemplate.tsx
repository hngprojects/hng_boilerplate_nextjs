"use client";

import axios from "axios";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { FC, ForwardRefExoticComponent, useEffect, useState } from "react";

import { Breadcrumb } from "~/components/common/breadcrumb";
import PageHeader from "../../../_components/page-header";
import Pagination from "../../../_components/pagination";
import TemplateCard from "../../../_components/template-card/TemplateCard";
import PreviewCard from "../preview-card";

interface IOption {
  data: {
    title: string;
    description: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    link: string;
  };
}
interface EmailTemplate {
  id: string;
  title: string;
  template: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

export const Options: FC<IOption> = ({ data }) => {
  return (
    <Link
      data-testid="email-home-card"
      href={data.link}
      className="flex w-full max-w-[310px] cursor-pointer items-center justify-between gap-5 rounded-[8px] border-[1px] border-[#CBD5E1B2] px-5 py-4 transition-all duration-300 hover:border-primary"
    >
      <div className="flex w-6 items-center justify-center">
        <data.icon
          className="h-6 w-6 text-neutral-dark-2"
          size={24}
          role="option-icon"
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold text-neutral-dark-2">
          {data.title}
        </h3>
        <p className="mb-2 text-sm text-neutral-dark-2">{data.description}</p>
      </div>
    </Link>
  );
};
const NewTemplate = () => {
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [togglePreview, setTogglePreview] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const templateId = "f47ac10b-58cc-4372-a567-0e02b2c3d479";

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get(
          "https://virtserver.swaggerhub.com/WILSONABDIEL86/email-templates/1.0.0/email-templates",
          {
            headers: {
              Authorization: `Bearer YOUR_JWT_TOKEN`,
            },
            params: {
              page: currentPage,
              limit: 10,
            },
          },
        );
        setTemplates(response.data.templates);
        setTotalPages(Math.ceil(response.data.total / 10));
      } catch {
        setError("Failed to fetch email templates.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTemplates();
  }, [currentPage]);

  return (
    <div>
      <section className="mb-8">
        <PageHeader
          title="Choose In-built Template"
          description="Explore our library of custom templates."
        />
        <Breadcrumb />
      </section>
      <div
        className={`${
          togglePreview
            ? "grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-[1fr_447px]"
            : "block"
        } `}
      >
        <section className="w-full justify-items-center overflow-hidden rounded-[19px] border-[1px] border-border">
          <div className="grid min-h-[700px] grid-rows-[1fr_auto]">
            <div>
              {isLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                templates.map((template) => (
                  <TemplateCard
                    templateId={templateId}
                    key={template.id}
                    togglePreview={togglePreview}
                    setTogglePreview={setTogglePreview}
                  />
                ))
              )}
            </div>
            <Pagination
              isloading={isLoading}
              totalPage={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </section>
        {togglePreview && <PreviewCard />}
      </div>
    </div>
  );
};

export default NewTemplate;
