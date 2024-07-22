import FaqAccordion from "~/components/common/FaqAccordion";
import { faqData } from "~/components/common/FaqAccordion/data/faq.mock";

const page = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <FaqAccordion faqs={faqData} />
    </div>
  );
};

export default page;
