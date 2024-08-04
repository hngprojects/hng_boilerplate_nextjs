import { GoverningLaw } from "./constants/constant";

interface TermsType {
  title: string;
  value: string;
}

const GoverningLaws = () => {
  return (
    <div
      className="flex flex-col items-start justify-start gap-[10px] self-stretch"
      data-testid="governing-laws"
    >
      <h2 className="font-inherit relative mt-0 self-stretch text-lg font-bold text-foreground">
        Governing Law and Dispute Resolution
      </h2>
      <div className="relative inline-block self-stretch text-base">
        <div className="mb-[10px]">
          To address any disputes that may arise, the following provisions
          apply:
        </div>
        <ul className="pl-[21px]">
          {GoverningLaw.map((list: TermsType) => (
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

export default GoverningLaws;
