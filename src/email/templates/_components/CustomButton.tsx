import { Link } from "@react-email/components";
import { ButtonHTMLAttributes, FC } from "react";

interface IProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  link: string;
}

const CustomButton: FC<IProperties> = ({ title, link, ...properties }) => {
  return (
    <Link href={link}>
      <button className="rounded-2 bg-primary px-10 py-3" {...properties}>
        {title}
      </button>
    </Link>
  );
};

export default CustomButton;
