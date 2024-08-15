import {
  Button,
  Container,
  Heading,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../../layout/layout";

interface NewFeatureAnnouncementProperties {
  username: string;
  link: string;
}

export const NewFeatureAnnouncement = ({
  username,
  link,
}: NewFeatureAnnouncementProperties) => {
  return (
    <Layout>
      <Preview>{username}, our latest features.</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src="https://i.imgur.com/p66l3SQ.png"
              alt="marketing"
              style={imageStyle}
            />
          </Section>

          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Introducing Our Latest Feature: Boilerplate Pro
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                We&apos;re thrilled to announce the launch of our newest
                feature: Boilerplate Pro. Boilerplate Pro is designed to help
                you create shared spaces for collaboration. Invite team members,
                share files, and work together seamlessly. From project planning
                to brainstorming sessions, collaborative spaces foster
                productivity.
              </Text>
              <Text style={descriptionTextStyle}>
                Whether you’re a seasoned user or just getting started, this
                enhancement will transform your experience.
              </Text>
            </Section>

            <Section>
              <Heading as="h6" style={subHeadingStyle}>
                Benefits of Boilerplate Pro:
              </Heading>
              <ul style={listStyle}>
                <li style={listItemStyle}>
                  <Img
                    src="https://i.imgur.com/bmprMwh.png"
                    alt="star"
                    style={iconStyle}
                  />
                  <span style={benefitTextStyle}>
                    <strong>Efficient Team Collaboration:</strong> Collaborative
                    Spaces allow you to create dedicated areas for teamwork.
                    Whether it’s a project, brainstorming session, or ongoing
                    discussion, team members can collaborate seamlessly within
                    these spaces.
                  </span>
                </li>
                <li style={listItemStyle}>
                  <Img
                    src="https://i.imgur.com/bmprMwh.png"
                    alt="star"
                    style={iconStyle}
                  />
                  <span style={benefitTextStyle}>
                    <strong>Improved Accountability:</strong> With Collaborative
                    Spaces, accountability becomes clearer. Each team member’s
                    contributions are visible within the shared space.
                  </span>
                </li>
              </ul>
            </Section>
          </Section>

          <Section style={ctaSectionStyle}>
            <Heading as="h2" style={ctaHeadingStyle}>
              Boilerplate Pro is now live!
            </Heading>
            <Text style={ctaTextStyle}>
              You can start using it immediately. Click the button below to dive
              into our comprehensive guide.
            </Text>
          </Section>

          <Section style={buttonContainerStyle}>
            <Text>
              Want to explore all the details? Click the button below to dive
              into our comprehensive guide
            </Text>
            <Button target="_blank" style={buttonStyle} href={link}>
              Learn More
            </Button>
          </Section>

          <Section style={footerSectionStyle}>
            <Text style={footerTextStyle}>
              Regards,
              <br />
              Boilerplate
            </Text>
          </Section>
        </Section>
      </Container>
    </Layout>
  );
};

const containerStyle: React.CSSProperties = {
  padding: "0 48px",
  maxWidth: "792px",
  margin: "0 auto",
};

const sectionStyle: React.CSSProperties = {
  margin: "56px 0",
};

const imageContainerStyle: React.CSSProperties = {
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "fit-content",
};

const imageStyle: React.CSSProperties = {
  width: "178px",
  height: "178px",
};

const textSectionStyle: React.CSSProperties = {
  margin: "40px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const headingStyle: React.CSSProperties = {
  margin: "0 0 56px 0",
  textAlign: "center",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#121212",
};

const greetingTextStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#121212",
  margin: "0 0 32px 0",
};

const descriptionTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19.36px",
  textAlign: "justify",
  margin: "0 0 16px 0",
};

const subHeadingStyle: React.CSSProperties = {
  margin: "16px 0",
  fontSize: "16px",
  color: "#121212",
};

const listStyle: React.CSSProperties = {
  listStyleType: "none",
  padding: 0,
};

const listItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  marginTop: "20px",
  fontSize: "14px",
  color: "#525252",
};

const iconStyle: React.CSSProperties = {
  width: "24px",
  height: "24px",
  marginRight: "8px",
};

const benefitTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#121212",
};

const ctaSectionStyle: React.CSSProperties = {
  backgroundColor: "#F97316",
  color: "#FAFAFA",
  textAlign: "center",
  padding: "39px",
  marginTop: "40px",
};

const ctaHeadingStyle: React.CSSProperties = {
  fontSize: "24px",
  margin: "0 0 16px 0",
};

const ctaTextStyle: React.CSSProperties = {
  fontSize: "16px",
  margin: "0 0 28px 0",
};

const buttonContainerStyle: React.CSSProperties = {
  textAlign: "center",
};

const buttonStyle: React.CSSProperties = {
  borderRadius: "8px",
  backgroundColor: "#F97316",
  color: "#FAFAFA",
  padding: "16px 32px",
  textAlign: "center",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "40px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

NewFeatureAnnouncement.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
} satisfies NewFeatureAnnouncementProperties;

export default NewFeatureAnnouncement;
