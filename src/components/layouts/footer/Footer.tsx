import Image from "next/image";
import Link from "next/link";

import linkedin from "../../../assets/linkedin(2).svg";
import instagram from "../../../assets/mdi_instagram.svg";
import facebook from "../../../assets/ri_facebook-fill.svg";
import twitter from "../../../assets/twitter.svg";
import youtube from "../../../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-background bg-gray-100 py-8 text-foreground">
      <div className="px-[3%]">
        <div
          data-testid="desktop-tags"
          className="hidden gap-x-2 px-3 py-6 md:block"
        >
          <div className="grid grid-cols-[repeat(5,1fr)] justify-items-start">
            <div className="mb-6">
              <h5 className="mb-2 text-lg font-bold">BoilerPlate</h5>
              <p className="whitespace-nowrap text-base xl:pr-20">
                Logo subject details and address
              </p>
            </div>

            <div className="mb-6">
              <h5 className="mb-2 text-xl font-bold">Navigation</h5>
              <ul className="flex flex-col gap-2 text-lg">
                <li>
                  <Link href="#" passHref>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Job Listing
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Feature Updates
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="mb-2 text-xl font-bold">Support</h5>
              <ul className="flex flex-col gap-2 text-lg">
                <li>
                  <Link href="#" passHref>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Waiting List
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Pricing Experience
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6 mr-8">
              <h5 className="mb-2 text-xl font-bold">Legal</h5>
              <ul className="flex flex-col gap-2 text-lg">
                <li>
                  <Link href="#" passHref>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="whitespace-nowrap" href="#" passHref>
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6 ml-auto">
              <h5 className="mb-2 text-lg font-bold">Sign Up For Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-40 rounded-l border-2 border-border bg-transparent p-2 py-2"
                />
                <button className="rounded-r bg-primary p-2 text-background">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-300 pt-4 sm:flex-row">
            <div className="mb-4 flex space-x-1 sm:mb-0">
              <a
                className="h-8 w-8 rounded-full bg-primary p-2 text-background"
                href="#"
                aria-label="Twitter"
              >
                <Image src={twitter} alt="Twitter" width={16} height={16} />
              </a>
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary p-1 text-background"
                href="#"
                aria-label="YouTube"
              >
                <Image src={youtube} alt="YouTube" width={24} height={24} />
              </a>
              <a
                className="h-8 w-8 rounded-full bg-primary p-2 text-background"
                href="#"
                aria-label="Instagram"
              >
                <Image src={instagram} alt="Instagram" width={16} height={16} />
              </a>
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary p-1 text-background"
                href="#"
                aria-label="LinkedIn"
              >
                <Image src={linkedin} alt="LinkedIn" width={16} height={16} />
              </a>
              <a href="#" aria-label="Facebook">
                <Image
                  className="bg-primary, h-8 w-8 rounded-full text-background"
                  src={facebook}
                  alt="Facebook"
                  width={16}
                  height={16}
                />
              </a>
            </div>
            <p className="text-sm">&copy; 2024 All Rights Reserved</p>
            <div>
              <Link className="text-sm" href="#" passHref>
                Privacy Policy
              </Link>
              <span className="mx-2"> </span>
              <Link className="text-sm" href="#" passHref>
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
        <div
          data-testid="mobile-tags"
          className="container text-center md:hidden"
        >
          <div className="mb-[4rem]">
            <h5 className="mb-2 text-xl font-bold">BoilerPlate</h5>
            <p>Logo subject details and address</p>
          </div>
          <div className="mb-6">
            <h5 className="mb-2 text-lg font-bold">Sign Up For Newsletter</h5>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="rounded-l border border-gray-400 p-2"
              />
              <button className="rounded-r bg-primary p-2 text-background">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="mb-6 text-start">
              <h5 className="mb-2 text-xl font-bold">Navigation</h5>
              <ul className="flex flex-col gap-3 text-lg">
                <li>
                  <Link href="#" passHref>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Job Listing
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Feature Updates
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-6 text-start">
              <h5 className="mb-2 text-xl font-bold">Support</h5>
              <ul className="flex flex-col gap-3 text-lg">
                <li>
                  <Link href="#" passHref>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Waiting List
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Pricing Experience
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6 text-start">
              <h5 className="mb-2 text-xl font-bold">Legal</h5>
              <ul className="flex flex-col gap-3 text-lg">
                <li>
                  <Link href="#" passHref>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-start">
              <h5 className="mb-2 text-xl font-bold">Follow Us</h5>
              <div className="mb-4 flex w-full gap-2">
                <a href="#" aria-label="Twitter">
                  <Image
                    className="rounded-full bg-primary p-1 text-background"
                    src={twitter}
                    alt="Twitter-mobile"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" aria-label="YouTube">
                  <Image
                    className="rounded-full bg-primary p-1 text-background"
                    src={youtube}
                    alt="YouTube-mobile"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <Image
                    className="rounded-full bg-primary p-1 text-background"
                    src={instagram}
                    alt="Instagram-mobile"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Image
                    className="rounded-full bg-primary p-1 text-background"
                    src={linkedin}
                    alt="LinkedIn-mobile"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" aria-label="Facebook">
                  <Image
                    className="rounded-full bg-primary p-1 text-background"
                    src={facebook}
                    alt="Facebook-mobile"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
