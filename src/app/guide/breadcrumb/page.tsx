import { Breadcrumb } from "~/components/common/Breadcrumb";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Job Listing",
    href: "/job-listing",
  },
  {
    name: "Job Details",
    href: "/job-listing/job-details",
    isCurrent: true,
  },
];

export default function BreadcrumbPage() {
  return (
    <div className="min-h-screen space-y-8 bg-zinc-50 px-8 py-16">
      <div>
        <Breadcrumb />
      </div>
      <div>
        <Breadcrumb maxPages={2} variant="primary" />
      </div>
      <div>
        <Breadcrumb pages={pages} variant="default" />
      </div>
      <div>
        <Breadcrumb
          pages={[
            {
              name: "Email",
              href: "/job-details/edit",
            },
            {
              name: "New Template",
              href: "/job-details/edit",
            },
            {
              name: "Edit in-built Template",
              href: "/job-details/edit",
              isCurrent: true,
            },
          ]}
        />
      </div>
      <div>
        <Breadcrumb
          pages={[
            {
              name: "Home",
              href: "/",
            },
            {
              name: "Legal Terms",
              href: "/legal-terms",
            },
            {
              name: "Privacy Policy",
              href: "/legal-terms/privacy",
              isCurrent: true,
            },
          ]}
          variant="primary"
        />
      </div>
    </div>
  );
}
