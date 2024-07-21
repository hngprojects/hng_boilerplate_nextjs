import CustomButton from "~/components/common/Button/button";
import PricePlanBenefit from "./PricePlanBenefit";

export default function PricePlanCard() {
  const lists = [
    {
      benefitTitle: "2 Projects",
      isAddedBenefit: true,
    },
    {
      benefitTitle: "Up to 100 subscribers",
      isAddedBenefit: true,
    },
    {
      benefitTitle: "Basic analytics",
      isAddedBenefit: true,
    },
    {
      benefitTitle: "24-hour support response time",
      isAddedBenefit: true,
    },
    {
      benefitTitle: "Marketing advisor",
      isAddedBenefit: false,
    },
    {
      benefitTitle: "Custom integration",
      isAddedBenefit: false,
    },
  ];
  return (
    <div className="flex w-full max-w-[24rem] flex-col gap-[51px] rounded-xl border border-[#CBD5E1] px-[32px] py-[31px] text-[#0A0A0A]">
      <section className="flex flex-col gap-4">
        <h1 className="text-[25px] font-bold">Basic</h1>
        <h1 className="text-[39px] font-bold">
          $800<span className="text-xl font-normal"> /month</span>
        </h1>
        <p className="text-[13px]">
          The essensitals to provide your best work for clients.
        </p>
      </section>

      <section className="flex flex-col gap-5">
        {lists.map((list, index) => (
          <PricePlanBenefit key={index} list={list} />
        ))}
      </section>
      <CustomButton variant="primary" size="lg" className="w-full">
        Continue
      </CustomButton>
    </div>
  );
}
