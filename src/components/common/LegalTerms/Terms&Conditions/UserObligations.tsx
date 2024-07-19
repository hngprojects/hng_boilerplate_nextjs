import { Obligations } from "~/components/common/LegalTerms/Terms&Conditions/constants/constant";


interface TermsType {
  title: string;
  value: string;
}

const UserObligations = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[10px] mt-[20px]">
      <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit sm:text-[28px] text-2xl">
        User Obligations
      </h2>
      <div className="self-stretch relative inline-block text-base">
        <div className="mb-[10px]">
          As a user of our services, you are expected to adhere to the following
          obligations to ensure a safe and enjoyable experience for all users:
        </div>
        <ul className="m-0 pl-[21px]">
          {Obligations.map((list: TermsType) => (
            <li className="list-disc mb-[10px]" key={list.title}>
              <span>{list.title}</span> <span>{list.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserObligations;
