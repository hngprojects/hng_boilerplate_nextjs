import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import Layout from "~/app/(home)/layout";
import ContactForm from "~/components/common/contact-us-form";

const bizTime = ["8am", "6pm"];
const contactInfo = [
  {
    alt: "map icon",
    Icon: MapPin,
    text: "10111, hornchurch, london, United kingdom",
  },
  { alt: "phone icon", Icon: Phone, text: "+4403989898787" },
  { alt: "mail icon", Icon: Mail, text: "Email: supportteam@gmail.com" },
  { alt: "twitter icon", Icon: Twitter, text: "Twitter @boilerplate23" },
  {
    alt: "instagram icon",
    Icon: Instagram,
    text: "Instagram @boilerplate234",
  },
  { alt: "linkedin icon", Icon: Linkedin, text: "Linkedin @boilerplate34" },
];

const Contact = () => {
  return (
    <Layout>
      <main className="bg-white">
        <section className="mx-auto max-w-[1200px] pb-20 text-neutral-dark-1 transition-all lg:container lg:pb-44 lg:pt-9">
          <div className="grid justify-center gap-2.5 pt-24 *:text-center lg:gap-3 lg:pb-11 lg:pt-24">
            <h1 className="text-3xl font-bold lg:text-6xl">Contact Our Team</h1>
            <p className="text-lg max-sm:hidden lg:text-2xl">
              Let&#39;s Build Your Product Together
            </p>
            <p className="text-lg font-medium sm:hidden">
              Achieve your dreams with us today
            </p>
          </div>
          <div className="items-start justify-between gap-4 lg:flex">
            <ContactForm />
            <div className="mx-auto grid gap-6 max-lg:container *:rounded-md *:border *:bg-background *:p-6 max-lg:mt-5 lg:w-1/2 lg:pr-8 lg:pt-8">
              <div className="grid lg:gap-8">
                <h2 className="text-lg font-bold lg:text-3xl">
                  United Kingdom
                </h2>
                <h3 className="text-sm font-bold max-lg:pb-6 max-lg:pt-4 lg:text-base">
                  Business hours : {bizTime[0]} - {bizTime[1]}
                </h3>
                <div className="grid gap-5 lg:gap-4">
                  {contactInfo.map((info) => (
                    <div key={info.alt} className="flex items-center gap-4">
                      <div className="rounded-sm bg-neutral-dark-1 p-2.5">
                        <info.Icon color="white" size={24} />
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
                    <ArrowRight className="text-primary" />
                  </div>
                </div>
                <p className="texl-lg">
                  See and get answers to the most frequent asked questions
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
