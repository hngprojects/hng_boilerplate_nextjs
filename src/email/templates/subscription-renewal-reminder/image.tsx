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

interface SubscriptionenewaleminderProperties {
  username: string;
  link: string;
  expiredTime: string;
}

const Subscriptionenewaleminder = ({
  username,
  link,
  expiredTime,
}: SubscriptionenewaleminderProperties) => {
  return (
    <Layout>
      <Container style={containerStyle}>
        <Preview>{username}, Subscription Renewal Reminder</Preview>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src="https://imgur.com/pXas02C.png"
              alt="Subscription Confirmed"
              style={imageStyle}
            />
          </Section>

          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Subscription Renewal Reminder
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                We hope you are enjoying your subscription, which will renew
                soon.
              </Text>
            </Section>
          </Section>

          <Section style={bannerSectionStyle}>
            <Text style={bannerTextStyle}>Your Renewal Date</Text>
            <Heading as="h2" style={bannerHeadingStyle}>
              {expiredTime}
            </Heading>
          </Section>

          <Section style={infoSectionStyle}>
            <Text style={infoTextStyle}>
              Your subscription for{" "}
              <span style={priceStyle}>$20.89/Bi-monthly features</span> will
              automatically renew on {expiredTime}. To avoid being charged, you
              should cancel at least a day before the renewal date. To learn
              more or cancel,{" "}
              <Link href={link} style={faqLinkStyle}>
                review subscription
              </Link>
            </Text>
            <Text style={infoTextStyle}>
              To keep your subscription, you can renew your plan for the next
              month.
            </Text>

            <Section style={buttonSectionStyle}>
              <Button target={"_blank"} style={buttonStyle} href={link}>
                Renew Subscription
              </Button>
            </Section>
          </Section>

          <Section style={contactSectionStyle}>
            <Text style={contactTextStyle}>
              If you have questions, please visit our{" "}
              <Link href="#" style={faqLinkStyle}>
                FAQs
              </Link>
              , or email us at{" "}
              <Link href="mailto:help@boilerplate.com" style={emailLinkStyle}>
                help@boilerplate.com
              </Link>
              . Our team can answer questions about your subscription status. To
              unsubscribe from future subscription renewal reminders,{" "}
              <Link href="#" style={unsubscribeLinkStyle}>
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

Subscriptionenewaleminder.defaultProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
  expiredTime: "17th September, 2024",
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
};

const descriptionTextStyle: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "19.36px",
  color: "#525252",
  textAlign: "justify",
  marginBottom: "32px",
};

const bannerSectionStyle: React.CSSProperties = {
  marginTop: "28px",
  backgroundColor: "#F97316",
  padding: "39px 0",
  textAlign: "center",
  color: "#FAFAFA",
};

const bannerTextStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "16px",
  fontWeight: "normal",
};

const bannerHeadingStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "24px",
  fontWeight: "normal",
};

const infoSectionStyle: React.CSSProperties = {
  marginTop: "32px",
};

const infoTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19px",
};

const priceStyle: React.CSSProperties = {
  fontWeight: "600",
};

const buttonSectionStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "32px",
};

const buttonStyle: React.CSSProperties = {
  borderRadius: "8px",
  backgroundColor: "#F97316",
  color: "#FAFAFA",
  padding: "16px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  width: "fit-content",
  maxWidth: "300px",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "56px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

const contactSectionStyle: React.CSSProperties = {
  marginTop: "32px",
};

const contactTextStyle: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "19.36px",
  color: "#525252",
  textAlign: "justify",
};

const faqLinkStyle: React.CSSProperties = {
  color: "#F67316",
  fontWeight: "600",
};

const emailLinkStyle: React.CSSProperties = {
  color: "#F67316",
};

const unsubscribeLinkStyle: React.CSSProperties = {
  color: "#525252",
  fontWeight: "600",
  textDecoration: "underline",
};

export default Subscriptionenewaleminder;
