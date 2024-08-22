import {
  Button,
  Container,
  Heading,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../../layout/layout";

interface SubscriptionRenewalDisabledProperties {
  username: string;
  link: string;
  upgradeLink: string;
}

export const SubscriptionRenewalDisabled = ({
  username,
  link,
  upgradeLink,
}: SubscriptionRenewalDisabledProperties) => {
  return (
    <Layout>
      <Preview>{username}, subscription renewal disabled</Preview>
      <Container style={containerStyle}>
        <Section style={sectionStyle}>
          <Section style={textSectionStyle}>
            <Heading as="h5" style={headingStyle}>
              Subscription Renewal Disabled
            </Heading>

            <Section>
              <Text style={greetingTextStyle}>Hi {username},</Text>
              <Text style={descriptionTextStyle}>
                As requested, your next subscription renewal has been disabled.
                You will continue to enjoy benefits of this subscription until
                further notice.
              </Text>
              <Text style={descriptionTextStyle}>
                We are so sad to see you go. However, if you change your mind,
                you can always reactivate your subscription or upgrade your
                subscription plan.
              </Text>
            </Section>
          </Section>

          <Section className="item-center mx-auto my-[32px] flex max-w-[679px] flex-row justify-center px-[48px]">
            <Link className="md:mx-[20px]" href={link} target="_blank">
              <Button className="w-[100%] rounded-[8px] border border-[#F97316] bg-[#F97316] px-[2rem] py-[16px] text-[#FAFAFA] shadow-none md:w-fit">
                Send Another Active Link
              </Button>
            </Link>
            <Link className="md:mx-[20px]" href={upgradeLink} target="_blank">
              <button className="border-1 w-[100%] rounded-[8px] border border-[#F97316] bg-[transparent] py-[16px] text-[#F97316] shadow-none md:w-fit md:px-[2rem]">
                Upgrade Plan
              </button>
            </Link>
          </Section>

          <Section>
            <Text style={supportTextStyle}>
              If you have questions, please visit our{" "}
              <Link style={supportLinkStyle} href="/faqs">
                FAQs
              </Link>
              , or email us at{" "}
              <Link style={supportLinkStyle} href="mailto:help@boilerplate.com">
                help@boilerplate.com
              </Link>
              . Our team can answer questions about your subscription status. To
              unsubscribe from future subscription renewal reminders,{" "}
              <Link style={unsubscribeLinkStyle} href="/unsubscribe">
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

const containerStyle: React.CSSProperties = {
  padding: "0 48px",
  maxWidth: "792px",
  margin: "0 auto",
};

const sectionStyle: React.CSSProperties = {
  margin: "56px 0",
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
  marginTop: "56px",
};

const footerTextStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#121212",
};

const supportTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#525252",
  lineHeight: "19.36px",
  textAlign: "justify",
};

const supportLinkStyle: React.CSSProperties = {
  color: "#F97316",
  textDecoration: "underline",
};

const unsubscribeLinkStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#F97316",
  textDecoration: "underline",
};

SubscriptionRenewalDisabled.PreviewProps = {
  username: "John Doe",
  link: "www.boilerplate.com",
  upgradeLink: "www.boilerplate.com",
} satisfies SubscriptionRenewalDisabledProperties;

export default SubscriptionRenewalDisabled;
