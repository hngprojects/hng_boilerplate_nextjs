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
import React from "react";

import Layout from "../../layout/layout";

interface AccountDeactivationInactivityProperties {
  username: string;
  link: string;
  data: Array<{
    key: string;
    value: string;
  }>;
}

const AccountDeactivationInactivity = ({
  username,
  link,
  data,
}: AccountDeactivationInactivityProperties) => {
  return (
    <Layout>
      <Container style={containerStyle}>
        <Preview>
          {username}, your account was deactivated due to inactivity
        </Preview>
        <Section style={sectionStyle}>
          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Account Deactivation Notice
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                We wanted to inform you that your Boilerplate account has been
                deactivated due to a prolonged period of inactivity.
              </Text>
            </Section>

            <Section style={detailsSectionStyle}>
              <Text style={detailsHeadingStyle}>
                Your deactivation details:
              </Text>
              <ul style={listStyle}>
                {data.map((userData, index) => (
                  <li key={index} style={listItemStyle}>
                    <div style={iconContainerStyle}>
                      <Img
                        src="https://imgur.com/Lolu1on.png"
                        alt="bullet"
                        style={iconStyle}
                      />
                    </div>
                    <div>
                      <span style={keyStyle}>{userData.key}:</span>
                      <span style={valueStyle}> {userData.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>
          </Section>

          <Section style={infoSectionStyle}>
            <Text style={infoTextStyle}>
              If you would like to re-activate your account, you can easily do
              so by contacting our support team via the details below.
            </Text>
            <Text style={infoTextStyle}>
              Give us a call at <span>(+234)-456-7890</span> or shoot us an
              email at{" "}
              <Link href="mailto:support@llaihng.com" style={linkStyle}>
                support@llaihng.com
              </Link>
            </Text>
            <Text style={infoTextStyle}>
              We value your membership and would love to have you back.
            </Text>
          </Section>

          <Section style={buttonContainerStyle}>
            <Button target={"_blank"} style={buttonStyle} href={link}>
              Reactivate My Account
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

AccountDeactivationInactivity.defaultProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
  expireTime: "17th September, 2024",
  data: [
    {
      key: "Account Email",
      value: "johndoe@gmail.com",
    },
    {
      key: "Last Active",
      value: "17th June, 2024 / 11:56pm",
    },
    {
      key: "Deactivation Date",
      value: "20th July, 2024 / 11:56pm",
    },
  ],
};

const sectionStyle: React.CSSProperties = {
  margin: "0 0 56px",
};

const containerStyle: React.CSSProperties = {
  padding: "0 48px",
  maxWidth: "792px",
  margin: "0 auto",
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

const detailsSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const detailsHeadingStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#121212",
  margin: "0",
  marginBottom: "20px",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  paddingLeft: "0",
  margin: "0",
};

const listItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  marginBottom: "1rem",
};

const iconContainerStyle: React.CSSProperties = {
  marginRight: "8px",
  flexShrink: "0",
};

const iconStyle: React.CSSProperties = {
  width: "10px",
  height: "10px",
};

const keyStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

const valueStyle: React.CSSProperties = {
  color: "#525252",
};

const infoSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const infoTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19.36px",
  textAlign: "left",
  marginBottom: "28px",
};

const buttonContainerStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  marginTop: "32px",
};

const buttonStyle: React.CSSProperties = {
  borderRadius: "8px",
  backgroundColor: "#F97316",
  color: "#FAFAFA",
  padding: "16px",
  textAlign: "center",
  display: "inline-block",
  width: "fit-content",
  maxWidth: "300px",
  textDecoration: "none",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "40px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

const linkStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#525252",
  textDecoration: "underline",
};

export default AccountDeactivationInactivity;
