import { AcceptableUsePolicy } from "./constants/constant";

interface TermsType {
  title: string;
  value: string;
}

const AcceptableUse = () => {
  return (
    <div
      className="flex flex-col items-start justify-start gap-[10px] self-stretch"
      data-testid="acceptable-use"
    >
      <h2 className="font-inherit relative mt-0 self-stretch text-lg font-bold text-foreground">
        Acceptable Use Policy
      </h2>
      <div className="relative inline-block self-stretch">
        <div className="mb-[10px]">
          To maintain a positive and productive environment, we have established
          the following acceptable use policy:
        </div>
        <ul className="m-0 pl-[21px]">
          {AcceptableUsePolicy.map((list: TermsType) => (
            <li className="`mb-[10px] list-disc" key={list.title}>
              <span className="font-[700]">{list.title}</span>{" "}
              <span>{list.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AcceptableUse;
