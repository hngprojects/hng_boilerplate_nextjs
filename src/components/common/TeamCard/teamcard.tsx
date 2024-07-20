import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

import CustomButton from "../Button/button";

interface TeamCardProperties {
  name: string;
  imageSrc: string;
  imageAlt: string;
  role: string;
  description: string;
  facebookURL?: string;
  instagramURL?: string;
  twitterURL?: string;
}

const TeamCard: React.FC<TeamCardProperties> = ({
  name,
  imageSrc,
  imageAlt,
  role,
  description,
  facebookURL,
  instagramURL,
  twitterURL,
}) => {
  return (
    <div className="flex w-[277.35px] flex-col gap-4 bg-neutral-50">
      <div className="relative h-[205.78px] bg-neutral-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 px-[14.31px] pb-3.5">
        <div>
          <p className="pb-1 text-lg font-bold leading-[21.78px] text-neutral-600 md:font-semibold">
            {name}
          </p>
          <p className="pb-[7.16px] text-[12.53px] leading-[15.16px] text-neutral-600">
            {role}
          </p>
          <p className="md:text-normal line-clamp-3 text-sm font-medium leading-[19.36px] text-neutral-600 md:font-normal">
            {description}
          </p>
        </div>
        <div className="flex h-8 gap-3.5">
          {facebookURL && (
            <CustomButton className="p-1" variant={"link"} size={"icon"}>
              <a
                href={facebookURL}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Facebook strokeWidth={1} />
              </a>
            </CustomButton>
          )}
          {instagramURL && (
            <CustomButton className="p-1" variant={"link"} size={"icon"}>
              <a
                href={instagramURL}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Instagram strokeWidth={1} />
              </a>
            </CustomButton>
          )}
          {twitterURL && (
            <CustomButton className="p-1" variant={"link"} size={"icon"}>
              <a
                href={twitterURL}
                target="_blank"
                aria-label="Twitter"
                rel="noreferrer noopener"
              >
                <Twitter strokeWidth={1} />
              </a>
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
