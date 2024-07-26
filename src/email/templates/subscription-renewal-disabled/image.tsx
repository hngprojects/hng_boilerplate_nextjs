import {
  Container,
  Heading,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface AccountLinkExpiredProperties {
  title?: string;
  username?: string;
  image?: string;
  description?: string;
  descriptionOne?: string;
  link?: string;
  upgradeLink?: string;
}

export const AccountLinkExpired = ({
  title = "",
  username = "",
  image = "",
  description = "",
  descriptionOne = "",
  upgradeLink = "",
  link = "",
}: AccountLinkExpiredProperties) => {
  return (
    <Layout>
      <Section className="py-[56px]">
        <Section className="mx-auto flex items-center justify-center md:w-[316px]">
          <Img src={image} alt="hello" className="h-[100%] w-[100%]" />
        </Section>
        <Section className="mx-auto flex items-center justify-center"></Section>

        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="mt-[56px] flex flex-col items-center justify-center">
            <Heading
              as="h5"
              className="my-0 mb-[56px] text-center text-[24px] leading-[28px] text-[#121212]"
            >
              {title}
            </Heading>

            <Section>
              <Text className="md:text-[18px]mt-[32px] my-0 text-[16px] font-[600] text-[#121212]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {description}
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {descriptionOne}
              </Text>
            </Section>
          </Section>
        </Container>
        <section className="item-center mx-auto mt-[32px] flex max-w-[679px] flex-col justify-center gap-[20px] px-[48px] md:flex-row">
          <Link href={link} target="_blank">
            <button
              style={{ boxShadow: "none" }}
              className="border-1 w-[100%] rounded-[8px] border border-[#F97316] bg-[#F97316] px-[2rem] py-[16px] text-[#FAFAFA] shadow-none md:w-fit"
            >
              Send Another Active Link
            </button>
          </Link>
          <Link href={upgradeLink} target="_blank">
            <button
              style={{ boxShadow: "none" }}
              className="border-1 w-[100%] rounded-[8px] border border-[#F97316] bg-[transparent] py-[16px] text-[#F97316] shadow-none md:w-fit md:px-[2rem]"
            >
              Upgrade Plan
            </button>
          </Link>
        </section>
        <Section className="my-[56px]">
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="my-0 font-[600] text-[#121212]">
              Regards,
              <br />
              Boilerplate
            </Text>
          </Container>
        </Section>
        <Section>
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="my-0 text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
              If you have questions, please visit our{" "}
              <Link className="text-[#F67316]">FAQs</Link>, or email us at{" "}
              <Link className="text-[#F67316]">help@boilerplate.com</Link>. Our
              team can answer questions about your subscription status. To
              unsubscribe from future subscription renewal reminders,{" "}
              <Link className="font-[600] text-[#525252] text-[#F67316] underline">
                click here.
              </Link>
            </Text>
          </Container>
        </Section>
      </Section>
    </Layout>
  );
};

AccountLinkExpired.PreviewProps = {
  title: "Subscription Renewal Disabled",
  username: "John Doe",
  image: "https://imgur.com/5KobknJ.png",
  link: "/",
  upgradeLink: "/",
  description:
    "    As requested, your next subscription renewal for Bi-monthly Features has been disabled. You will continue to enjoy benefits of this subscription until 17th August,",
  descriptionOne:
    "We are so sad to see you go. However, if you change your mind, you can always reactivate your subscription or upgrade your subscription plan. 2024.",
} as AccountLinkExpiredProperties;

export default AccountLinkExpired;
