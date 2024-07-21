import Image from "next/image";

import TeamCard from "~/components/common/TeamCard/teamcard";
import ShapeTwo from "../../../public/AboutUsImages/Shape-2.png";
import ShapeOne from "../../../public/AboutUsImages/Shape.png";

const ExecutiveTeam = () => {
  return (
    <div className="relative mt-[80px] flex h-[1831px] flex-col md:h-[610px] md:w-full">
      <span>
        <Image
          src={ShapeOne}
          alt="eclipse"
          width={1441}
          height={130}
          className="absolute top-0 h-[130px] w-full"
        />
      </span>
      <span>
        <Image
          src={ShapeTwo}
          alt="eclipse"
          width={1441}
          height={130}
          className="absolute bottom-0 h-[130px] w-full"
        />
      </span>
      <div className="z-10 mx-auto flex w-[382px] flex-col items-center justify-center max-sm:px-[5px] md:w-[630px]">
        <h3 className="text-center text-[32px] font-[600] text-neutral-600 md:text-[44px]">
          The Executive Team
        </h3>
        <p className="text-center text-[16px] leading-[19px] text-neutral-600 md:text-[18px] md:leading-[22px]">
          Meet Our Exclusive team that have been trained to meet your needs.
        </p>
      </div>

      <div className="z-10 mx-auto mt-[20px] grid h-[1692px] grid-cols-1 gap-[27px] md:h-[3px] md:w-[1200px] md:grid-cols-4">
        <div>
          <TeamCard
            name="John Abraham"
            imageAlt="john image"
            imageSrc="/AboutUsImages/John.png"
            role="Business Developer"
            description="John is a strategic product manager with a keen eye for market
              trends."
            facebookURL="/"
            twitterURL="/"
            instagramURL="/"
          />
        </div>
        <div>
          <TeamCard
            name="Addison Mark"
            imageAlt="Addison Image"
            imageSrc="/AboutUsImages/Addison.png"
            role="Software Engineer"
            description="Addison our skilled frontend developer, brings websites to life
              with clean code."
            facebookURL="/"
            twitterURL="/"
            instagramURL="/"
          />
        </div>
        <div data-testid="Joy tony">
          <TeamCard
            name="Joy Tony"
            imageAlt="Joy Image"
            imageSrc="/AboutUsImages/joy.png"
            role="Product Manager"
            description="Joy is a passionate product manager driven by user experience."
            facebookURL="/"
            twitterURL="/"
            instagramURL="/"
          />
        </div>

        <div data-testid="Joshua Philip">
          <TeamCard
            name="Joshua Philip"
            imageAlt="Joshua Image"
            imageSrc="/AboutUsImages/Philp.png"
            role=" Data Analyst"
            description="Joshua, our data analyst, uses user data to optimize our
              boilerplates for performance."
            facebookURL="/"
            twitterURL="/"
            instagramURL="/"
          />
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTeam;
