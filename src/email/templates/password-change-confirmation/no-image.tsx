import {
  Container,
  Heading,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../../layout/layout";

interface PasswordChangeConfirmation {
  username: string;
  link: string;
}

export const PasswordConfirmation = ({
  username,
  link,
}: PasswordChangeConfirmation) => {
  return (
    <Layout>
      <Preview>{username}, password reset completed</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Password Reset Complete
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                The password for your Boilerplate account has been successfully
                changed. You can now continue to access your account as usual.
              </Text>
              <Text style={descriptionTextStyle}>
                If this wasn&apos;t done by you, please immediately reset the
                password to your Boilerplate account by following the steps
                below:
              </Text>
            </Section>

            <Section style={listSectionStyle}>
              <ol style={listStyle}>
                <li style={listItemStyle}>
                  Recover your account here:
                  <Link style={linkStyle} href={link}>
                    {link}
                  </Link>
                </li>
                <li style={listItemStyle}>
                  Review your phone numbers and email addresses and remove the
                  ones that don’t belong to you once you gain access to your
                  account.
                </li>
              </ol>
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

const listSectionStyle: React.CSSProperties = {
  marginTop: "32px",
  textAlign: "left",
};

const listStyle: React.CSSProperties = {
  paddingLeft: "16px",
};

const listItemStyle: React.CSSProperties = {
  marginBottom: "16px",
};

const linkStyle: React.CSSProperties = {
  color: "#F97316",
  textDecoration: "underline",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

PasswordConfirmation.PreviewProps = {
  username: "John Doe",
  link: "https://login.boilerplate.com/forgot",
} satisfies PasswordChangeConfirmation;

export default PasswordConfirmation;
