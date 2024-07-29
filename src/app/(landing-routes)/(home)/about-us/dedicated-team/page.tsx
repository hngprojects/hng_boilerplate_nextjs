"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import TeamCard from "~/components/common/TeamCard/teamcard";

const page = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-5 md:px-5 lg:px-10 xl:px-10">
        <h3 className="mb-2 mt-5 text-center text-[36px] font-[700] leading-[normal] md:text-[44px] md:font-[600]">
          Meet <span className="text-primary">Our </span>Team
        </h3>

        <p className="mx-auto w-[362px] text-center text-[20px] leading-[normal] text-neutral-600 md:w-[996px] md:text-[18px]">
          Discover the passionate individuals who drive our vision and bring our
          projects to life. Our diverse team combines expertise, creativity, and
          dedication to deliver exceptional results and create a positive
          impact.
        </p>
        <div className="mx-auto mt-5 grid h-auto grid-cols-1 justify-center max-lg:items-center max-lg:justify-center md:h-[774px] md:grid-cols-[400px_550px] md:gap-3 lg:grid-cols-[612px_535px] lg:gap-[53px]">
          <div className="relative h-[506px] rounded-lg bg-neutral-100 max-lg:pt-[30px] max-sm:pt-[90px] md:h-[500px] lg:h-[715px]">
            <div className="absolute left-[20px] top-[20px] flex h-[31px] w-[114px] items-center justify-center gap-[10px] rounded-lg bg-primary font-bold max-lg:h-[40px] max-lg:w-[120px]">
              <div className="h-[6px] w-[6px] rounded-full border-[white] bg-[white]"></div>
              <span className="text-xs text-white">Head of Team</span>
            </div>
            <Image
              src="/images/about-us/teamLead.svg"
              width={612}
              height={715}
              alt="team lead"
              className="max-sm:object-bottom"
            />
          </div>
          <div className="h-auto md:h-[715px]">
            <div className="flex flex-col gap-[20px] border-b border-b-neutral-200 pb-[10px] pt-[10px] md:h-[269px]">
              <h3 className="text-[36px] font-[700] leading-[normal]">
                Nora Bisong
              </h3>
              <p className="text-[18px] font-[400] leading-[27px] text-neutral-600">
                Nora Bisong is a dynamic professional with a keen eye for trends
                and a deep understanding of consumer behavior. With a background
                in both digital and traditional marketing, Jane has crafted and
                executed campaigns that have significantly boosted brand
                awareness and engagement.
              </p>
              <div className="flex h-[40px] w-full items-center gap-[20px]">
                <Link
                  href="/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-neutral-100 p-1"
                >
                  <Facebook strokeWidth={1} />
                </Link>
                <Link
                  href="/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-neutral-100 p-1"
                >
                  <Instagram strokeWidth={1} />
                </Link>
                <Link
                  href="/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-neutral-100 p-1"
                >
                  <Twitter strokeWidth={1} />
                </Link>
              </div>
            </div>
            <div className="w-full">
              <p className="mt-3 text-[28px] font-[600] leading-[normal]">
                Nora Bisong Impacts on the team
              </p>
              <ul className="ml-[20px] mt-3 flex h-[486px] list-disc flex-col justify-between text-[18px] font-[400] leading-[27px] text-neutral-600 max-sm:w-[340px] md:ml-[40px] md:h-[378px]">
                <li className="">
                  <span className="font-bold">Innovation Leadership:</span>{" "}
                  Nora’s forward-thinking approach has inspired the team to
                  adopt new technologies and methodologies, significantly
                  enhancing the company’s competitive edge.
                </li>
                <li className="">
                  <span className="font-bold">Team Development:</span> Under
                  Nora’s guidance, team members have experienced substantial
                  professional growth, with many advancing to senior roles
                  within the company.
                </li>
                <li>
                  <span className="font-bold">Collaborative Culture:</span> Nora
                  has cultivated a collaborative and inclusive team environment,
                  encouraging open communication and idea-sharing, which has led
                  to more cohesive and efficient project execution.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-20">
          <p className="text-[36px] font-[700] md:text-[44px]">Team Members</p>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-[20px] pb-10 max-lg:w-3/4 md:justify-between">
            <div className="">
              <TeamCard
                name="John Abraham"
                imageAlt="john image"
                imageSrc="/images/about-us/team1.svg"
                role="Business Developer"
                description="John is a strategic product manager with a keen eye for market trends."
                facebookURL="www.facebook.com"
                twitterURL="www.twitter.com"
                instagramURL="www.instagram.com"
              />
            </div>
            <div className="">
              <TeamCard
                name="Addison Mark"
                imageAlt="Addison Image"
                imageSrc="/images/about-us/team2.svg"
                role="Software Engineer"
                description="Addison our skilled frontend developer, brings websites to life with clean code."
                facebookURL="/"
                twitterURL="/"
                instagramURL="/"
              />
            </div>
            <div className=" " data-testid="Joy tony">
              <TeamCard
                name="Joy Tony"
                imageAlt="Joy Image"
                imageSrc="/images/about-us/team3.svg"
                role="Product Manager"
                description="Joy is a passionate product manager driven by user experience."
                facebookURL="/"
                twitterURL="/"
                instagramURL="/"
              />
            </div>
            <div className=" " data-testid="Joshua Philip">
              <TeamCard
                name="Joshua Philip"
                imageAlt="Joshua Image"
                imageSrc="/images/about-us/team4.svg"
                role="Data Analyst"
                description="Joshua, our data analyst, uses user data to optimize our boilerplates for performance."
                facebookURL="/"
                twitterURL="/"
                instagramURL="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
