import {
  Container,
  Heading,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Separator } from "~/components/ui/separator";
import Layout from "../../layout/layout";

interface SupportTicketAcknowledgementProperties {
  title: string;
  username: string;
  image: string;
  description: string;
  link: string;
}

const SupportTicketAcknowledgement = ({
  title,
  username,
  image,
  description,
  link,
}: SupportTicketAcknowledgementProperties) => {
  return (
    <Layout>
      <Preview>{username}, Activate your account</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img src={image} alt="Activation" style={imageStyle} />
          </Section>

          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              {title}
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>{description}</Text>
            </Section>
          </Section>

          <Section style={summarySectionStyle}>
            <Text style={summaryHeadingStyle}>Resolution Summary</Text>
            <Text style={summaryTextStyle}>
              Your issue with the login process was due to a server
              configuration error. We have corrected the configuration, and you
              should now be able to log in without any issues.
            </Text>
          </Section>

          <Section style={nextStepsSectionStyle}>
            <Text style={nextStepsHeadingStyle}>Next Steps</Text>
            <Text style={nextStepsTextStyle}>
              If you have any further questions or concerns, feel free to reach
              out to our support team.
            </Text>
          </Section>

          <Section style={feedbackSectionStyle}>
            <Text style={feedbackTextStyle}>
              We value your feedback and would love to hear about your
              experience with our support team. Please take a moment to fill out
              our short survey:{" "}
              <Link style={feedbackLinkStyle} href={link}>
                Feedback Survey Link
              </Link>
            </Text>
          </Section>

          <Separator style={separatorStyle} />

          <Section style={contactSectionStyle}>
            <Text style={contactTextStyle}>
              For any additional support, you can contact us at:
            </Text>
            <Text style={contactInfoStyle}>
              <span style={contactLabelStyle}>Email: </span>
              support@boilerplate.com
            </Text>
            <Text style={contactInfoStyle}>
              <span style={contactLabelStyle}>Phone: </span>080boilerplate
            </Text>
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
  width: "100%",
  height: "auto",
};

const textSectionStyle: React.CSSProperties = {
  marginTop: "56px",
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

const summarySectionStyle: React.CSSProperties = {
  marginBottom: "28px",
  backgroundColor: "#F6F8FB",
  padding: "28px",
  borderRadius: "8px",
};

const summaryHeadingStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#121212",
  margin: "0 0 16px 0",
};

const summaryTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19.36px",
  textAlign: "justify",
};

const nextStepsSectionStyle: React.CSSProperties = {
  marginTop: "1rem",
  backgroundColor: "#F6F8FB",
  padding: "28px",
  borderRadius: "8px",
};

const nextStepsHeadingStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#121212",
  margin: "0 0 16px 0",
};

const nextStepsTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19.36px",
  textAlign: "justify",
};

const feedbackSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const feedbackTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19.36px",
  textAlign: "justify",
};

const feedbackLinkStyle: React.CSSProperties = {
  color: "#F97316",
  textDecoration: "underline",
};

const separatorStyle: React.CSSProperties = {
  margin: "28px 0",
  backgroundColor: "#E0E0E0",
};

const contactSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const contactTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19.36px",
  textAlign: "justify",
};

const contactInfoStyle: React.CSSProperties = {
  fontSize: "16px",
};

const contactLabelStyle: React.CSSProperties = {
  fontWeight: "700",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

SupportTicketAcknowledgement.PreviewProps = {
  title: "Your Support Ticket BP01733 Has Been Resolved",
  username: "John Doe",
  image: "https://imgur.com/dSnsvKy.png",
  link: "www.boilerplate.com",
  description:
    "We are pleased to inform you that your support ticket BP01733 has been successfully resolved.",
} satisfies SupportTicketAcknowledgementProperties;

export default SupportTicketAcknowledgement;
