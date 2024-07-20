import Image from "next/image";
import Link from "next/link";

import BotLogo from "./socials/icon-bot.svg";
import InstagramLogo from "./socials/icon-instagram.svg";
import LinkedinLogo from "./socials/icon-linkedin.svg";
import TiktokLogo from "./socials/icon-tiktok.svg";
import TwitterLogo from "./socials/icon-x.svg";

const linksArray = [
  { href: "/", src: TwitterLogo, alt: "X icon" },
  { href: "/", src: InstagramLogo, alt: "Instagram icon" },
  { href: "/", src: TiktokLogo, alt: "Tiktok icon" },
  { href: "/", src: BotLogo, alt: "Bot icon" },
  { href: "/", src: LinkedinLogo, alt: "Linkedin icon" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-100 py-14">
      <div className="flex items-center justify-center gap-14 px-[2rem]">
        {linksArray.map((link) => (
          <Link key={link.alt} href={link.href}>
            <Image
              className="footer__icon"
              src={link.src}
              alt={link.alt}
              width={25}
              height={25}
            />
          </Link>
        ))}
      </div>

      <div className="mt-12 px-[5.6rem]">
        <p className="my-12 text-[1.2rem] text-gray-600">
          Thank you for choosing Boilerplate.com Need help?{" "}
          <Link className="font-[500] text-foreground underline" href="/">
            <strong>Contact our customer support</strong>
          </Link>
        </p>

        <p className="text-[1.2rem] text-gray-600">
          You are receiving this email because you signed up at Boilerplate.com.
          Want to change how you receive these emails?
        </p>

        <p className="mt-2 text-[1.2rem] text-gray-600">
          You can{" "}
          <Link className="font-[500] text-foreground" href="/">
            <strong>update your preferences</strong>
          </Link>{" "}
          or{" "}
          <Link className="font-[500] text-foreground" href="/">
            <strong>unsubscribe from this list.</strong>
          </Link>
        </p>
      </div>
    </footer>
  );
}
