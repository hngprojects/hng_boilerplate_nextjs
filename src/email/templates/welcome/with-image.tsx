import {
  Button,
  Font,
  Head,
  Img,
  Preview,
  Text,
} from "@react-email/components";

import Star from "~/email/templates/_components/Star";
import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";
import Layout from "~/email/templates/_layouts/Layout";

interface IProperties {
  name: string;
  main_heading: string;
  sub_heading: string;
  description: string;
  with_highlights: boolean;
  highlights: {
    title: string;
    body: {
      item: string;
      description: string;
    }[];
  };
  action_url: string;
  app_name: string;
}

export default function Email(properties: IProperties) {
  const {
    main_heading,
    sub_heading,
    name,
    description,
    with_highlights,
    highlights,
    action_url,
    app_name,
  } = properties;

  return (
    <Tailwindwrapper>
      <Preview>{`Welcome ${name}`}</Preview>
      <Layout>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
              format: "woff2",
            }}
          />
        </Head>
        <section className="mx-auto flex max-w-[680px] flex-col items-center justify-center gap-10 self-stretch px-14 py-12 md:gap-14 md:py-14">
          <div className="p-0 text-center md:px-14">
            <Img
              src={"https://i.ibb.co/ScGZJHs/image-2-2.png"}
              alt={main_heading}
              className="w-full min-w-[366px]"
            />
          </div>
          <header className="flex w-full flex-col items-center justify-center gap-2 md:gap-3">
            <h4 className="my-0 text-center text-xl font-semibold text-primary md:text-2xl">
              {main_heading}
            </h4>
            <h6 className="my-0 text-center text-base font-medium md:text-lg">
              {sub_heading}
            </h6>
          </header>
          <main className="flex w-full flex-col gap-7 self-stretch md:gap-8">
            <p className="my-0 text-base font-semibold md:text-lg">
              Hi {name},
            </p>
            <div className="flex flex-col gap-6 md:gap-7">
              <p className="my-0 text-sm font-normal md:text-base">
                {description}
              </p>
              {with_highlights && (
                <div className="flex flex-col gap-5">
                  <p className="my-0 text-base font-semibold">
                    {highlights.title}
                  </p>
                  <div className="flex flex-col gap-4">
                    {highlights.body.map((item, index) => (
                      <Text
                        key={index}
                        className="my-0 flex items-center gap-3 leading-4 md:gap-4"
                      >
                        <span className="text-primary">
                          <Star />
                        </span>
                        <span>
                          <span className="font-semibold">{item.item}: </span>
                          <span className="text-sm md:text-base">
                            {item.description}
                          </span>
                        </span>
                      </Text>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="text-center">
              <Button
                href={action_url}
                className="block rounded-[8px] bg-[#F97316] px-10 py-2.5 text-base text-white sm:inline"
              >
                Learn more about us
              </Button>
            </div>
          </main>
          <footer className="flex w-full flex-col gap-2">
            <Text className="my-0 text-sm font-medium">Regards,</Text>
            <Text className="my-0 text-sm font-medium">{app_name}</Text>
          </footer>
        </section>
      </Layout>
    </Tailwindwrapper>
  );
}

Email.PreviewProps = {
  name: "John Doe",
  main_heading: "Welcome to Boilerplate",
  sub_heading: "Get started with us today",
  description:
    "We're thrilled to have you join us. Experience quality and innovation like never before.  Our product is made to fit your needs and make your life easier.",
  with_highlights: true,
  highlights: {
    title: "Here’s what you can look forward to",
    body: [
      {
        item: "Exclusive Offers",
        description:
          "Enjoy special promotions and discounts available only to our members.",
      },
      {
        item: "24/7 Support",
        description: "To help you at any time",
      },
      {
        item: "Secure and reliable",
        description: "Platform to keep your data safe",
      },
    ],
  },
  action_url: "https://boilerplate-weblink.com",
  app_name: "Boilerplate",
} satisfies IProperties;
