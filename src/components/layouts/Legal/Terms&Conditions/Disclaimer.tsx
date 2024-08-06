import { Disclaimers } from "./constants/constant";

interface TermsType {
  title: string;
  value: string;
}

const Disclaimer = () => {
  return (
    <div
      className="flex flex-col items-start justify-start gap-[10px] self-stretch"
      data-testid="disclaimer"
    >
      <h2 className="font-inherit relative mt-0 self-stretch text-lg font-bold text-foreground">
        Disclaimers and Limitations of Liability
      </h2>
      <div className="relative inline-block self-stretch text-base">
        <div className="mb-[10px]">
          To ensure clarity regarding our responsibilities and your
          expectations, the following disclaimers and limitations of liability
          apply:
        </div>
        <ul className="pl-[21px]">
          {Disclaimers.map((list: TermsType) => (
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

export default Disclaimer;
