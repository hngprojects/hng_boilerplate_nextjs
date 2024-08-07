import {
  Button,
  Container,
  Heading,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

import Layout from "../../layout/layout";

interface AccountDeactivationProperties {
  username: string;
  link: string;
  deactivationDaysLeft: string;
  expireTime: string;
  data: Array<{
    key: string;
    value: string;
  }>;
}

const AccountDeactivation = ({
  username,
  link,
  deactivationDaysLeft,
  expireTime,
  data,
}: AccountDeactivationProperties) => {
  return (
    <Layout>
      <Container style={containerStyle}>
        <Preview>{username}, account deactivation notice</Preview>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src={"https://imgur.com/WQaP91T.png"}
              alt="deactivation-image"
              style={imageStyle}
            />
          </Section>

          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Account Deactivation Notice{" "}
              <span style={highlightStyle}>{deactivationDaysLeft}</span>
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                We noticed that you haven&apos;t logged into your Boilerplate
                account for quite some time. As part of our ongoing efforts to
                maintain a secure and efficient service, we will be deactivating
                inactive accounts.
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
                        src={"https://i.imgur.com/bmprMwh.png"}
                        alt="star"
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
              To keep your account active, simply log in before the deactivation
              date ({expireTime}). However, if you no longer wish to use your
              account, no further action is needed on your part.
            </Text>
          </Section>

          <Section style={buttonContainerStyle}>
            <Button target={"_blank"} style={buttonStyle} href={link}>
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
  height: "100%",
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

const highlightStyle: React.CSSProperties = {
  color: "#DC2626",
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
  alignItems: "start",
  fontSize: "14px",
  marginBottom: "1rem",
};

const iconContainerStyle: React.CSSProperties = {
  marginRight: "8px",
  flexShrink: "0",
};

const iconStyle: React.CSSProperties = {
  width: "24px",
  height: "24px",
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
  maxWidth: "300px", // Adjust max-width for larger screens
  textDecoration: "none",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "40px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

AccountDeactivation.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
  deactivationDaysLeft: "Two Days!",
  expireTime: "20th July, 2024 / 11:56pm",
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
} satisfies AccountDeactivationProperties;

export default AccountDeactivation;
