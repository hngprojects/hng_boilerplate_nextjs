import Image from "next/image";

import logoLarge from "~/../public/images/logo(large).svg";
import logoSmall from "~/../public/images/logo(small).svg";

interface Properties {
  size: "big" | "small";
}

const Logo = ({ size }: Properties) => {
  const isSmall = size === "small";
  return (
    <>
      {isSmall ? (
        <Image src={logoSmall} alt="small" width="40" height="38" />
      ) : (
        <Image src={logoLarge} alt="large" width="57" height="52" />
      )}
    </>
  );
};

export default Logo;
