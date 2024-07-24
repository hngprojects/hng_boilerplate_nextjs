// import { Html } from "@react-email/components";
import {
  Button,
  Container,
  Heading,
  Img,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

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
  star = "",
  featureName = "",
  learnMoreLink = "",
  featureDescription = "",
  benefitOne = "",
  benefitTwo = "",
}: NewFeatureAnnouncementProperties) => {
  return (
    <Layout>
      <Section className="w-full max-w-[678px] py-12 md:py-14">
        <Section className="mx-auto flex items-center justify-center">
          <Img src={image} alt="marketing" className="h-[178px] w-[178px]" />
        </Section>

        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="my-[40px] flex flex-col items-center justify-center">
            <Heading
              as="h5"
              className="my-0 text-center text-[24px] leading-[28px] text-[#121212]"
            >
              {title} <br /> {featureName}
            </Heading>

            <Section>
              <Text className="text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                We&apos;re thrilled to announce the launch of our newest
                feature: {featureName} <br />
                {featureName} {featureDescription}
              </Text>
            </Section>

            <Section className="">
              <Heading
                as="h6"
                className="my-[16px] text-[16px] text-[#121212] md:text-[18px]"
              >
                Benefits of {featureName}:
              </Heading>
              <ul className="list-none pl-0">
                <li className="flex items-start text-[14px] md:text-[16px]">
                  <div className="mr-2 flex-shrink-0">
                    <Img src={star} alt="star" className="h-[24px] w-[24px]" />
                  </div>
                  <div>
                    <span className="font-[500] text-[#121212]">
                      Efficient Team Collaboration:{" "}
                    </span>
                    <span className="leading-[19.36px] text-[#525252]">
                      {benefitOne}
                    </span>
                  </div>
                </li>
                <li className="mt-[20px] flex items-start text-[14px] md:text-[16px]">
                  <div className="mr-2 flex-shrink-0">
                    <Img src={star} alt="star" className="h-[24px] w-[24px]" />
                  </div>
                  <div>
                    <span className="font-[500] text-[#121212]">
                      Improved Accountability:{" "}
                    </span>
                    <span className="leading-[19.36px] text-[#525252]">
                      {benefitTwo}
                    </span>
                  </div>
                </li>
              </ul>
            </Section>
          </Section>
        </Container>

        <Section className="w-full bg-[#F97316] py-[39px] text-center text-[#FAFAFA]">
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Heading as="h2" className="my-0 text-[24px] md:text-[32px]">
              {featureName} is now live!
            </Heading>
            <Text className="my-0 text-[16px] md:text-[20px]">
              You can start using it immediately.
            </Text>
          </Container>
        </Section>

        <Section className="text-center">
          <Container className="mb-[40px] max-w-[680px] px-[48px] md:px-0">
            <Text className="text-left leading-[16.94px] md:text-[16px]">
              Want to explore all the details? Click the button below to dive
              into our comprehensive guide
            </Text>
          </Container>
          <Button
            className="rounded-[8px] bg-[#F97316] px-[2rem] py-[16px] text-[#FAFAFA]"
            href={learnMoreLink}
          >
            Learn More
          </Button>
        </Section>
        <Section className="mt-[40px]">
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="font-[600] text-[#121212]">
              Regards,
              <br />
              Boilerplate
            </Text>
          </Container>
        </Section>
      </Section>
    </Layout>
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
