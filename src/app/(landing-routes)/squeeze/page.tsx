// import squeezeHeroImgUrl from '~/../public/images/squeeze.png'

import Image from "next/image";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center flex justify-center md:justify-start px-8 md:px-32 py-20 md:py-28"
      style={{ backgroundImage: "url('/images/squeeze.png')" }}
    >
      <div className="w-[486px] rounded bg-background px-3 md:px-6 py-8 text-neutral-dark-1 ">
        <div className="items-left flex flex-col justify-between px-3">
          <h1 className="text-[26px] md:text-[32px] font-bold leading-8">
            UNLEASH YOUR CREATIVITY WITH HNG BOILERPLATE
          </h1>

          <div className="my-6 pr-2">
            <div className="flex items-center space-x-3">
              <Image src="/images/tick.svg" width={24} height={24} alt="tick" />
              <p className="text-lg font-medium leading-6">
                Eliminate complexity and coding headaches with our intuitive
                boilerplate
              </p>
            </div>

            <div className="flex items-center space-x-3 my-3">
              <Image src="/images/tick.svg" width={24} height={24} alt="tick" />
              <p className="text-lg font-medium leading-6">
                Stay up-to-date with continuous updates and enhancements.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <Image src="/images/tick.svg" width={24} height={24} alt="tick" />
              <p className="text-lg font-medium leading-6">
                Simplify development with an intuitive solution.
              </p>
            </div>
          </div>

          <form className="mb-4">
            <input
              className="block w-full rounded-md border p-3 bg-background"
              type="email"
              placeholder="Enter your email"
            />
            <button className="mt-2 block w-full rounded-md bg-primary py-3 font-medium text-primary-foreground">
              Send me the template
            </button>
          </form>
          <p className="text-xs font-semibold">
            We respect your privacy, unsubscribe anytime, view our <Link href="/" className="text-primary">
              privacy policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
