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

interface PasswordResetProperties {
  username: string;
  link: string;
}

export const PasswordReset = ({ username, link }: PasswordResetProperties) => {
  return (
    <Layout>
      <Container style={containerStyle}>
        <Preview>{username}, reset your password.</Preview>

        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src="https://imgur.com/uPk3aq2.png"
              alt="Password Reset"
              style={imageStyle}
            />
          </Section>

          <Section>
            <Heading style={headingStyle}>Reset Your Password</Heading>

            <Section>
              <Text style={greetingStyle}>Hi {username},</Text>
              <Text style={descriptionStyle}>
                You recently requested to reset your password. If you did not
                make this request, you can ignore this email.
              </Text>
            </Section>
          </Section>

          <Section style={buttonSectionStyle}>
            <Text style={buttonTextStyle}>
              To reset your password, please click the button below.
            </Text>
            <Section style={buttonWrapperStyle}>
              <Button target={"_blank"} style={buttonStyle} href={link}>
                Reset password
              </Button>
            </Section>
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
  maxWidth: "316px",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
};

const headingStyle: React.CSSProperties = {
  margin: "56px 0",
  textAlign: "center",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#121212",
};

const greetingStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "16px",
  fontWeight: "600",
  color: "#121212",
};

const descriptionStyle: React.CSSProperties = {
  textAlign: "justify",
  fontSize: "14px",
  lineHeight: "19.36px",
  color: "#525252",
};

const buttonSectionStyle: React.CSSProperties = {
  textAlign: "center",
};

const buttonTextStyle: React.CSSProperties = {
  textAlign: "left",
  lineHeight: "19px",
  color: "#525252",
};

const buttonWrapperStyle: React.CSSProperties = {
  marginTop: "32px",
  textAlign: "center",
};

const buttonStyle: React.CSSProperties = {
  borderRadius: "8px",
  backgroundColor: "#F97316",
  padding: "16px",
  color: "#FAFAFA",
  textAlign: "center",
  textDecoration: "none",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

PasswordReset.PreviewProps = {
  username: "John Doe",
  link: "https://www.boilerplate.com/reset-password",
} satisfies PasswordResetProperties;

export default PasswordReset;
