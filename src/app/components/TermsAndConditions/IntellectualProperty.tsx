import { IntellectualPropertyRight } from "~/app/constants/constant";
import { TermsType } from "~/app/types/types";

const IntellectualProperty = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
      <h2 className="mt-0 self-stretch relative text-inherit font-bold font-inherit sm:text-[28px] text-2xl">
        Intellectual Property Rights
      </h2>
      <div className="self-stretch relative inline-block text-base">
        <div className="mb-[10px]">
          We value and respect intellectual property rights and expect our users
          to do the same. The following guidelines outline our stance on
          intellectual property:
        </div>
        <ul className=" pl-[21px]">
          {IntellectualPropertyRight.map((list: TermsType) => (
            <li className="list-disc mb-[10px]" key={list.title}>
              <span>{list.title}</span> <span>{list.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IntellectualProperty;
