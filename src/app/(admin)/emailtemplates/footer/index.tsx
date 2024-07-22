import { LucideInstagram, LucideLinkedin, LucideTwitter } from "lucide-react";
import Image from "next/image";

import Tiktok from "~/../public/images/tiktok.svg";

const EmailFooter = () => {
  return (
    <footer className="w-full bg-subtle">
      <div className="px-12 py-8">
        <div className="flex justify-center gap-[33px]">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            data-testid="twitter-icon"
          >
            <LucideTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            data-testid="instagram-icon"
          >
            <LucideInstagram size={24} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            data-testid="tiktok-icon"
          >
            <Image src={Tiktok} alt="small" width="24" height="24" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            data-testid="linkedin-icon"
          >
            <LucideLinkedin size={24} />
          </a>
        </div>
        <div className="mt-16 flex flex-col items-center gap-[30px] px-8">
          <p className="text-sm leading-[16.94px]">
            Thank you for choosing Boilerplate.com. Need help?{" "}
            <span className="text-sm font-semibold underline">
              Contact our customer support
            </span>
          </p>
          <div className="w-full max-w-lg">
            <hr className="w-full border-t-2 border-dashed border-default opacity-40" />
          </div>
          <div className="mt-10">
            <p className="text-sm leading-[20px]">
              You are receiving this email because you signed up at
              Boilerplate.com. Want to change how you receive these emails?
            </p>
            <p className="mt-2 text-sm leading-6">
              You can{" "}
              <span className="font-semibold">update your preferences</span> or{" "}
              <span className="font-semibold">unsubscribe from this list</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default EmailFooter;
