import Main from "~/components/layouts/Legal/Terms&Conditions/Main";
import SubPageHero from "~/components/layouts/Legal/Terms&Conditions/SubPageHero";

const TermsConditions = () => {
  return (
    <div className="" data-testid="terms-conditions">
      <div data-testid="subpage-hero">
        <SubPageHero
          subheading="Terms and Conditions"
          heading="View User's Guidelines"
          wordToStyleIndex={1}
          description="Achieve your dreams with us today"
        />
      </div>

      <div
        className="mx-auto max-w-7xl px-5 md:px-10 md:py-[52px] lg:px-10 xl:px-10"
        data-testid="breadcrumb-container"
      >
        <div data-testid="main-content">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
