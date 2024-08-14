import {
  Button,
  Container,
  Heading,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../../layout/layout";

interface EmailVerificationProperties {
  username: string;
  link: string;
}

export const EmailVerification = ({
  username,
  link,
}: EmailVerificationProperties) => {
  return (
    <Layout>
      <Preview>{username}, email verified</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src="https://imgur.com/NbCnF9l.png"
              alt="Verification"
              style={imageStyle}
            />
          </Section>

          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Email Verification
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                Thanks for registering your account with us at Boilerplate.
                Before we get started, we just need to confirm that this is you.
              </Text>
              <Text style={descriptionTextStyle}>
                This link will expire 30 minutes after this email has been sent.
                If you did not make this request, you can ignore this email.
              </Text>
            </Section>
          </Section>

          <Section style={buttonContainerStyle}>
            <Button target={"_blank"} style={buttonStyle} href={link}>
              Verify Account
            </Button>
          </Section>

          <Section style={linkContainerStyle}>
            <Text style={copyLinkTextStyle}>
              Or copy this link:
              <Link style={linkStyle} href={link}>
                {link}
              </Link>
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

const linkContainerStyle: React.CSSProperties = {
  marginTop: "40px",
  textAlign: "left",
};

const copyLinkTextStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: "#525252",
};

const linkStyle: React.CSSProperties = {
  color: "#F97316",
  textDecoration: "underline",
  wordBreak: "break-all",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

EmailVerification.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
} satisfies EmailVerificationProperties;

export default EmailVerification;
