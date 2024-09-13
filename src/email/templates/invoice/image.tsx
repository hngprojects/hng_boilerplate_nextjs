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

import { Separator } from "~/components/ui/separator";
import {
  ITemplateTableProperties,
  TemplateTable,
} from "../_components/template-table/TemplateTable";
import Layout from "../../layout/layout";

interface InvoiceTemplateProperties {
  username: string;
  link: string;
  tableData: ITemplateTableProperties;
  tableDataTwo: ITemplateTableProperties;
  tableDataThree: ITemplateTableProperties;
}

export const InvoiceTemplate = ({
  username,
  link,
  tableData,
  tableDataTwo,
  tableDataThree,
}: InvoiceTemplateProperties) => {
  return (
    <Layout>
      <Preview>{username}, your invoice receipt.</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src="https://imgur.com/a4XiXxo.png"
              alt="Invoice Image"
              style={imageStyle}
            />
          </Section>

          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Invoice
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                We hope you are doing well. Thank you for your recent purchase
                from Boilerplate. Please find your invoice attached to this
                email.
              </Text>
            </Section>
          </Section>

          <Section style={tableContainerStyle}>
            <TemplateTable title={tableData.title} data={tableData.data} />
          </Section>

          <Section style={tableContainerStyle}>
            <TemplateTable
              title={tableDataTwo.title}
              data={tableDataTwo.data}
            />
          </Section>
          <Separator className="my-[16px]" />
          <Section style={tableContainerStyle}>
            <TemplateTable
              title={tableDataThree.title}
              data={tableDataThree.data}
            />
          </Section>

          <Section style={buttonContainerStyle}>
            <Button target={"_blank"} style={buttonStyle} href={link}>
              Pay Now
            </Button>
          </Section>

          <Section style={linkContainerStyle}>
            <Text style={copyLinkTextStyle}>
              Or copy this link:
              <Link style={linkStyle} href={link}>
                {link}
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

const tableContainerStyle: React.CSSProperties = {
  margin: "28px 0",
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
  width: "150px",
};

const linkContainerStyle: React.CSSProperties = {
  marginTop: "40px",
  textAlign: "left",
};

const copyLinkTextStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: "#525252",
};

const linkStyle: React.CSSProperties = {
  color: "#F97316",
  textDecoration: "underline",
  wordBreak: "break-all",
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
    title: "Invoice Details",
    data: [
      {
        key: "Invoice Number",
        values: ["#EJ78465"],
      },
      {
        key: "Date of Issue",
        values: ["July 17, 2024"],
      },
      {
        key: "Due Date",
        values: ["July 19, 2024"],
      },
    ],
  },
  tableDataTwo: {
    title: "Order Summary",
    data: [
      {
        key: "Item",
        values: ["5", "$200"],
      },
      {
        key: "Item",
        values: ["3", "$120"],
      },
      {
        key: "VAT",
        values: ["10%", "$32"],
      },
      {
        key: "Total",
        values: ["100%", "$352"],
      },
    ],
  },
  tableDataThree: {
    title: "Payment Details",
    data: [
      {
        key: "Amount",
        values: ["$352"],
      },
      {
        key: "Payment Method",
        values: ["Bank"],
      },
      {
        key: "Bank Name",
        values: ["Guaranty Trust Bank"],
      },
      {
        key: "Account Number",
        values: ["0115917164"],
      },
      {
        key: "Account Name",
        values: ["Kingsley Solomon Ifijeh"],
      },
    ],
  },
} satisfies InvoiceTemplateProperties;

export default InvoiceTemplate;
