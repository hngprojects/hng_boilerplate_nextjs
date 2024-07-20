import Image from "next/image";

import { bizTime, contactInfo } from "~/app/contact/constant";
import { arrow_right } from "../../../public/contact-icons";

const Contact = () => {
  return (
    <main>
      {/* <Header /> */}
      <section className="mx-auto bg-white pb-20 text-neutral-dark-1 transition-all lg:container lg:pb-44 lg:pt-9">
        <div className="grid justify-center gap-2.5 pt-24 *:text-center lg:gap-3 lg:pb-11 lg:pt-24">
          <h1 className="text-3xl font-bold lg:text-6xl">Contact Our Team</h1>
          <p className="text-lg max-sm:hidden lg:text-2xl">
            Let&#39;s Build Your Product Together
          </p>
          <p className="text-lg font-medium sm:hidden">
            Achieve your dreams with us today
          </p>
        </div>
        <div className="items-start justify-between gap-4 max-lg:mx-8 lg:flex">
          <div className="lg:w-7/12">{/* <ContactForm /> */}</div>
          <div className="mx-auto grid gap-6 max-lg:container *:rounded-md *:border *:bg-background *:p-6 max-lg:mt-5 lg:mt-8 lg:w-4/12 lg:p-8">
            <div className="grid lg:gap-8">
              <h2 className="text-lg font-bold lg:text-3xl">United Kingdom</h2>
              <h3 className="text-sm font-bold max-lg:pb-6 max-lg:pt-4 lg:text-base">
                Business hours : {bizTime[0]} - {bizTime[1]}
              </h3>
              <div className="grid gap-5 lg:gap-4">
                {contactInfo.map((info) => (
                  <div key={info.alt} className="flex items-center gap-4">
                    <div className="rounded-sm bg-neutral-dark-1 p-2.5">
                      <Image
                        src={info.image}
                        width={24}
                        height={24}
                        alt={info.alt}
                      />
                    </div>
                    <p className="text-lg leading-5">{info.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="gap-4 max-lg:grid">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-primary underline underline-offset-2">
                  FAQ
                </h2>
                <div>
                  <Image src={arrow_right} alt="arrow_right" />
                </div>
              </div>
              <p className="texl-lg">
                See and get answers to the most frequent asked questions
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default Contact;
