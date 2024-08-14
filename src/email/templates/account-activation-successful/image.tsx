import {
  Container,
  Heading,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

import Layout from "../../layout/layout";

interface AccountActivationSuccessfulProperties {
  username: string;
  link: string;
}

const AccountActivationSuccessful = ({
  username,
}: AccountActivationSuccessfulProperties) => {
  return (
    <Layout>
      <Container style={containerStyle}>
        <Preview>{username}, your account was activated successfully</Preview>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src={"https://imgur.com/3Yymb22.png"}
              alt="activation-success"
              style={imageStyle}
            />
          </Section>

          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Your Account is Now Active!
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                Congratulations! Your account with Boilerplate is now active and
                ready to use.
              </Text>
              <Text style={descriptionTextStyle}>
                We&apos;re thrilled to have you as part of our community and
                look forward to helping you make the most out of your experience
                with us.
              </Text>
              <Text style={descriptionTextStyle}>
                You can now log in and start exploring all the features and
                benefits we have to offer.
              </Text>
              <Text style={descriptionTextStyle}>
                Thank you for joining Boilerplate!
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
  maxWidth: "680px",
  margin: "0 auto",
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

const footerSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

AccountActivationSuccessful.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
} satisfies AccountActivationSuccessfulProperties;

export default AccountActivationSuccessful;
