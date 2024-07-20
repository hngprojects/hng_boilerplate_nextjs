import Image from "next/image";

const Navbar = () => {
  return (
    <div className="renewal-navbar box-border flex h-[90px] w-full max-w-full shrink-0 flex-row items-center justify-center overflow-hidden bg-[#E1D6D6] px-5 py-[39.5px] text-left text-[24px] leading-normal tracking-normal text-[#121A26] md:h-[108px]">
      <div className="renewal-navbar-brand flex flex-row items-start justify-start gap-[10px]">
        <div className="renewal-navbar-logo flex flex-col items-start justify-start px-0 pb-0 pt-[5.5px]">
          <Image
            className="relative h-[18px] w-[18px]"
            loading="lazy"
            alt=""
            src="/images/boiler-logo.svg"
            width={500}
            height={500}
          />
        </div>
        <a className="renewal-navbar-brand-text text-neutral-dark-2 relative text-[24px] font-semibold no-underline">
          Boilerplate.
        </a>
      </div>
    </div>
  );
};

export default Navbar;
