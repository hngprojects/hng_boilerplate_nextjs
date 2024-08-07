import {
  Button,
  Container,
  Heading,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { TemplateTable } from "../_components/template-table/TemplateTable";
import Layout from "../../layout/layout";

interface InvoiceTemplateProperties {
  username: string;
  link: string;
  tableData: {
    data: {
      key: string;
      values: JSX.Element[];
    }[];
  };
}

export const InvoiceTemplate = ({
  username,
  link,
  tableData,
}: InvoiceTemplateProperties) => {
  return (
    <Layout>
      <Preview>{username}, your invoice receipt</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Your ticket has been opened
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                Thank you for contacting our support team. A support ticket has
                now been opened for your request. You will be notified when a
                response is made by email. The details of your ticket are shown
                below.
              </Text>
            </Section>
          </Section>

          <Section style={tableContainerStyle}>
            <TemplateTable data={tableData.data} />
          </Section>

          <Section style={linkSectionStyle}>
            <Text style={linkTextStyle}>
              You can easily review your ticket{" "}
              <Link style={linkStyle} href={link}>
                here
              </Link>
            </Text>
          </Section>

          <Section style={buttonContainerStyle}>
            <Button target={"_blank"} style={buttonStyle} href={link}>
              Learn More About Us
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

const tableContainerStyle: React.CSSProperties = {
  marginBottom: "28px",
};

const linkSectionStyle: React.CSSProperties = {
  marginTop: "56px",
  textAlign: "center",
};

const linkTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#121212",
};

const linkStyle: React.CSSProperties = {
  color: "#F97316",
  textDecoration: "underline",
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

const footerSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

InvoiceTemplate.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
  tableData: {
    data: [
      {
        key: "Ticket ID",
        values: [
          <Text key="ticket-id" className="m-0">
            BP01733
          </Text>,
        ],
      },
      {
        key: "Subject",
        values: [
          <Text key="subject" className="m-0">
            Account Login issue
          </Text>,
        ],
      },
      {
        key: "Description",
        values: [
          <Text key="description" className="m-0">
            I tried to log into my account and I have been getting errors
          </Text>,
        ],
      },
      {
        key: "Priority",
        values: [
          <Text key="priority" className="m-0 text-destructive">
            High
          </Text>,
        ],
      },
      {
        key: "Status",
        values: [
          <Text key="status" className="m-0 text-success">
            Open
          </Text>,
        ],
      },
    ],
  },
} satisfies InvoiceTemplateProperties;

export default InvoiceTemplate;
