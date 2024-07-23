import { CodeIcon, FileIcon } from "lucide-react";
import Link from "next/link";

import PageHeader from "../page-header";

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
    link: "generate-with-html",
  },
];
const NewTemplate = () => {
  return (
    <div>
      <PageHeader
        title="Create a New Template"
        description="Choose an option below to begin crafting your email design."
      />
      <div className="grid grid-cols-2 gap-6">
        {options.map((option, index) => {
          return (
            <Link
              href={option.link}
              key={index}
              className="flex w-full max-w-[310px] cursor-pointer items-center justify-between gap-5 rounded-[8px] border-[1px] border-[#CBD5E1B2] px-5 py-4 transition-all duration-300 hover:border-primary"
            >
              <div className="flex w-6 items-center justify-center">
                <option.icon
                  className="h-6 w-6 text-neutral-dark-2"
                  size={24}
                />
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-neutral-dark-2">
                  {option.title}
                </h3>
                <p className="mb-2 text-sm text-neutral-dark-2">
                  {option.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewTemplate;
