import TableOfContent from "~/components/layouts/LegalTerms/TableOfContent";
import PrivacyPolicyContent from "~/components/layouts/PrivacyPolicy/PrivacyPolicyContent";
import privacyPolicyData, {
  getTableOfContents,
} from "../../components/layouts/PrivacyPolicy/constants/privacyPolicyData";

export default function PrivacyPolicy() {
  const tableOfContents = getTableOfContents(privacyPolicyData);

  return (
    <main className="min-h-svh">
      {/* hero-sections */}
      <p>sub page hero section</p>
      <div className="mx-auto my-10 w-[min(100%-32px_,_996px)] md:my-16">
        {/* breadcrumbs */}
        <p>breadcrumbs</p>
        <section className="mt-14 grid grid-cols-1 gap-20 md:mt-[86px] md:grid-cols-[1fr,306px] md:gap-[73px]">
          <TableOfContent
            listOfContent={tableOfContents}
            className="top-10 max-w-[306px] md:sticky md:col-start-3 md:h-svh"
          />
          <PrivacyPolicyContent
            content={privacyPolicyData}
            className="max-w-[617px] md:col-span-2 md:col-start-1 md:row-start-1"
          />
        </section>
      </div>
    </main>
  );
}
