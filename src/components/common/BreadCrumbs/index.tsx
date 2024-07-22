import React from "react";

import * as breadcrumb from "~/components/ui/breadcrumb";

interface BreadcrumbItem {
  text: string;
  href?: string;
}

interface BreadCrumbsProperties {
  items: BreadcrumbItem[];
}

const BreadCrumbs: React.FC<BreadCrumbsProperties> = ({ items }) => {
  return (
    <breadcrumb.Breadcrumb className="text-sm text-[#525252]">
      <breadcrumb.BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <breadcrumb.BreadcrumbItem>
              {item.href ? (
                <breadcrumb.BreadcrumbLink href={item.href}>
                  {item.text}
                </breadcrumb.BreadcrumbLink>
              ) : (
                <breadcrumb.BreadcrumbPage className="text-[#6A6A6A80]">
                  {item.text}
                </breadcrumb.BreadcrumbPage>
              )}
            </breadcrumb.BreadcrumbItem>
            {index < items.length - 1 && <breadcrumb.BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </breadcrumb.BreadcrumbList>
    </breadcrumb.Breadcrumb>
  );
};

export default BreadCrumbs;
