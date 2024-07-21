import CustomButton from "~/components/common/Button/button";
import PricePlanBenefit from "./PricePlanBenefit";

interface BenefitPlan {
  type: string;
  price: string;
  isActive: boolean;
  lists: List[];
}

interface List {
  benefitTitle: string;
  isAddedBenefit: boolean;
}

export default function PricePlanCard(properties: BenefitPlan) {
  const {
    type,
    price,
    isActive,
    lists,
  }: { type: string; price: string; isActive: boolean; lists: List[] } =
    properties;

  return (
    <div
      className={`flex w-full max-w-[24rem] flex-col gap-[51px] rounded-xl border ${isActive ? "border-primary" : "border-border"} px-[32px] py-[31px]`}
    >
      <section className="flex flex-col gap-4">
        <h1 className="text-[25px] font-bold">{type}</h1>
        <h1 className="text-[39px] font-bold">
          {price}
          <span className="text-xl font-normal"> /month</span>
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
