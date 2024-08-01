import { CodeIcon, FileIcon, LucideProps } from "lucide-react";
import Link from "next/link";
import { FC, ForwardRefExoticComponent } from "react";

import PageHeader from "../page-header";

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

const options = [
  {
    title: "Generate with HTML",
    description:
      "Create an email template by pasting your custom-coded template",
    icon: CodeIcon,
    link: "email/generate-with-html",
  },
  {
    title: "Edit in-built Template",
    description:
      "Create an email template by choosing from our custom template library",
    icon: FileIcon,
    link: "email/edit-in-buit-templates",
  },
];

export const Options: FC<IOption> = ({ data }) => {
  return (
    <Link
      data-testid="email-home-card"
      href={data.link}
      className="flex w-full cursor-pointer items-center gap-5 rounded-[8px] border-[1px] border-[#CBD5E1B2] px-5 py-4 transition-all duration-300 hover:border-primary sm:max-w-[310px]"
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
    <div className="max-w-[670px]">
      <PageHeader
        title="Create a New Template"
        description="Choose an option below to begin crafting your email design."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {options.map((option, index) => {
          return <Options key={index} data={option} />;
        })}
      </div>
    </div>
  );
};

export default NewTemplate;
