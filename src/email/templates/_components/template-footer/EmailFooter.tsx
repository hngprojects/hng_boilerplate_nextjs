import {
  Column,
  Container,
  Hr,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";

const EmailFooter = () => (
  <Container style={footerContainer}>
    <Section>
      <Row style={socialLinksRow}>
        <Column align="center">
          <Link
            href="https://deployment.nextjs.boilerplate.hng.tech/"
            aria-label="Twitter"
          >
            <Img
              src="https://imgur.com/TKobTGb.png"
              alt="Twitter"
              style={socialIcon}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link
            href="https://deployment.nextjs.boilerplate.hng.tech/"
            aria-label="Instagram"
          >
            <Img
              src="https://imgur.com/FYp0z5Q.png"
              alt="Instagram"
              style={socialIcon}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link
            href="https://deployment.nextjs.boilerplate.hng.tech/"
            aria-label="TikTok"
          >
            <Img
              src="https://imgur.com/tekz4ix.png"
              alt="TikTok"
              style={socialIcon}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link
            href="https://deployment.nextjs.boilerplate.hng.tech/"
            aria-label="Reddit"
          >
            <Img
              src="https://imgur.com/TeEDDcy.png"
              alt="Reddit"
              style={socialIcon}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link
            href="https://deployment.nextjs.boilerplate.hng.tech/"
            aria-label="LinkedIn"
          >
            <Img
              src="https://imgur.com/a45KkgZ.png"
              alt="LinkedIn"
              style={socialIcon}
            />
          </Link>
        </Column>
      </Row>
    </Section>

    <Section>
      <Text style={paragraph}>
        Thank you for choosing Boilerplate. Need help?{" "}
        <Link
          href="https://deployment.nextjs.boilerplate.hng.tech/"
          style={link}
        >
          Contact our customer support
        </Link>
      </Text>
      <Hr style={divider} />
    </Section>

    <Section>
      <Text style={paragraph}>
        You are receiving this email because you signed up at{" "}
        <Link
          href="https://deployment.nextjs.boilerplate.hng.tech/"
          style={link}
        >
          Boilerplate.com
        </Link>
        . Want to change how you receive these emails?
      </Text>
      <Text style={paragraph}>
        You can{" "}
        <Link
          href="https://deployment.nextjs.boilerplate.hng.tech/"
          style={linkBold}
        >
          update your preferences
        </Link>{" "}
        or{" "}
        <Link
          href="https://deployment.nextjs.boilerplate.hng.tech/"
          style={linkBold}
        >
          unsubscribe from this list.
        </Link>
      </Text>
    </Section>
  </Container>
);

const footerContainer: React.CSSProperties = {
  backgroundColor: "#E1D6D666",
  padding: "32px 48px",
  textAlign: "left",
  fontSize: "14px",
  color: "#5B5B5D",
  maxWidth: "792px",
  margin: "0 auto",
};

const socialLinksRow: React.CSSProperties = {
  width: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "32px",
  marginTop: "32px",
};

const socialIcon: React.CSSProperties = {
  width: "24px",
  height: "24px",
  margin: "0 15px", // Reduce margin for smaller screens
};

const paragraph: React.CSSProperties = {
  margin: "0 0 16px 0",
  lineHeight: "1.6",
};

const link: React.CSSProperties = {
  color: "#5B5B5D",
  textDecoration: "underline",
};

const linkBold: React.CSSProperties = {
  color: "#5B5B5D",
  fontWeight: "bold",
  textDecoration: "underline",
};

const divider: React.CSSProperties = {
  border: "0",
  borderTop: "1px dashed #5B5B5D20",
  margin: "30px 0",
};

export default EmailFooter;
