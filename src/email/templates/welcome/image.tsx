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

interface IProperties {
  username: string;
  link: string;
}

export default function WelcomeEmail(properties: IProperties) {
  const { link, username } = properties;

  return (
    <Layout>
      <Preview>{username} welcome to Boilerplate</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src="https://imgur.com/0A9w5YT.png"
              alt="marketing"
              style={imageStyle}
            />
          </Section>

          <Section style={headingSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Welcome to Boilerplate
            </Heading>
            <Text style={subHeadingStyle}>Thanks for signing up</Text>
          </Section>

          <Section>
            <Text style={greetingTextStyle}>Hi {username},</Text>
            <Text style={descriptionTextStyle}>
              We&apos;re thrilled to have you join us. Experience quality and
              innovation like never before. Our product is made to fit your
              needs and make your life easier.
            </Text>
          </Section>

          <Section style={listSectionStyle}>
            <Heading as="h6" style={listHeadingStyle}>
              Here’s what you can look forward to
            </Heading>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <div style={iconContainerStyle}>
                  <Img
                    src="https://i.imgur.com/bmprMwh.png"
                    alt="star"
                    style={iconStyle}
                  />
                </div>
                <div>
                  <span style={listItemTitleStyle}>Exclusive Offers: </span>
                  <span style={listItemDescriptionStyle}>
                    Enjoy special promotions and discounts available only to our
                    members.
                  </span>
                </div>
              </li>
              <li style={listItemStyle}>
                <div style={iconContainerStyle}>
                  <Img
                    src="https://i.imgur.com/bmprMwh.png"
                    alt="star"
                    style={iconStyle}
                  />
                </div>
                <div>
                  <span style={listItemTitleStyle}>Exclusive Offers: </span>
                  <span style={listItemDescriptionStyle}>
                    Enjoy special promotions and discounts available only to our
                    members.
                  </span>
                </div>
              </li>
              <li style={listItemStyle}>
                <div style={iconContainerStyle}>
                  <Img
                    src="https://i.imgur.com/bmprMwh.png"
                    alt="star"
                    style={iconStyle}
                  />
                </div>
                <div>
                  <span style={listItemTitleStyle}>Exclusive Offers: </span>
                  <span style={listItemDescriptionStyle}>
                    Enjoy special promotions and discounts available only to our
                    members.
                  </span>
                </div>
              </li>
            </ul>
          </Section>

          <Section style={buttonContainerStyle}>
            <Button target={"_blank"} style={buttonStyle} href={link}>
              Learn More About us
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
}

const sectionStyle: React.CSSProperties = {
  margin: "56px 0",
  width: "100%",
  maxWidth: "678px",
  padding: "56px 0",
};

const imageContainerStyle: React.CSSProperties = {
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "534px",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "792px",
  padding: "0 48px",
  margin: "0 auto",
};

const headingSectionStyle: React.CSSProperties = {
  margin: "56px 0",
  textAlign: "center",
};

const headingStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#121212",
};

const subHeadingStyle: React.CSSProperties = {
  marginTop: "12px",
  fontSize: "1rem",
  color: "#121212",
};

const greetingTextStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#121212",
};

const descriptionTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19.36px",
  textAlign: "justify",
  margin: "16px 0",
};

const listSectionStyle: React.CSSProperties = {
  marginTop: "32px",
  width: "100%",
};

const listHeadingStyle: React.CSSProperties = {
  marginBottom: "20px",
  marginTop: "16px",
  fontSize: "16px",
  color: "#121212",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: "0",
};

const listItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "start",
  fontSize: "14px",
  marginBottom: "20px",
};

const iconContainerStyle: React.CSSProperties = {
  marginRight: "8px",
};

const iconStyle: React.CSSProperties = {
  width: "24px",
  height: "24px",
};

const listItemTitleStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

const listItemDescriptionStyle: React.CSSProperties = {
  color: "#525252",
  lineHeight: "19.36px",
};

const buttonContainerStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "32px",
};

const buttonStyle: React.CSSProperties = {
  borderRadius: "8px",
  backgroundColor: "#F97316",
  color: "#FAFAFA",
  padding: "16px",
  textAlign: "center",
  width: "fit-content",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "32px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

WelcomeEmail.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
} satisfies IProperties;
