import Image from "next/image";

import Heading from "../heading";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 lg:px-10 xl:px-10">
        <Heading
          tag="About Us"
          title="More Than {{Just}} A BoilerPlate"
          content={`Welcome to Hng Boilerplate, where passion meets innovation. Discoverhow we started, the challenges we overcame, and the milestones thatdefine our journey.`}
        />

        <div className="mt-[10px] w-full">
          <Image
            src="/images/about-us/aboutus1.svg"
            alt="Hero_image"
            className="w-full"
            width={1036}
            height={355}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
