interface ButtonProps {
  type: "primary" | "secondary";
  text: string
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick, className }) => {
  if (type === "secondary") return (
    <button onClick={onClick} className={`text-[#F97316] capitalize border-[#F97316] hover:text-opacity-70 duration-300 transition-all border bg-white py-2 px-4 text-sm leading-[normal] md:leading-6 text-center md:font-medium rounded-[6px] inline ${className}`}>
      {text}
    </button>
  )

  return (
    <button onClick={onClick} className={`text-white hover:bg-opacity-70 duration-300 transition-all inline capitalize bg-[#F97316] py-2 px-4 text-sm leading-[normal] md:leading-6 text-center md:font-medium rounded-[6px] ${className}`}>
      {text}
    </button>
  )
}

export default Button
