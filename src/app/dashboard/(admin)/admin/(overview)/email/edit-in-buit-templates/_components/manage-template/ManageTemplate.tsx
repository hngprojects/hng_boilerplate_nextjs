"use client";

import { LucideProps } from "lucide-react";
import Link from "next/link";
import { FC, ForwardRefExoticComponent, useState } from "react";

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
const ManageTemplate = () => {
  const isloading: boolean = false;
  const data = 100;
  const [togglePreview, setTogglePreview] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPage = Math.ceil(data / 10);
  return (
    <div>
      <section className="mb-8">
        <PageHeader
          title="Manage Your Template"
          description="Explore your library of sent templates."
        />
        <Breadcrumb />
      </section>
      <div
        className={`${togglePreview ? "grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-[1fr_447px]" : "block"} `}
      >
        <section className="w-full justify-items-center overflow-hidden rounded-[19px] border-[1px] border-border">
          <div className="grid min-h-[700px] grid-rows-[1fr_auto]">
            <div>
              <TemplateCard
                togglePreview={togglePreview}
                setTogglePreview={setTogglePreview}
              />
            </div>
            <Pagination
              isloading={isloading}
              totalPage={totalPage}
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

export default ManageTemplate;
