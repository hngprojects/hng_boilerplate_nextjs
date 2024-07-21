"use client";

import {
  Column,
  Container,
  Heading,
  Hr,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import Image from "next/image";
import { PaymentReceiptProperties } from "./paymentWrapper";



function PaymentReceipt({
  title,
  orderSummaryDetails,
  paymentDetails,
  amount,
}: PaymentReceiptProperties) {
  return (
    <Container
      style={{ maxWidth: window.innerWidth <= 430 ? "26.875rem" : "100%" }}
      className="mx-auto"
    >
      <Column className="mx-auto flex w-full items-center justify-center gap-x-[0.625rem] bg-[#E1D6D6] pb-[2.875rem] pt-[2.938rem]">
        <Img src={`/static/Logo.png`} width="20" height="20" alt="Stripe" />
        <Column className="relative h-[1.125rem] w-[1.125rem] text-center">
          <Image src={`/images/payment-receipt-email-template/Logo.png`} alt="bollerplate logo" fill />
        </Column>

        <Heading lang="en" dir="ltr" className="text-[1.5rem] font-semibold">
          Bollerplate.
        </Heading>
      </Column>
      <Column className="lg:max-w=[80%] mx-auto flex flex-col items-center px-[2.25rem] md:px-[3.5rem]">
        <Column className="relative mt-[2.5rem] h-[8.875rem] w-[11.735rem] md:mt-[2.25rem] md:h-[11.125rem] md:w-[14.75rem]">
          <Image src={`/images/payment-receipt-email-template/online.png`} alt="online payment" fill />
        </Column>
        <Column className="my-[1.25rem] w-full bg-[#F6F8FB] py-[1.5rem] text-center md:my-[1.875rem] md:py-[2.5rem]">
          <Text
            style={{
              fontSize: window.innerWidth <= 430 ? "1rem" : "1.25rem",
              margin: "0",
            }}
            className="font-semibold text-[#434343]"
          >
            We have recieve your payment of
          </Text>
          <Text
            style={{ fontSize: "1.5rem", margin: "1.25rem 0 0 0" }}
            className="block font-bold text-[#0A0A0A]"
          >
            ${amount}
          </Text>
        </Column>
        <Section className="w-full">
          <Hr className="mt-[1.125rem] h-[1px] w-full bg-[#CBD5E1]" />
          <Heading className="mb-[1rem] mt-[1.75rem] font-semibold md:text-[1.125rem]">
            {title}
          </Heading>
        </Section>
        <Column className="w-full rounded-[8px] bg-[#F6F8FB] px-[0.938rem] py-[1.25rem]">
          {orderSummaryDetails.map((details, index) => (
            <>
              <Row key={index}>
                <Column className="w-[33.3%] text-start text-[0.875rem] text-[#434343] md:w-[63%]">
                  {details.item}
                </Column>
                <Column className="w-[33.3%] text-center text-[#434343] md:w-[19%]">
                  {details.quantity}
                </Column>
                <Column className="w-[33.3%] text-end font-semibold md:w-[19%]">
                  ${details.price}
                </Column>
              </Row>
              {index === orderSummaryDetails.length - 1 ? (
                ""
              ) : (
                <Hr className="my-[1rem] h-[1px] w-full bg-[#CBD5E1]" />
              )}
            </>
          ))}
        </Column>
        <Section className="w-full">
          <Hr className="mt-[1.75rem] h-[1px] w-full bg-[#CBD5E1]" />
          <Heading className="mb-[1rem] mt-[1.75rem] font-semibold">
            Payment Details
          </Heading>
        </Section>
        <Column className="w-full rounded-[8px] bg-[#F6F8FB] px-[0.938rem] py-[1.25rem]">
          {paymentDetails.map((details, index) => (
            <>
              <Row key={index}>
                <Column className="text-start text-[0.875rem] text-[#434343]">
                  {details.label}
                </Column>
                <Column className="flex items-center justify-end text-end font-semibold">
                  {details.label === "Payment Method" && (
                    <>
                      <Column className="relative hidden h-[1.5rem] w-[1.93rem] text-center md:inline">
                        <Image src={`/images/payment-receipt-email-template/masterCard.png`} alt="mastercard" fill />{" "}
                      </Column>
                      <Text
                        style={{
                          fontSize:
                            window.innerWidth <= 430 ? "0.75rem" : "0.875rem",
                          margin: "0",
                        }}
                      >
                        &nbsp;Mastercard ending in &nbsp;
                      </Text>
                    </>
                  )}
                  <Text style={{ fontSize: "1rem", margin: "0" }}>
                    {" "}
                    {details.value}
                  </Text>
                </Column>
              </Row>
              {index === paymentDetails.length - 1 ? (
                ""
              ) : (
                <Hr className="my-[1rem] h-[1px] w-full bg-[#CBD5E1]" />
              )}
            </>
          ))}
          {/* <Row>
            <Column className="text-start text-[0.875rem] text-[#434343]">
              Payment Method
            </Column>
            <Column className="text-end font-semibold">$120</Column>
          </Row>
          <Hr className="my-[1rem] h-[1px] w-full bg-[#CBD5E1]" />
          <Row>
            <Column className="text-start text-[0.875rem] text-[#434343]">
              Reference ID
            </Column>
            <Column className="flex items-center justify-end text-end font-semibold">
              <Column className="relative hidden h-[1.5rem] w-[1.93rem] text-center md:inline">
                <Image src={masterCard} alt="bollerplate logo" fill />{" "}
              </Column>
              <Text
                style={{
                  fontSize: window.innerWidth <= 430 ? "0.75rem" : "0.875rem",
                  margin: "0",
                }}
              >
                &nbsp;Mastercard ending in &nbsp;
              </Text>
              <Text style={{ fontSize: "1rem", margin: "0" }}> R4558990</Text>
            </Column>
          </Row>
          <Hr className="my-[1rem] h-[1px] w-full bg-[#CBD5E1]" />
          <Row className="bg-[#F6F8FB]">
            <Column className="text-start text-[0.875rem] text-[#434343]">
              DATE
            </Column>
            <Column className="text-end font-semibold">July 17, 2024</Column>
          </Row> */}
        </Column>
        <Hr className="mt-[1.75rem] h-[1px] w-full bg-[#CBD5E1]" />
        <Column className="w-full py-[2.5rem] md:py-[3.5rem]">
          <Heading className="text-[1rem] font-medium">
            Have any questions about your order?
          </Heading>
          <Column className="mt-[0.5rem] flex flex-wrap text-[#424242]">
            <Text style={{ margin: "0" }} className="m-0 whitespace-nowrap">
              Give us a call at &nbsp;
            </Text>
            <Text
              style={{ margin: "0" }}
              className="m-0 whitespace-nowrap font-medium text-[#0A0A0A]"
            >
              (+234)-456-7890 &nbsp;
            </Text>
            <Text style={{ margin: "0" }} className="m-0 whitespace-nowrap">
              or Email us at &nbsp;
            </Text>
            <Text
              style={{ margin: "0" }}
              className="m-0 whitespace-nowrap font-medium text-[#0A0A0A]"
            >
              support@llaihng.com
            </Text>
          </Column>
        </Column>
        <Column className="mb-[3rem] flex w-full flex-col gap-[0.5rem]">
          <Text style={{ margin: "0" }} className="font-medium">
            Regards,
          </Text>
          <Text style={{ margin: "0" }} className="font-medium">
            Bollerplate
          </Text>
        </Column>
      </Column>
      <Column className="block bg-[#F3EFEF] py-[2rem]">
        <Column className="mx-auto flex max-w-[20.875rem] flex-col items-center md:max-w-[43.375rem]">
          <Column className="mx-auto flex items-center gap-[2.063rem] text-center">
            <Column className="relative h-[1.5rem] w-[1.5rem] text-center">
              <Image src={`/images/payment-receipt-email-template/twitter.png`} alt="twitter" fill />
            </Column>
            <Column className="relative h-[1.5rem] w-[1.5rem] text-center">
              <Image src={`/images/payment-receipt-email-template/instagram.png`} alt="instagram" fill />
            </Column>
            <Column className="relative h-[1.5rem] w-[1.5rem] text-center">
              <Image src={`/images/payment-receipt-email-template/tiktok.png`} alt="tiktok" fill />
            </Column>
            <Column className="relative h-[1.5rem] w-[1.5rem] text-center">
              <Image src={`/images/payment-receipt-email-template/Logo.png`} alt="bird" fill />
            </Column>
            <Column className="relative h-[1.5rem] w-[1.5rem] text-center">
              <Image src={`/images/payment-receipt-email-template/Logo.png`} alt="linkedin" fill />
            </Column>
          </Column>
          <Column className="mb-[1.875rem] w-full border-b-[1px] border-dashed border-[#5B5B5D] py-[1.875rem] md:flex md:gap-[0.3rem]">
            <Text style={{ margin: "0" }} className="text-[#5B5B5D]">
              Thank you for choosing “Boilerplate”. Need help?{" "}
            </Text>
            <Link
              href="https://example.com"
              style={{
                margin: "0",
                color: "#111111",
                textDecoration: "underline",
              }}
              className="text-[0.875rem] font-semibold"
            >
              Contact our customer support
            </Link>
          </Column>

          <Text
            style={{ margin: "0" }}
            className="w-full pb-[0.5rem] text-[#5B5B5D]"
          >
            You are receiving this email because you signed up at
            Boilerplate.com. Want to change how you receive these emails?
          </Text>

          <Text
            style={{ margin: "0.5rem 0 0 0" }}
            className="w-full text-[#424242]"
          >
            You can{" "}
            <Text
              style={{ margin: "0" }}
              className="inline font-semibold text-[#111111]"
            >
              update your preferences
            </Text>
            or{" "}
            <Text
              style={{ margin: "0" }}
              className="inline font-semibold text-[#111111]"
            >
              unsubscribe from this list.
            </Text>
          </Text>
        </Column>
      </Column>
    </Container>
  );
}

export default PaymentReceipt;
