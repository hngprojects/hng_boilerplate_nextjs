import {
  Container,
  Heading,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../../layout/layout";

interface AccountLinkExpiredProperties {
  username: string;
  link: string;
}

const AccountLinkExpired = ({
  username,
  link,
}: AccountLinkExpiredProperties) => {
  return (
    <Layout>
      <Container style={containerStyle}>
        <Preview>{username}, your account link has expired</Preview>
        <Section style={sectionStyle}>
          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Activation Link Expired
            </Heading>
            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                We noticed that your account activation link has expired. For
                your security, activation links are only valid for a specific
                time period.
              </Text>
              <Text style={descriptionTextStyle}>
                Don’t worry, you can easily request a new activation link by
                clicking the button below:
              </Text>
            </Section>
            <Section style={buttonSectionStyle}>
              <Link href={link} style={buttonStyle}>
                Send Another Active Link
              </Link>
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
  margin: "0 0 56px",
};

const textSectionStyle: React.CSSProperties = {
  marginTop: "40px",
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

const buttonSectionStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "32px",
};

const buttonStyle: React.CSSProperties = {
  display: "inline-block",
  width: "100%",
  maxWidth: "200px",
  padding: "16px",
  backgroundColor: "#F97316",
  color: "#FAFAFA",
  textAlign: "center",
  textDecoration: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "40px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

AccountLinkExpired.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
} satisfies AccountLinkExpiredProperties;

export default AccountLinkExpired;
