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

interface SubscriptionCancelConfirmationProperties {
  username: string;
  link: string;
  data: Array<{
    key: string;
    value: string;
  }>;
}

export const SubscriptionCancelConfirmation = ({
  username,
  link,
  data,
}: SubscriptionCancelConfirmationProperties) => {
  return (
    <Layout>
      <Preview>{username}, subscription cancelled</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src="https://imgur.com/K5yvea6.png"
              alt="Subscription Cancelled"
              style={imageStyle}
            />
          </Section>

          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Subscription Cancelled
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                We regret to inform you that your subscription has been
                cancelled. We appreciate your support and hope you’ve enjoyed
                our services during your subscription period.
              </Text>
            </Section>
            <Section>
              <ul style={listStyle}>
                {data?.map((userData, index) => (
                  <li key={index} style={listItemStyle}>
                    <div style={iconContainerStyle}>
                      <Img
                        src="https://i.imgur.com/bmprMwh.png"
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

          <Section style={buttonContainerStyle}>
            <Button target="_blank" style={buttonStyle} href={link}>
              Proceed to Account
            </Button>
          </Section>

          <Section style={textSectionStyle}>
            <Text>
              If you have any questions or need further assistance, please don’t
              hesitate to reach out to our customer{" "}
              <Link style={supportLinkStyle} href="/support">
                support
              </Link>{" "}
              team or send a mail to us on{" "}
              <Link style={supportLinkStyle} href="/">
                boilerplate@gmail.com.
              </Link>{" "}
              Thank you for being a part of our community. We hope to serve you
              again in the future!
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

const listStyle: React.CSSProperties = {
  margin: "0",
  padding: "0",
  listStyleType: "none",
};

const listItemStyle: React.CSSProperties = {
  marginTop: "1rem",
  display: "flex",
  alignItems: "start",
  fontSize: "16px",
};

const iconContainerStyle: React.CSSProperties = {
  marginRight: "0.5rem",
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

const supportLinkStyle: React.CSSProperties = {
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

SubscriptionCancelConfirmation.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
  data: [
    {
      key: "Subscription ID",
      value: "123456",
    },
    {
      key: "Subscription Plan",
      value: "Bi-monthly Feature",
    },
    {
      key: "Cancellation Date",
      value: "17th July, 2024",
    },
  ],
} satisfies SubscriptionCancelConfirmationProperties;

export default SubscriptionCancelConfirmation;
