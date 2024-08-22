import { IntellectualPropertyRight } from "./constants/constant";

interface TermsType {
  title: string;
  value: string;
}

const IntellectualProperty = () => {
  return (
    <div
      className="flex flex-col items-start justify-start gap-[10px] self-stretch"
      data-testid="intellectual-property"
    >
      <h2 className="font-inherit relative mt-0 self-stretch text-lg font-bold text-foreground">
        Intellectual Property Rights
      </h2>
      <div className="`relative inline-block self-stretch text-base">
        <div className="mb-[10px]">
          We value and respect intellectual property rights and expect our users
          to do the same. The following guidelines outline our stance on
          intellectual property:
        </div>
        <ul className="pl-[21px]">
          {IntellectualPropertyRight.map((list: TermsType) => (
            <li className="mb-[10px] list-disc" key={list.title}>
              <span className="font-[700]">{list.title}</span>{" "}
              <span>{list.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IntellectualProperty;
