const Button = () => {
  return (
    <button
      className="cursor-pointer [border:none] py-[8px] px-[16px] md:px-10 bg-[#F97316] h-[44px] gap-[10px] rounded-lg flex flex-row items-center justify-center self-stretch md:self-center whitespace-nowrap"
      style={{ flex: 1 }}
    >
      <div className="relative text-base font-medium text-white text-center">
        Update Payment Details
      </div>
    </button>
  );
};

export default Button;
