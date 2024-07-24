import { Breadcrumb } from '~/components/common/breadcrumb/breadcrumb'; 
import SubPageHero from "~/components/layouts/Legal/Terms&Conditions/SubPageHero";
import Main from "~/components/layouts/Legal/Terms&Conditions/Main";

const TermsConditions = () => {
  return (
    <div className="">
      <SubPageHero
        heading="Terms and Conditions"
        description="Achieve your dreams with us today"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10 py-20 ">
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

        <Main />
      </div>

    </div>
  );
};

export default TermsConditions;
