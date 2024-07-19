import { Button, Img, Link, Section, Text } from "@react-email/components";

export default function Email() {
  return (
    <div style={EmailContainerStyles}>
      <Section style={{ padding: "0 5.6rem" }}>
        <Img
          style={EmailImgStyles}
          src="/pana.svg"
          alt="Reminder Image"
          width={200}
          height={178}
        />
        <Text style={EmailHeadingStyles}>Subscription Renewal Reminder</Text>
        <Text style={EmailNameStyles}>Hi John Doe,</Text>
        <Text style={{ ...EmailTextStyles, marginBottom: "2.8rem" }}>
          We hope you are enjoying your subscription, which will renew soon.
        </Text>
      </Section>
      <Section style={EmailRenewStyles}>
        <Text style={EmailRenewTextStyles}>Your Renewal Date</Text>
        <Text style={EmailRenewDateStyles}>17th September, 2024</Text>
      </Section>
      <Section style={{ padding: "0 5.6rem" }}>
        <Text style={{ ...EmailTextStyles, marginTop: "2.8rem" }}>
          Your subscription for{" "}
          <span style={{ fontWeight: "600" }}>$20.89/Bi-monthly features</span>{" "}
          will automatically renew on 17th September, 2024. To avoid being
          charged, you should cancel at least a day before the renewal date. To
          learn more or cancel,{" "}
          <Link href="/" style={{ fontWeight: "600", color: "#F97316" }}>
            review subscription.
          </Link>
        </Text>
        <Text style={EmailTextStyles}>
          To keep your subscription, you can renew your plan for the next month.
        </Text>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button style={RenewButtonStyles}>Renew Subscription</Button>
        </div>
      </Section>
      <Section style={{ padding: "0 5.6rem" }}>
        <Text style={{ ...EmailBoldTextStyles, margin: "0" }}>Regards,</Text>
        <Text style={{ ...EmailBoldTextStyles, marginTop: "0" }}>
          Boilerplate
        </Text>
        <Text style={{ ...EmailTextStyles, margin: "5.6rem 0" }}>
          If you have questions, please visit our{" "}
          <Link href="/">
            <strong style={{ color: "#F97316", fontWeight: "600" }}>
              FAQs
            </strong>
          </Link>
          , or email us at{" "}
          <Link href="/">
            <span style={{ color: "#F97316" }}>help@boilerplate.com</span>
          </Link>
          . Our team can answer questions about your subscription status. To
          unsubscribe from future subscription renewal reminders,{" "}
          <Link href="/" style={EmailLinkStyles}>
            click here
          </Link>
          .
        </Text>
      </Section>
    </div>
  );
}

const EmailTextStyles = {
  fontSize: "1.4rem",
  lineHeight: "1.5",
  fontWeight: 400,
};

const EmailContainerStyles = {
  width: "70rem",
};

const EmailImgStyles = {
  display: "block",
  margin: "5.6rem auto",
};

const EmailHeadingStyles = {
  color: "#0A0A0A",
  fontSize: "2.4rem",
  fontWeight: "600",
  textAlign: "center" as const,
  marginBottom: "5.6rem",
};

const EmailNameStyles = {
  color: "#111",
  fontSize: "1.8rem",
  fontWeight: "600",
  marginBottom: "1.5rem",
};

const EmailRenewStyles = {
  backgroundColor: "#F97316",
  color: "#FFFFFF",
  padding: "4rem 0",
};

const EmailRenewTextStyles = {
  margin: "0",
  textAlign: "center" as const,
  fontSize: "2.4rem",
  fontWeight: "500",
  marginBottom: "1.5rem",
};

const EmailRenewDateStyles = {
  margin: "0",
  textAlign: "center" as const,
  fontSize: "3.5rem",
  fontWeight: "700",
  lineHeight: "1.3",
};

const RenewButtonStyles = {
  backgroundColor: "#F97316",
  color: "#FFFFFF",
  fontSize: "1.4rem",
  textAlign: "center" as const,
  cursor: "pointer",
  padding: "1rem 3.5rem",
  borderRadius: "0.8rem",
  marginTop: "1.5rem",
  marginBottom: "5.6rem",
};

const EmailBoldTextStyles = {
  color: "#111",
  fontWeight: "500",
};

const EmailLinkStyles = {
  fontWeight: "600",
  color: "rgba(17, 17, 17, 0.90)",
  textDecoration: "underline",
};
