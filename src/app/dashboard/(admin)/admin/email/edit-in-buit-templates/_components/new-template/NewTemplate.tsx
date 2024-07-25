import { LucideProps } from "lucide-react";
import Link from "next/link";
import { FC, ForwardRefExoticComponent } from "react";

import { Breadcrumb } from "~/components/common/breadcrumb/breadcrumb";
import PageHeader from "../../../_components/page-header";
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
const NewTemplate = () => {
  return (
    <div>
      <section className="mb-8">
        <PageHeader
          title="Create a New Template"
          description="Choose an option below to begin crafting your email design."
        />
        <Breadcrumb />
      </section>
      <div className="grid grid-cols-[1fr_447px]">
        <section className="min-h-[700px] overflow-hidden rounded-[19px] border-[1px] border-border">
          <TemplateCard />
        </section>
        <PreviewCard />
      </div>
    </div>
  );
};

export default NewTemplate;
