import {
  Container,
  Heading,
  Img,
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
  price: string;
  username: string;
  link: string;
  tableData: ITemplateTableProperties;
  tableDataThree: ITemplateTableProperties;
}

const InvoiceTemplate = ({
  price,
  username,
  tableData,
  tableDataThree,
}: InvoiceTemplateProperties) => {
  return (
    <Layout>
      <Preview>{username}, your invoice receipt.</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={imageContainerStyle}>
            <Img
              src="https://imgur.com/SUrzZSw.png"
              alt="Invoice Image"
              style={imageStyle}
            />
          </Section>

          <Section>
            <Section style={paymentSectionStyle}>
              <Text style={paymentTextStyle}>
                We have received your payment.
              </Text>
              <Heading as="h5" style={priceHeadingStyle}>
                {price}
              </Heading>
            </Section>
            <Separator style={separatorStyle} />
            <Section style={tableSectionStyle}>
              <TemplateTable title={tableData.title} data={tableData.data} />
            </Section>
            <Separator style={separatorStyle} />
            <Section style={tableSectionStyle}>
              <TemplateTable
                title={tableDataThree.title}
                data={tableDataThree.data}
              />
            </Section>
            <Separator style={separatorStyle} />

            <Section style={contactSectionStyle}>
              <Text style={contactTextStyle}>
                Have any questions about your order?
              </Text>
              <Text style={contactDetailTextStyle}>
                Give us a call at{" "}
                <span style={contactDetailBold}>(+234)-456-7890</span> or Email
                us at <span style={contactDetailBold}>support@llaihng.com</span>
              </Text>
            </Section>
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

const paymentSectionStyle: React.CSSProperties = {
  backgroundColor: "#F6F8FB",
  padding: "40px",
  borderRadius: "8px",
  textAlign: "center",
};

const paymentTextStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#121212",
  margin: "0",
};

const priceHeadingStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "24px",
  color: "#121212",
};

const separatorStyle: React.CSSProperties = {
  margin: "28px 0",
  backgroundColor: "#e0e0e0",
};

const tableSectionStyle: React.CSSProperties = {
  marginBottom: "28px",
};

const contactSectionStyle: React.CSSProperties = {
  marginTop: "56px",
  color: "#121212",
};

const contactTextStyle: React.CSSProperties = {
  margin: "0 0 8px",
  fontWeight: "500",
  fontSize: "14px",
};

const contactDetailTextStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "12px",
};

const contactDetailBold: React.CSSProperties = {
  fontWeight: "600",
};

const footerSectionStyle: React.CSSProperties = {
  marginTop: "28px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

InvoiceTemplate.PreviewProps = {
  price: `$400.00`,
  username: "John Doe",
  link: "www.boilerplate.com",
  tableData: {
    title: "Order Summary",
    data: [
      {
        key: "Item",
        values: [`5`, `$200`],
      },
      {
        key: "Item",
        values: [`3`, `$120`],
      },
      {
        key: "VAT",
        values: [`10%`, `$32`],
      },
      {
        key: "Total",
        values: [`100%`, `$352`],
      },
    ],
  },
  tableDataThree: {
    title: "Payment Details",
    data: [
      {
        key: "Amount",
        values: [`$352`],
      },
      {
        key: "Payment Method",
        values: [
          <section
            key="payment"
            className="ml-auto flex w-fit items-center gap-1 text-sm"
          >
            <Img
              src={`https://imgur.com/Yayb0Zb.png`}
              alt="mastercard"
              className="h-[24px] w-[30px]"
            />
            <Text className="text-[14px]">
              Mastercard ending in{" "}
              <span className="text-[16px] font-[600]">5429</span>
            </Text>
          </section>,
        ],
      },
      {
        key: "Reference ID",
        values: [`R4558990`],
      },
      {
        key: "Date",
        values: [`July 17, 2024`],
      },
    ],
  },
} satisfies InvoiceTemplateProperties;

export default InvoiceTemplate;
