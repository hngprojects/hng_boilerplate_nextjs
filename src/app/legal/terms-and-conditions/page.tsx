import { Breadcrumb } from "~/components/common/Breadcrumb";
import SubPageHero from "~/components/external_static_page/SubPageHero";
import Main from "~/components/layouts/Legal/Terms&Conditions/Main";


const TermsConditions = () => {
  return (
    <div className="">
      <SubPageHero
        heading="Terms and Conditions"
        description="Achieve your dreams with us today"
      />
      <div className="mx-[222px] mb-[80px] mt-10 max-xl:mx-20 max-lg:mx-12 max-sm:mx-6">
        <Breadcrumb
          pages={[
            { name: "Home", href: "/" },
            { name: "Legal Terms", href: "/" },
            {
              name: "Terms and Conditions",
              href: "/terms-and-conditions",
              isCurrent: true,
            },
          ]}
          variant="primary"
        />
      </div>
      <Main />
    </div>
  );
};

export default TermsConditions;
