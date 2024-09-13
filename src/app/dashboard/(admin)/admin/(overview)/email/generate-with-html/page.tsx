import PageHeader from "../_components/page-header";
import GenerateField from "./_components/generate-field/generate-field";
import TipsCard from "./_components/tips";

const page = () => {
  return (
    <div>
      <PageHeader
        title="Generate Template with HTML"
        description="Paste your HTML code below to generate your email template."
      />
      <GenerateField />
      <div className="w-full max-w-[666px]">
        <TipsCard />
      </div>
    </div>
  );
};

export default page;
