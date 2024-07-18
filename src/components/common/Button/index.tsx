import { ButtonProps } from "~/types/Types";

const Button = ({ title, className, type }: ButtonProps) => {
  return (
    <button className={`${className}`} type={type}>
        {title}
    </button>
    
  );
};

export default Button;
