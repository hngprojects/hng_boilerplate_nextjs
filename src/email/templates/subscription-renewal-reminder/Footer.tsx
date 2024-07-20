import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-100 py-14">
      <div className="flex items-center justify-center gap-14">
        <Link href="/">
          <Image
            className="footer__icon"
            src="/icon-x.svg"
            alt="X icon"
            width={24}
            height={24}
          />
        </Link>

        <Link href="/">
          <Image
            className="footer__icon"
            src="/icon-instagram.svg"
            alt="Instagram icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            className="footer__icon"
            src="/icon-tiktok.svg"
            alt="Tiktok icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            className="footer__icon"
            src="/icon-bot.svg"
            alt="Bot icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            className="footer__icon"
            src="/icon-linkedin.svg"
            alt="Linkedin icon"
            width={24}
            height={24}
          />
        </Link>
      </div>

      <div className="mt-12 px-[5.6rem]">
        <p className="my-12 text-[1.4rem] text-gray-600">
          Thank you for choosing Boilerplate.com Need help?{" "}
          <Link className="font-semibold text-black underline" href="/">
            <strong>Contact our customer support</strong>
          </Link>
        </p>

        <p className="text-[1.4rem] text-gray-600">
          You are receiving this email because you signed up at Boilerplate.com.
          Want to change how you receive these emails?
        </p>

        <p className="mt-2 text-[1.4rem] text-gray-600">
          You can{" "}
          <Link className="font-semibold text-black" href="/">
            <strong>update your preferences</strong>
          </Link>{" "}
          or{" "}
          <Link className="font-semibold text-black" href="/">
            <strong>unsubscribe from this list.</strong>
          </Link>
        </p>
      </div>
    </footer>
  );
}
