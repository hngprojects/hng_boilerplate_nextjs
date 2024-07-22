import { Body, Container, Section } from "@react-email/components";
import { ReactNode } from "react";

import EmailFooter from "~/email/templates/_components/resetPasswordEmail/emailFooter";
import EmailHeader from "~/email/templates/_components/resetPasswordEmail/emailHeader";

interface EmailResetPasswordLayoutProperties {
  children: ReactNode;
}

const EmailResetPasswordLayout: React.FC<
  EmailResetPasswordLayoutProperties
> = ({ children }) => {
  return (
    <>
      <Body className="flex min-h-screen flex-col bg-background text-foreground">
        <Container className="w-full bg-[#E1D6d666]">
          <EmailHeader />
        </Container>

        <Container className="w-full flex-1 bg-background">
          <Section className="relative mb-8 mt-4 flex flex-col items-center justify-center px-3">
            <Container className="w-full max-w-[590px] rounded-[--radius] bg-card p-8 text-card-foreground">
              <main>{children}</main>
            </Container>
          </Section>
        </Container>

        <Container>
          <EmailFooter />
        </Container>
      </Body>
    </>
  );
};

export default EmailResetPasswordLayout;
