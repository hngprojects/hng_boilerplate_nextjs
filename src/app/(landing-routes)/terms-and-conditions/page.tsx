import { Breadcrumb } from '~/components/common/breadcrumb/breadcrumb';
import SubPageHero from "~/components/layouts/Legal/Terms&Conditions/SubPageHero";
import Main from "~/components/layouts/Legal/Terms&Conditions/Main";

const TermsConditions = () => {
  return (
    <div className="" data-testid="terms-conditions">
      <SubPageHero
        heading="Terms and Conditions"
        description="Achieve your dreams with us today"
        data-testid="subpage-hero"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10 py-20" data-testid="breadcrumb-container">
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
          data-testid="breadcrumb"
        />
        <Main data-testid="main-content" />
      </div>
    </div>
  );
};

export default TermsConditions;
