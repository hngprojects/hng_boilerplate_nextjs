import Image from "next/image";
import Link from "next/link";

import linkedin from "../../../assets/linkedin (2).svg";
import instagram from "../../../assets/mdi_instagram.svg";
import facebook from "../../../assets/ri_facebook-fill.svg";
import twitter from "../../../assets/twitter.svg";
import youtube from "../../../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 container">
      <div className="container mx-auto hidden md:block">
        <div className="grid grid-cols-5 gap-8">
          {/* Boilerplate section */}
          <div className="mb-6">
            <h5 className="font-bold mb-2 text-xl">BoilerPlate</h5>
            <p>Logo subject details and address</p>
          </div>

          {/* Navigation section */}
          <div className="mb-6">
            <h5 className="font-bold mb-2 text-xl">Navigation</h5>
            <ul>
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

          {/* Support section */}
          <div className="mb-6">
            <h5 className="font-bold mb-2 text-xl">Support</h5>
            <ul>
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

          {/* Legal section */}
          <div className="mb-6">
            <h5 className="font-bold mb-2 text-xl">Legal</h5>
            <ul>
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

          {/* Newsletter section */}
          <div className="mb-6">
            <h5 className="font-bold mb-2 text-xl">Sign Up For Newsletter</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="p-2 border border-gray-400 rounded-l w-full"
              />
              <button className="bg-orange-500 text-white p-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social links and copyright section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-300 mt-8 pt-4">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="#" aria-label="Twitter">
              <Image
                className="bg-orange-500 p-1 rounded-full"
                src={twitter}
                alt="Twitter"
                width={20}
                height={20}
              />
            </a>
            <a href="#" aria-label="YouTube">
              <Image
                className="bg-orange-500 p-1 rounded-full"
                src={youtube}
                alt="YouTube"
                width={20}
                height={20}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                className="bg-orange-500 p-1 rounded-full"
                src={instagram}
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image
                className="bg-orange-500 p-1 rounded-full"
                src={linkedin}
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
            <a href="#" aria-label="Facebook">
              <Image
                className="bg-orange-500 p-1 rounded-full"
                src={facebook}
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
          </div>
          <p className="text-sm">&copy; 2024 All Rights Reserved</p>
          <div>
            <Link className="text-sm" href="#" passHref>
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link className="text-sm" href="#" passHref>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
      <div className="container text-center md:hidden">
        <div className="mb-6">
          <h5 className="font-bold mb-2">BoilerPlate</h5>
          <p>Logo subject details and address</p>
        </div>
        <div className="mb-6">
          <h5 className="font-bold mb-2">Sign Up For Newsletter</h5>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 border border-gray-400 rounded-l"
            />
            <button className="bg-orange-500 text-white p-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="mb-6 text-start">
            <h5 className="font-bold mb-2 text-xl">Navigation</h5>
            <ul>
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
            <h5 className="font-bold mb-2 text-xl">Support</h5>
            <ul>
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
            <h5 className="font-bold mb-2 text-xl">Legal</h5>
            <ul>
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
            <h5 className="font-bold mb-2 text-xl">Follow Us</h5>
            <div className="flex w-full gap-2 mb-4">
              <a href="#" aria-label="Twitter">
                <Image
                  className="bg-orange-500 p-1 rounded-full"
                  src={twitter}
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#" aria-label="YouTube">
                <Image
                  className="bg-orange-500 p-1 rounded-full"
                  src={youtube}
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Image
                  className="bg-orange-500 p-1 rounded-full"
                  src={instagram}
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Image
                  className="bg-orange-500 p-1 rounded-full"
                  src={linkedin}
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#" aria-label="Facebook">
                <Image
                  className="bg-orange-500 p-1 rounded-full"
                  src={facebook}
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
