import { Link, Text } from "@react-email/components";

import social1 from "./icons/social-insta";
import social4 from "./icons/social-lnkdn";
import social3 from "./icons/social-reddit";
import social2 from "./icons/social-tiktok";
import social0 from "./icons/social-x";

export default function Footer() {
  const icons = [social0, social1, social2, social3, social4];
  return (
    <div className="flex justify-center bg-[#e1d6d666] leading-[normal] tracking-[normal]">
      <section className="mx-auto flex w-full max-w-[680px] flex-col items-start justify-start gap-7 px-12 py-8 text-left text-sm">
        <div className="flex items-start justify-center self-stretch px-5 py-0">
          <div className="flex items-start justify-between gap-5 md:gap-7">
            {icons.map((Icon, index) => (
              <a
                href="#"
                key={index}
                className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <p className="my-0 text-sm leading-4 text-[#5B5B5D]">
          {`Thank you for choosing Boilerplate.com. Need help? `}
          <Link
            className="font-semibold text-black underline hover:no-underline"
            href="#"
          >
            Contact our customer support
          </Link>
        </p>
        <hr className="my-0 w-full border-dashed border-gray-300" />
        <div className="flex flex-col gap-2 self-stretch">
          <div className="relative self-stretch leading-5">
            You are receiving this email because you signed up Boilerplate.com.
            Want to change how you receive these emails?
          </div>
          <Text className="relative self-stretch leading-6">
            <span>You can </span>
            <Link className="font-semibold text-black no-underline" href="#">
              update your preferences
            </Link>
            <span> or </span>
            <Link className="font-semibold text-black no-underline" href="#">
              unsubscribe from this list
            </Link>
            .
          </Text>
        </div>
      </section>
    </div>
  );
}
