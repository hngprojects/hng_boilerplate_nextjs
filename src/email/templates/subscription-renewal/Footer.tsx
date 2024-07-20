import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-100 py-14">
      <div className="flex justify-center items-center gap-14">
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

      <div className="px-[5.6rem] mt-12">
        <p className="text-[1.4rem] text-gray-600 my-12">
          Thank you for choosing Boilerplate.com Need help?{" "}
          <Link className="text-black font-semibold underline" href="/">
            <strong>Contact our customer support</strong>
          </Link>
        </p>

        <p className="text-[1.4rem] text-gray-600">
          You are receiving this email because you signed up at Boilerplate.com.
          Want to change how you receive these emails?
        </p>

        <p className="text-[1.4rem] text-gray-600 mt-2">
          You can{" "}
          <Link className="text-black font-semibold" href="/">
            <strong>update your preferences</strong>
          </Link>{" "}
          or{" "}
          <Link className="text-black font-semibold" href="/">
            <strong>unsubscribe from this list.</strong>
          </Link>
        </p>
      </div>
    </footer>
  );
}

