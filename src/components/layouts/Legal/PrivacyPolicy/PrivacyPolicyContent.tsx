import Link from "next/link";

import {
  LegalTermContentItem,
  LegalTermData,
} from "~/components/layouts/Legal/PrivacyPolicy/constants/privacyPolicyData";
import { cn } from "~/lib/utils";

type PrivacyPolicyContentProperties = {
  className?: string;
  content: LegalTermData;
};

export default function PrivacyPolicyContent({
  className,
  content,
}: PrivacyPolicyContentProperties) {
  const renderContent = (content: LegalTermContentItem) => {
    return content.list ? (
      <div className="space-y-6">
        <p className="text-base font-normal leading-[19.36px] text-neutral-dark-1">
          {content.text}
        </p>

        <ul className="ml-6 list-disc space-y-6">
          {content.list.map((item, index) => (
            <li
              key={index}
              className="text-base font-normal leading-[19.36px] text-neutral-dark-1"
            >
              <strong>{item.title}</strong> {item.body}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p className="text-base font-normal leading-[19.36px] text-neutral-dark-1">
        {content.text}
      </p>
    );
  };

  return (
    <div className={cn("space-y-6 md:space-y-10", className)}>
      {content.map((section) => (
        <div key={section.id} className="space-y-[10px]">
          <h4
            className="text-2xl font-bold leading-[29.05px] text-neutral-dark-1 md:text-[28px] md:leading-[33.89px]"
            id={section.id}
          >
            {section.title}
          </h4>
          {renderContent(section.description)}
        </div>
      ))}
      <p className="text-base font-normal leading-[19.36px] text-neutral-dark-1">
        For more information about our terms and conditions, please visit
        our&nbsp;
        <Link href="/" className="text-primary">
          Terms and Conditions page
        </Link>
        .
      </p>
    </div>
  );
}
