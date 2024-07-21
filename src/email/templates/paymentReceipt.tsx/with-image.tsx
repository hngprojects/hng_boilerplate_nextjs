import { Body, Column, Container, Font, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components";
import Image from "next/image";
// import Image from "next/image";
import React from "react";

import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

interface IProperties {
  name: string;
}

export default function Email(properties: IProperties) {
  const { name } = properties;

  return (
    <Html >
      <Tailwindwrapper>
        <Head />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />

          
       <Body style={{margin: '0', padding: '0', boxSizing: 'border-box'}} >
        <Container>
            <Section  >
              <Column className="mx-auto flex w-full items-center justify-center gap-x-[0.625rem] bg-[#E1D6D6] pb-[2.875rem] pt-[2.938rem]">
                <Image src={`/images/payment-receipt-email-template/Logo.png`} width="20" height="20" alt="Logo" />
                <Heading lang="en" dir="ltr" className="text-[1.5rem] font-semibold">
                    Bollerplate.
                </Heading>
              </Column>
            </Section>
           
           <Section className="px-[2.25rem] md:px-[3.5rem]">
           <Row className="lg:max-w=[80%] w-full  mx-auto flex flex-col  ">
                <Section className="relative mt-[2.5rem] h-[8.875rem] w-[11.735rem] md:mt-[2.25rem] md:h-[11.125rem] md:w-[14.75rem]">
                    <Image src={`/images/payment-receipt-email-template/Online.png`} width="188" height="142" alt="payment" />
                </Section>

                <Section className="w-[100%]">
                    <Column className="my-[1.25rem] w-[100%] bg-[#F6F8FB] py-[1.5rem] text-center md:my-[1.875rem] md:py-[2.5rem]">
                        <Text
                            style={{
                            fontSize: "1rem",
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
                            $100
                        </Text>
                    </Column>
                </Section>

                <Section className="w-full">
                    <Hr className="mt-[1.125rem] h-[1px] w-full bg-[#CBD5E1]" />
                    <Heading className="mb-[1rem] mt-[1.75rem] font-semibold md:text-[1.125rem] text-[1rem]">
                        payment receipt
                    </Heading>
                </Section>

                <Section className="w-full">
                    <Column className="w-full rounded-[8px] bg-[#F6F8FB] px-[0.938rem] py-[1.25rem]">
                        <Row>
                            <Column className="w-[33.3%] text-start text-[0.875rem] text-[#434343] md:w-[63%]">
                            Item
                            </Column>
                            <Column className="w-[33.3%] text-center text-[#434343] md:w-[19%]">
                            5
                            </Column>
                            <Column className="w-[33.3%] text-end font-semibold md:w-[19%]">
                            $200
                            </Column>
                        </Row>
                        <Hr className="my-[1rem] h-[1px] w-full bg-[#CBD5E1]" />
                        <Row>
                            <Column className="w-[33.3%] text-start text-[0.875rem] text-[#434343] md:w-[63%]">
                            Item
                            </Column>
                            <Column className="w-[33.3%] text-center text-[#434343] md:w-[19%]">
                            3
                            </Column>
                            <Column className="w-[33.3%] text-end font-semibold md:w-[19%]">
                            $120
                            </Column>
                        </Row>
                        <Hr className="my-[1rem] h-[1px] w-full bg-[#CBD5E1]" />
                        <Row>
                            <Column className="w-[33.3%] text-start text-[0.875rem] text-[#434343] md:w-[63%]">
                            VAT
                            </Column>
                            <Column className="w-[33.3%] text-center text-[#434343] md:w-[19%]">
                            10%
                            </Column>
                            <Column className="w-[33.3%] text-end font-semibold md:w-[19%]">
                            $32
                            </Column>
                        </Row>
                        <Hr className="my-[1rem] h-[1px] w-full bg-[#CBD5E1]" />
                        <Row>
                            <Column className="w-[33.3%] text-start text-[0.875rem] text-[#434343] md:w-[63%]">
                            Total
                            </Column>
                            <Column className="w-[33.3%] text-center text-[#434343] md:w-[19%]">
                            100%
                            </Column>
                            <Column className="w-[33.3%] text-end font-semibold md:w-[19%]">
                            $352
                            </Column>
                        </Row>
                    </Column>
                </Section>

                <Section className="w-full">
                <Hr className="mt-[1.75rem] h-[1px] w-full bg-[#CBD5E1]" />
                <Heading className="mb-[1rem] mt-[1.75rem] font-semibold  text-[1rem]">
                    Payment Details
                </Heading>
                </Section>

                <Section>
                    <Column className="w-full rounded-[8px] bg-[#F6F8FB] px-[0.938rem] py-[1.25rem]">
                    <Row>
                      <Column className="text-start text-[0.875rem] text-[#434343]">
                      Amount
                      </Column>
                      <Column className="flex items-center justify-end text-end font-semibold">
                      <Text style={{ fontSize: "1rem", margin: "0" }}>$352</Text>
                      </Column>
                    </Row>
                    <Hr className="my-[1rem] h-[1px] w-full bg-[#CBD5E1]" />
                    <Row>
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
                      
                      <Img src={`/images/payment-receipt-email-template/masterCard.png`} width="20" height="20" alt="mastercard" />

                      <Text
                          style={{
                          fontSize:  "0.75rem",
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
                    </Row>
                    </Column>
                </Section>

                <Hr className="mt-[1.75rem] h-[1px] w-full bg-[#CBD5E1]" />
                <Section>
                    <Column className="w-full py-[2.5rem] md:py-[3.5rem]">
                        <Heading className="text-[1rem] font-medium">
                            Have any questions about your order?
                        </Heading>
                        <Section>
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
                        </Section>
                    </Column>
                </Section>

                <Section>
                    <Column className="mb-[3rem] flex w-full flex-col gap-[0.5rem]">
                    <Text style={{ margin: "0" }} className="font-medium">
                        Regards,
                    </Text>
                    <Text style={{ margin: "0" }} className="font-medium">
                        Bollerplate
                    </Text>
                    </Column>
                </Section>
            </Row>
           </Section>

           <Section className="bg-[#F3EFEF]">
           <Column className="block  py-[2rem] ">
            <Column className="mx-auto flex  flex-col items-center px-[3rem] lg:max-w=[80%]">
              <Section>
                <Column className="mx-auto flex items-center gap-[2.063rem] text-center">
                 
                  <Img src={`/images/payment-receipt-email-template/twitter.png`} width="24" height="24" alt="twitter" />
                  <Img src={`/images/payment-receipt-email-template/instagram.png`} width="24" height="24" alt="instagram" />
                  <Img src={`/images/payment-receipt-email-template/tiktok.png`} width="24" height="24" alt="tiktok" />
                  <Img src={`/images/payment-receipt-email-template/bird.png`} width="24" height="24" alt="bird" />
                  <Img src={`/images/payment-receipt-email-template/linkedin.png`} width="24" height="24" alt="linkedin" />

                </Column>
              </Section>
             <Section className="border-b-[1px] border-dashed border-b-[#5B5B5D] mb-[1.875rem]">
                <Column className=" w-full  py-[1.875rem] md:flex md:gap-[0.3rem]">
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
             </Section>

              <Text
                style={{ margin: "0" }}
                className="w-full pb-[0.5rem] text-[#5B5B5D] leading-[1.25rem]"
              >
                You are receiving this email because you signed up at
                Boilerplate.com. Want to change how you receive these emails?
              </Text>

              <Section>
              <Text
                style={{ margin: "0.5rem 0 0 0" }}
                className=" inline w-full text-[#424242]"
              >
                You can{" "}
                <Text
                  style={{ margin: "0" }}
                  className="inline font-semibold text-[#111111]"
                >
                  update your preferences
                </Text>
                {" "}or{" "}
                <Text
                  style={{ margin: "0" }}
                  className="inline font-semibold text-[#111111]"
                >
                  unsubscribe from this list.
                </Text>
              </Text>
              </Section>
            </Column>
          </Column>
           </Section>

        </Container>
       </Body>
      </Tailwindwrapper>
    </Html>
  );
}

Email.PreviewProps = {
  name: "John Doe",
} satisfies IProperties;


const main = {
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

// const header = {
//   backgroundColor: "#E1D6D6",
//   width: "100%",
// };

// const codeContainer = {
//   background: "rgba(0,0,0,.05)",
//   borderRadius: "4px",
//   margin: "16px auto 14px",
//   verticalAlign: "middle",
//   width: "100%",
// };