const Button = () => {
  return (
    <button
      className="renewal-button flex h-[44px] cursor-pointer flex-row items-center justify-center gap-[10px] self-stretch whitespace-nowrap rounded-lg bg-orange-500 px-[16px] py-[8px] [border:none] md:self-center md:px-10"
      style={{ flex: 1 }}
    >
      <div className="renewal-button-text relative text-center text-base font-medium text-background">
        Update Payment Details
      </div>
    </button>
  );
};

export default Button;
