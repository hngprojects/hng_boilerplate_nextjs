import Image from "next/image";

const Navbar = () => {
  return (
    <div className="renewal-navbar">
      <div className="renewal-navbar-brand">
        <div className="renewal-navbar-logo">
          <Image
            className="w-[18px] h-[18px] relative"
            loading="lazy"
            alt=""
            src="/images/boiler-logo.svg"
            width={500}
            height={500}
          />
        </div>
        <a className="renewal-navbar-brand-text">Boilerplate.</a>
      </div>
    </div>
  );
};

export default Navbar;
