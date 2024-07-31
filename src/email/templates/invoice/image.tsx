import {
  Button,
  Container,
  Heading,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface InvoiceTemplateProperties {
  title: string;
  username: string;
  image: string;
  description: string;
  descriptionOne: string;
  link: string;
}

const InvoiceTemplate = ({
  title,
  username,
  image,
  description,
  descriptionOne,
  link,
}: InvoiceTemplateProperties) => {
  return (
    <Layout>
      <Preview>t{username}, your invoice reciept.</Preview>
      <Section className="my-[56px]">
        <Section className="mx-auto flex items-center justify-center md:w-[316px]">
          <Img src={image} alt="hello" className="h-[100%] w-[100%]" />
        </Section>

        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="mt-[56px] flex flex-col items-center justify-center">
            <Heading
              as="h5"
              className="my-0 mb-[56px] text-center text-[24px] leading-[28px] text-[#121212]"
            >
              {title}
            </Heading>

            <Section>
              <Text className="md:text-[18px]mt-[32px] my-0 text-[16px] font-[600] text-[#121212]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {description}
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {descriptionOne}
              </Text>
            </Section>
          </Section>
        </Container>

        <Section className="text-center">
          <Section className="mt-[32px] w-[100%] text-center">
            <Container className="mb-[40px] max-w-[680px] px-[48px] md:px-0">
              <Button
                target={"_blank"}
                className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                href={link}
              >
                Activate Account
              </Button>
            </Container>
          </Section>
        </Section>
        <Section className="mt-[28px]">
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="my-0 font-[600] text-[#121212]">
              Regards,
              <br />
              Boilerplate
            </Text>
          </Container>
        </Section>
      </Section>
    </Layout>
  );
};

InvoiceTemplate.PreviewProps = {
  title: "Invoice",
  username: "John Doe",
  image: "https://imgur.com/a4XiXxo.png",
  link: "www.boilerplate.com",
  description:
    "We hope you are doing well. Thank you for your recent purchase from Boilerplate. Please find your invoice attached to this email.",
  descriptionOne:
    "To activate your account and secure it, please click the button below:",
} satisfies InvoiceTemplateProperties;

export default InvoiceTemplate;
