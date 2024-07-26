// import { Html } from "@react-email/components";
import {
  Button,
  Container,
  Heading,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface NewFeatureAnnouncementProperties {
  title?: string;
  username?: string;
  image?: string;
  link?: string;
  description?: string;
}

export const NewFeatureAnnouncement = ({
  title = "",
  username = "",
  image = "",
  link = "",
  description = "",
}: NewFeatureAnnouncementProperties) => {
  return (
    <Layout>
      <Section className="py-[56px]">
        <Section className="mx-auto flex items-center justify-center">
          <Img src={image} alt="marketing" className="h-[178px] w-[178px]" />
        </Section>
        <Section>
          <Container className="mt-[56px] max-w-[680px] px-[48px] md:px-0">
            <Heading
              as="h5"
              className="my-0 mb-[56px] text-center text-[24px] leading-[28px] text-[#121212]"
            >
              {title}
            </Heading>
            <Section>
              <Text className="my-0 text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Hi {username},
              </Text>
              <Text className="mb-0 text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {description}
              </Text>
            </Section>
          </Container>
        </Section>
        <Section className="my-[28px] w-full bg-[#F97316] py-[39px] text-center text-[#FAFAFA]">
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="my-0 text-[16px] md:text-[20px]">
              Your Renewal Date
            </Text>
            <Heading as="h2" className="my-0 text-[24px] md:text-[32px]">
              17th September, 2024
            </Heading>
          </Container>
        </Section>
        <Section>
          <Container className="mb-[32px] max-w-[680px] px-[48px] md:px-0">
            <Text className="text-left leading-[19px] text-[#525252] md:text-[16px]">
              Your subscription for{" "}
              <span className="font-[600]">$20.89/Bi-monthly features</span>{" "}
              will automatically renew on 17th September, 2024. To avoid being
              charged, you should cancel at least a day before the renewal date.
              To learn more or cancel,{" "}
              <Link className="text-[#F97316]" href="">
                review subscription
              </Link>
            </Text>
            <Text className="text-left leading-[19px] text-[#525252] md:text-[16px]">
              To keep your subscription, you can renew your plan for the next
              month.
            </Text>
          </Container>
          <Section className="text-center">
            <Section className="w-[100%] text-center">
              <Container className="max-w-[680px] px-[48px] md:px-0">
                <Button
                  target={"_blank"}
                  className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                  href={link}
                >
                  Renew Subscription
                </Button>
              </Container>
            </Section>
          </Section>
        </Section>

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
              <Link className="font-[600] text-[#525252] underline">
                click here.
              </Link>
            </Text>
          </Container>
        </Section>
      </Section>
    </Layout>
  );
};

NewFeatureAnnouncement.PreviewProps = {
  title: "Subscription Renewal Reminder",
  username: "John Doe",
  image: "https://imgur.com/pXas02C.png",
  star: "https://i.imgur.com/bmprMwh.png",
  description:
    "We hope you are enjoying your subscription, which will renew soon.",

  link: "",
} as NewFeatureAnnouncementProperties;

export default NewFeatureAnnouncement;
