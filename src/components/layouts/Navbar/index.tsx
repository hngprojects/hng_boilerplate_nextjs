const Navbar = () => {
  return ( 
    <div
      className="w-full h-[90px] md:h-[108px] bg-[#E1D6D6] max-w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-[39.5px] px-5 box-border leading-[normal] tracking-[normal] text-left text-[24px] text-[#121A26]"
  >
    <div className="flex flex-row items-start justify-start gap-[10px]">
      <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
        <img
          className="w-[18px] h-[18px] relative"
          loading="lazy"
          alt=""
          src="/images/boiler-logo.svg"
        />
      </div>
      <a className="[text-decoration:none] relative font-semibold text-[#121A26] text-[24px] ">
        Boilerplate.
      </a>
    </div>
  </div>
  
  )
};

export default Navbar;
