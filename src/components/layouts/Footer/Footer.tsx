import "./Footer.css";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
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

      <div className="footer__text-container">
        <p className="footer__paragraph footer__paragraph--1">
          Thank you for choosing Boilerplate.com Need help?{" "}
          <Link className="footer__support" href="/">
            <strong>Contact our customer support</strong>
          </Link>
        </p>

        <p className="footer__paragraph">
          You are receiving this email because you signed up at Boilerplate.com.
          Want to change how you receive these emails?
        </p>

        <p className="footer__paragraph">
          You can{" "}
          <Link className="footer__link" href="/">
            <strong>update your preferences</strong>
          </Link>{" "}
          or{" "}
          <Link className="footer__link" href="/">
            <strong>unsubscribe from this list.</strong>
          </Link>
        </p>
      </div>
    </footer>
  );
}
