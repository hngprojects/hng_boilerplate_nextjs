import { Obligations } from "./constants/constant";

interface TermsType {
  title: string;
  value: string;
}

const UserObligations = () => {
  return (
    <div
      className="mt-[20px] flex flex-col items-start justify-start gap-[10px] self-stretch"
      data-testid="user-obligations"
    >
      <h2 className="font-inherit relative m-0 self-stretch text-lg font-bold text-foreground">
        User Obligations
      </h2>
      <div className="`relative inline-block self-stretch text-base">
        <div className="mb-[10px]">
          As a user of our services, you are expected to adhere to the following
          obligations to ensure a safe and enjoyable experience for all users:
        </div>
        <ul className="m-0 pl-[21px]">
          {Obligations.map((list: TermsType) => (
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

export default UserObligations;
