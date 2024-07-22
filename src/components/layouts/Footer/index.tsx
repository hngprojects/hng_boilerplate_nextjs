import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  XIcon,
  Youtube,
} from "lucide-react";
import Link from "next/link";

import CustomButton from "~/components/common/Button/button";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { route: "Home", link: "/" },
        { route: "About us", link: "/" },
        { route: "Career", link: "/" },
        { route: "Feature updates", link: "/" },
        { route: "Blog", link: "/" },
      ],
    },
    {
      title: "Support",
      links: [
        { route: "Help center", link: "/" },
        { route: "FAQ", link: "/" },
        { route: "waiting list", link: "/" },
        { route: "Pricing Experience", link: "/" },
        { route: "Contact Us", link: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { route: "Privacy Policy", link: "/" },
        { route: "Terms and condition", link: "/" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: XIcon,
      link: "/",
    },
    {
      icon: Youtube,
      link: "/",
    },
    {
      icon: Instagram,
      link: "/",
    },
    {
      icon: Linkedin,
      link: "/",
    },
    {
      icon: Facebook,
      link: "/",
    },
  ];

  const footerBottom = [
    { route: "Privacy Policy", link: "/" },
    { route: "Terms of Use", link: "/" },
  ];
  return (
    <footer className="bg-background dark:bg-default">
      <div className="px-4">
        <div className="mx-auto w-full max-w-[1200px] items-start justify-between gap-[60px] pb-[130px] pt-[28px] sm:grid-cols-2 md:gap-4 md:pb-[46px] md:pt-[72px] lg:flex">
          <div className="mb-[100px] lg:mb-0">
            <div className="mb-[47px] flex w-full flex-col items-center justify-center sm:mb-[60px] md:block md:max-w-[254px] lg:mb-0">
              <h5 className="text-nuetral-dark-2 mb-[34px] text-center text-xl font-bold sm:text-left">
                Boiler plate
              </h5>
              <p className="text-nuetral-dark-2 text-center text-[16px] font-medium sm:text-left">
                Logo subject details and address
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:block lg:hidden">
              <h5 className="text-neurtal-dark-2 mb-4 text-center text-[20px] font-semibold sm:text-left md:mb-[36px]">
                Sign Up For Newsletter
              </h5>
              <div className="item flex h-[46px] w-full items-center justify-start md:max-w-[283px]">
                <input
                  placeholder="Enter email"
                  className="rounded-tr-0 rounded-br-0 h-full w-full rounded-bl-[5px] rounded-tl-[5px] border-b-[1px] border-l-[1px] border-t-[1px] border-neutral-dark-1 bg-transparent px-[10px] outline-none"
                  type="text"
                />
                <CustomButton variant="primary" className="h-full">
                  Subscibe
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-1 gap-y-[60px] md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {footerLinks.map((item, index) => {
              return (
                <div key={index}>
                  <h5 className="text-neurtal-dark-2 mb-[37px] text-[20px] font-semibold">
                    {item.title}
                  </h5>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={item.link}
                            className="cursor-pointer text-lg text-neutral-dark-2 transition-colors duration-300 hover:text-primary hover:underline dark:text-white"
                          >
                            {item.route}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <div className="hidden lg:block">
              <h5 className="text-neurtal-dark-2 mb-4 text-[20px] font-semibold md:mb-[36px]">
                Sign Up For Newsletter
              </h5>
              <div className="item flex h-[46px] w-full max-w-[283px] items-center justify-start">
                <input
                  placeholder="Enter email"
                  className="rounded-tr-0 rounded-br-0 h-full w-full rounded-bl-[5px] rounded-tl-[5px] border-b-[1px] border-l-[1px] border-t-[1px] border-neutral-dark-1 bg-transparent px-[10px] outline-none"
                  type="text"
                />
                <CustomButton variant="primary" className="h-full">
                  Subscibe
                </CustomButton>
              </div>
            </div>
            <div className="lg:hidden">
              <h5 className="text-neurtal-dark-2 mb-[10px] text-[20px] font-semibold">
                Follow Us
              </h5>
              <div className="flex w-full max-w-[116px] items-center justify-between gap-1 md:max-w-[212px]">
                {socialLinks.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-primary p-1 hover:bg-default md:h-10 md:w-10"
                    >
                      <item.icon className="h-[10px] w-[10px] text-white md:h-4 md:w-4" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-default"></div>
      <div className="px-4">
        <div className="mx-auto block w-full max-w-[1200px] items-center justify-between pb-[30px] pt-4 md:pt-[27px] lg:flex">
          <div className="hidden lg:block">
            <div className="flex w-full max-w-[116px] items-center justify-between gap-1 md:max-w-[212px]">
              {socialLinks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-primary p-1 hover:bg-default md:h-10 md:w-10"
                  >
                    <item.icon className="h-[10px] w-[10px] text-white md:h-4 md:w-4" />
                  </div>
                );
              })}
            </div>
          </div>
          <span className="flex items-center justify-center text-center text-xs font-semibold text-stroke-colors-stroke">
            <Copyright className="h-5 w-5 text-stroke-colors-stroke" />
            2024 All Rights Reserved
          </span>
          <div className="hidden lg:block">
            <ul className="flex items-center justify-between gap-[13px]">
              {footerBottom.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="cursor-pointer text-sm text-neutral-dark-2 transition-colors duration-300 hover:text-primary hover:underline"
                    >
                      {item.route}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
