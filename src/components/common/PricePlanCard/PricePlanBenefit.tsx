import PricePlanCheckMark from "./PricePlanCheckMark";

interface List {
  benefitTitle: string;
  isAddedBenefit: boolean;
}
export default function PricePlanBenefit(properties: { list: List }) {
  const { list } = properties;
  const { benefitTitle, isAddedBenefit } = list;
  return (
    <div className="flex items-center gap-3">
      <PricePlanCheckMark isAddedBenefit={isAddedBenefit} />
      <p className={isAddedBenefit ? "" : "text-muted-foreground"}>
        {benefitTitle}
      </p>
    </div>
  );
}
