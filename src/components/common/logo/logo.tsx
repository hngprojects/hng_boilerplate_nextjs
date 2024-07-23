import Image from "next/image";

interface Properties {
  size: "big" | "small";
}

const Logo = ({ size }: Properties) => {
  const isSmall = size === "small";
  return (
    <>
      {isSmall ? (
        <Image
          src="/images/logo(small).svg"
          alt="small"
          width="40"
          height="38"
        />
      ) : (
        <Image
          src="/images/logo(large).svg"
          alt="large"
          width="57"
          height="52"
        />
      )}
    </>
  );
};

export default Logo;
