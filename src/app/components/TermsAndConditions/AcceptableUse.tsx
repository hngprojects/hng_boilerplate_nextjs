import { AcceptableUsePolicy } from "~/app/constants/constant";
import { TermsType } from "~/app/types/types";

const AcceptableUse = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
      <h2 className="mt-0 self-stretch relative text-inherit font-bold font-inherit sm:text-[28px] text-2xl">
        Acceptable Use Policy
      </h2>
      <div className="self-stretch relative inline-block text-base">
        <div className="mb-[10px]">
          To maintain a positive and productive environment, we have established
          the following acceptable use policy:
        </div>
        <ul className="m-0 pl-[21px]">
          {AcceptableUsePolicy.map((list: TermsType) => (
            <li className="list-disc mb-[10px]" key={list.title}>
              <span>{list.title}</span> <span>{list.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AcceptableUse;
