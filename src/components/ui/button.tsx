import { ReactElement } from "react";

interface ButtonComponentPropertyTypes {
  text: string;
  backgroundColor: string;
  textColor: string;
  icon?: ReactElement;
}

const Button = ({
  text,
  backgroundColor,
  textColor,
  icon,
}: ButtonComponentPropertyTypes) => {
  return (
    <>
      <button
        className={`py-[8px] px-[16px] flex flex-row items-center gap-x-[8px] rounded-[6px] text-sm leading-[24px] font-[500] ${backgroundColor} ${textColor}`}
      >
        {icon}
        <div>{text}</div>
      </button>
    </>
  );
};

export default Button;
