import { Button } from "@react-email/components";
import { FC } from "react";

interface IProperties {
  title: string;
  link: string;
}

const CustomButton: FC<IProperties> = ({ title, link }) => {
  return (
    <Button href={link} className="rounded-2 bg-primary px-10 py-3">
      {title}
    </Button>
  );
};

export default CustomButton;
