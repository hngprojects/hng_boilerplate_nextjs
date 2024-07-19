import { GoverningLaw } from "~/app/constants/constant";
import { TermsType } from "~/app/types/types";

const GoverningLaws = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
      <h2 className="mt-0 self-stretch relative text-inherit font-bold font-inherit sm:text-[28px] text-2xl">
        Governing Law and Dispute Resolution
      </h2>
      <div className="self-stretch relative inline-block text-base">
        <div className="mb-[10px]">
          To address any disputes that may arise, the following provisions
          apply:
        </div>
        <ul className=" pl-[21px]">
          {GoverningLaw.map((list: TermsType) => (
            <li className="list-disc mb-[10px]" key={list.title}>
              <span>{list.title}</span> <span>{list.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoverningLaws;
