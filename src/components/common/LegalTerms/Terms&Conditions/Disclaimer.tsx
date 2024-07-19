import { Disclaimers } from "~/components/common/LegalTerms/Terms&Conditions/constants/constant";

interface TermsType {
  title: string;
  value: string;
}

const Disclaimer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
      <h2 className="mt-0 self-stretch relative text-inherit font-bold font-inherit sm:text-[28px] text-2xl">
        Disclaimers and Limitations of Liability
      </h2>
      <div className="self-stretch relative inline-block text-base">
        <div className="mb-[10px]">
          To ensure clarity regarding our responsibilities and your
          expectations, the following disclaimers and limitations of liability
          apply:
        </div>
        <ul className=" pl-[21px]">
          {Disclaimers.map((list: TermsType) => (
            <li className="list-disc mb-[10px]" key={list.title}>
              <span>{list.title}</span> <span>{list.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Disclaimer;
