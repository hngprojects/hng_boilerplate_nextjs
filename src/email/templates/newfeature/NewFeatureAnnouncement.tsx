// import { Html } from "@react-email/components";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface NewFeatureAnnouncementProperties {
  title?: string;
  username?: string;
  image?: string;
  logo?: string;
  star?: string;
  marketing?: string;
  featureName?: string;
  learnMoreLink?: string;
  featureDescription?: string;
  benefitOne?: string;
  benefitTwo?: string;
  linkedinIcon?: string;
  redditIcon?: string;
  tiktokIcon?: string;
  igIcon?: string;
  xIcon?: string;
}

export const NewFeatureAnnouncement = ({
  title = "",
  username = "",
  image = "",
  logo = "",
  star = "",
  featureName = "",
  learnMoreLink = "",
  featureDescription = "",
  benefitOne = "",
  benefitTwo = "",
  linkedinIcon = "",
  redditIcon = "",
  tiktokIcon = "",
  igIcon = "",
  xIcon = "",
}: NewFeatureAnnouncementProperties) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>
          {title} {featureName}
        </Preview>
        <Body className="mx-auto my-auto w-full bg-white p-4">
          <Container className="mx-auto w-full max-w-[790px] overflow-hidden border border-gray-200 pb-2 pt-2">
            <Section className="mx-auto flex h-[108px] w-full items-center justify-center bg-[#E1D6D666]">
              <Img
                src={logo}
                alt="Boilerplatelogo"
                className="h-[29px] w-[160px] items-center"
              />
            </Section>

            <Section className="mx-auto my-[40px] flex w-full items-center justify-center">
              <Img
                src={image}
                alt="marketing"
                className="h-[178px] w-[178px] md:h-[120px] md:w-[120px]"
              />
            </Section>

            <Section className="flex flex-col items-center justify-center px-[16px] md:px-[48px]">
              <Heading
                as="h5"
                className="mx-auto mb-8 w-full text-center font-sans text-[24px] font-semibold leading-[120%] text-[#121212] md:w-[381px] md:text-[20px]"
              >
                {title} {featureName}
              </Heading>

              <Text className="mb-[16px] w-full text-left font-sans text-[18px] font-semibold leading-[120%] text-[#121212] md:text-[16px]">
                Hi {username},
                <p className="font-sans">
                  We&apos;re thrilled to announce the launch of our newest
                  feature: {featureName}!
                </p>
                <p className="font-sans">
                  {featureName} {featureDescription}
                </p>
              </Text>

              <Text className="w-full text-left font-sans text-[18px] font-semibold leading-[120%] text-[#121212] md:text-[16px]">
                Benefits of {featureName}:
                <ul className="flex flex-col gap-[16px] text-left font-sans text-base md:text-[14px]">
                  <li className="flex items-start gap-[16px]">
                    <Img src={star} alt="star" className="h-[24px] w-[24px]" />
                    <span>
                      <strong>Efficient Team Collaboration:</strong>{" "}
                      <span className="text-[#121212]">{benefitOne}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-[16px]">
                    <Img src={star} alt="star" className="h-[24px] w-[24px]" />
                    <span>
                      <strong>Improved Accountability:</strong>{" "}
                      <span className="text-[#121212]">{benefitTwo}</span>
                    </span>
                  </li>
                </ul>
              </Text>
            </Section>

            <Section className="font-h5-medium mb-[16px] flex flex-col items-center justify-center bg-orange-500 px-[20px] py-[20px] text-center text-white md:px-[108px] md:py-[39px]">
              <Heading
                as="h2"
                className="my-0 w-full font-sans text-[24px] font-semibold text-white md:text-[32px]"
              >
                {featureName} is now live!
              </Heading>
              <Text className="my-0 w-full font-sans text-lg font-medium text-white md:text-xl">
                You can start using it immediately.
              </Text>
            </Section>

            <Text className="mb-[40px] w-full text-center font-sans text-base text-[black] md:text-[16px]">
              Want to explore all the details? Click the button below to dive
              into our comprehensive guide
            </Text>

            <Section className="flex justify-center">
              <Button
                className="box-border h-11 w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-orange-500 bg-primary px-[16px] py-[8px] text-center font-sans text-base text-[white] md:w-auto md:text-[16px]"
                href={learnMoreLink}
              >
                Learn More
              </Button>
            </Section>

            <Section className="mb-[40px] ml-[16px] mt-[24px] flex w-auto flex-col items-start justify-start text-left font-sans text-sm md:ml-[48px]">
              <Text className="text-[14px] font-medium leading-[20px]">
                Regards,
                <br />
                Boilerplate
              </Text>
            </Section>

            <Section className="bg-[#F3EFEF] px-[48px] py-[32px] text-left font-sans text-sm text-gray-600 md:px-12">
              <Section>
                <div className="mx-auto mb-[30px] flex flex-row items-center justify-center gap-[16px] md:gap-[33px]">
                  <Link href="">
                    <Img src={xIcon} alt="" className="h-6 w-6" />
                  </Link>
                  <Link href="">
                    <Img src={igIcon} alt="" className="h-6 w-6" />
                  </Link>
                  <Link href="">
                    <Img src={tiktokIcon} alt="" className="h-6 w-6" />
                  </Link>
                  <Link href="">
                    <Img src={redditIcon} alt="" className="h-6 w-6" />
                  </Link>
                  <Link href="">
                    <Img src={linkedinIcon} alt="" className="h-6 w-6" />
                  </Link>
                </div>
                <Section className="flex w-full flex-col items-start justify-start gap-[30px]">
                  <Text className="mb-[30px] mt-0 w-full text-[14px]">
                    Thank you for choosing Boilerplate. Need help?{" "}
                    <Link
                      href=""
                      className="font-semibold text-gray-700 underline"
                    >
                      Contact our customer support
                    </Link>
                  </Text>
                  <div className="h-[0.3px] w-full border-t-[0.3px] border-dashed border-gray-600" />
                  <Section className="flex w-full flex-col items-start justify-start gap-[8px]">
                    <Text className="font-sansmb-[8px] mt-[30px] w-full text-[14px] leading-[20px]">
                      You are receiving this email because you signed up at
                      Boilerplate.com. Want to change how you receive these
                      emails?
                    </Text>
                    <Text className="mb-0 mt-0 w-full text-[14px] leading-[24px]">
                      You can{" "}
                      <Link href="" className="font-semibold text-gray-700">
                        update your preferences
                      </Link>{" "}
                      or{" "}
                      <Link href="" className="font-semibold text-gray-700">
                        unsubscribe from this list
                      </Link>
                      .
                    </Text>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

