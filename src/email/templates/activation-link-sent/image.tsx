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

interface ActivationLinkSentProperties {
  username: string;
  link: string;
}

const ActivationLinkSent = ({
  username,
  link,
}: ActivationLinkSentProperties) => {
  return (
    <Layout>
      <Preview>{username}, account link sent.</Preview>
      <Container className="responsive-container" style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src="https://imgur.com/nfyZfDY.png"
              alt="Activation"
              style={imageStyle}
            />
          </Section>

          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              New Activation Link Sent
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                We have sent you a new activation link for your Boilerplate
                account. Please click the button below to activate your account:
              </Text>
            </Section>
          </Section>

          <Section style={buttonContainerStyle}>
            <Button target="_blank" style={buttonStyle} href={link}>
              Activate My Account
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

const buttonContainerStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  marginTop: "28px",
};

const buttonStyle: React.CSSProperties = {
  borderRadius: "8px",
  backgroundColor: "#F97316",
  color: "#FAFAFA",
  padding: "16px",
  textAlign: "center",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

ActivationLinkSent.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
} satisfies ActivationLinkSentProperties;

export default ActivationLinkSent;
