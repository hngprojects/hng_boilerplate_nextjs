import Heading from "~/components/layouts/heading";
import Main from "~/components/layouts/Legal/Terms&Conditions/Main";

const TermsConditions = () => {
  return (
    <div
      className="mx-auto max-w-7xl px-5 py-5 md:px-10 lg:px-10 xl:px-10"
      data-testid="terms-conditions"
    >
      <div data-testid="subpage-hero">
        <Heading
          tag="Terms and Conditions"
          title="View {{User's}} Guidelines"
          content="Achieve your dreams with us today"
        />
      </div>

      <Main />
    </div>
  );
};

export default TermsConditions;