NewFeatureAnnouncement.PreviewProps = {
  title: "Introducing Our Latest Feature:",
  username: "John Doe",
  logo: "https://i.imgur.com/9W6zN9U.png",
  image: "https://i.imgur.com/p66l3SQ.png",
  star: "https://i.imgur.com/bmprMwh.png",
  featureName: "Boilerplate Pro",
  featureDescription:
    "is designed to help you create shared spaces for collaboration. Invite team members, share files, and work together seamlessly. From project planning to brainstorming sessions, collaborative spaces foster productivity.. Whether you’re a seasoned user or just getting started, this enhancement will transform your experience.",
  benefitOne:
    "Collaborative Spaces allow you to create dedicated areas for teamwork. Whether it’s a project, brainstorming session, or ongoing discussion, team members can collaborate seamlessly within these spaces.",
  benefitTwo:
    "With Collaborative Spaces, accountability becomes clearer. Each team member’s contributions are visible within the shared space.",
  learnMoreLink: "",
  linkedinIcon: "https://i.imgur.com/jBHlv7Y.png",
  redditIcon: "https://i.imgur.com/ONXC0iw.png",
  tiktokIcon: "https://i.imgur.com/sui2yFV.png",
  igIcon: "https://i.imgur.com/MVsmHn7.png",
  xIcon: "https://i.imgur.com/KfwJgPL.png",
} as NewFeatureAnnouncementProperties;

export default NewFeatureAnnouncement;
