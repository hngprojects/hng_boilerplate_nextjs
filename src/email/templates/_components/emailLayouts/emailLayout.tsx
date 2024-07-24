import { Body, Container, Section } from "@react-email/components";
import { ReactNode } from "react";

import EmailFooter from "~/email/templates/_components/emailHeaderFooter/emailFooter";
import EmailHeader from "~/email/templates/_components/emailHeaderFooter/emailHeader";
import TailwindWrapper from "~/email/templates/_components/tailwindWrapper";

interface EmailLayoutProperties {
  children: ReactNode;
}

const EmailResetPasswordLayout: React.FC<EmailLayoutProperties> = ({
  children,
}) => {
  return (
    <>
      <TailwindWrapper>
        <Body className="m-0 bg-background p-0 text-foreground">
          <Container className="w-full max-w-full bg-[#E1D6d666] p-0">
            <EmailHeader />
          </Container>

          <Container className="w-full flex-1 bg-background">
            <Section className="relative mb-8 mt-4 flex flex-col items-center justify-center px-3">
              <Container className="w-full max-w-[590px] rounded-[--radius] bg-card p-8 text-card-foreground">
                <main>{children}</main>
              </Container>
            </Section>
          </Container>

          <Container className="w-full max-w-full bg-[#F3EFEF] p-0">
            <EmailFooter />
          </Container>
        </Body>
      </TailwindWrapper>
    </>
  );
};

export default EmailResetPasswordLayout;
