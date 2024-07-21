"use client";

import Image from "next/image";

interface TemplateListItemProperties {
  template: {
    id: number;
    name: string;
    image: string;
  };
  onPreview: (id: number) => void;
  activePreview?: boolean;
}

const TemplateListItem = ({
  template,
  onPreview,
  activePreview,
}: TemplateListItemProperties) => (
  <div className="flex w-full items-center justify-between border-b p-5 pr-10">
    <div className="flex items-center gap-[21px]">
      <div className="h-[102px] w-[102px] bg-gray-400">
        <Image
          src={template.image || "/images/emailConfirmation.png"}
          alt={template.name}
          width={102}
          height={102}
        />
      </div>
      <p className="text-[#525252]">{template.name}</p>
    </div>
    <div className="flex gap-8">
      <p
        className={`cursor-pointer ${activePreview ? "text-primary" : ""}`}
        onClick={() => onPreview(template.id)}
      >
        Preview
      </p>
      <p>Edit</p>
    </div>
  </div>
);

export default TemplateListItem;
