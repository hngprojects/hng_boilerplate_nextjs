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

interface SubscriptionenewalFailedProperties {
  username: string;
  link: string;
  data: Array<{
    value: string;
  }>;
}

const SubscriptionenewalFailed = ({
  username,
  link,
  data,
}: SubscriptionenewalFailedProperties) => {
  return (
    <Layout>
      <Container style={containerStyle}>
        <Preview>{username}, subscription renewal failed</Preview>
        <Section style={sectionStyle}>
          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Subscription Renewal Failed
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                We are having some trouble processing your subscription renewal
                payment for your Bi-monthly Features. This could be because of
                either of the following reasons:
              </Text>
            </Section>

            <Section style={detailsSectionStyle}>
              <ul style={listStyle}>
                {data.map((userData, index) => (
                  <li key={index} style={listItemStyle}>
                    <div style={iconContainerStyle}>
                      <Img
                        src="https://i.imgur.com/bmprMwh.png"
                        alt="star"
                        style={iconStyle}
                      />
                    </div>
                    <div>
                      <span style={valueStyle}>{userData.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>
          </Section>

          <Section style={infoSectionStyle}>
            <Text style={infoTextStyle}>
              To keep enjoying your Bi-monthly Features, please check your bank
              or update your payment details.
            </Text>

            <Section style={buttonContainerStyle}>
              <Button target={"_blank"} style={buttonStyle} href={link}>
                Update Payment Details
              </Button>
            </Section>
          </Section>

          <Section style={contactSectionStyle}>
            <Text style={contactTextStyle}>
              If you have questions, please visit our{" "}
              <Link href="#" style={linkStyle}>
                FAQs
              </Link>
              , or email us at{" "}
              <Link href="mailto:help@boilerplate.com" style={linkStyle}>
                help@boilerplate.com
              </Link>
              . Our team can answer questions about your subscription status. To
              unsubscribe from future subscription renewal reminders,{" "}
              <Link href="#" style={linkStyle}>
                click here.
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

SubscriptionenewalFailed.defaultProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
  data: [
    {
      value: "Your payment card has been blocked by your bank.",
    },
    {
      value: "Your payment card has expired.",
    },
    {
      value: "You have insufficient funds in your account.",
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
  width: "24px",
  height: "24px",
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

const contactSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const contactTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19.36px",
  textAlign: "justify",
};

const linkStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#F67316",
  textDecoration: "underline",
};

export default SubscriptionenewalFailed;
