import { Breadcrumb } from "~/components/common/breadcrumb";
import Main from "~/components/layouts/Legal/Terms&Conditions/Main";
import SubPageHero from "~/components/layouts/Legal/Terms&Conditions/SubPageHero";

const TermsConditions = () => {
  return (
    <div className="" data-testid="terms-conditions">
      <div data-testid="subpage-hero">
        <SubPageHero
          heading="Terms and Conditions"
          description="Achieve your dreams with us today"
        />
      </div>

      <div
        className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10"
        data-testid="breadcrumb-container"
      >
        <div data-testid="breadcrumb">
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

        <div data-testid="main-content">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
