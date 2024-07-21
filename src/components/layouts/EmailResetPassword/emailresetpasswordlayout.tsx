import { Container, Section } from "@react-email/components";
import { ReactNode } from "react";

import EmailFooter from "~/components/common/resetpasswordemail/emailfooter";
import EmailHeader from "~/components/common/resetpasswordemail/EmailHeader";
import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

interface EmailResetPasswordLayoutProperties {
  children: ReactNode;
}

const EmailResetPasswordLayout: React.FC<
  EmailResetPasswordLayoutProperties
> = ({ children }) => {
  return (
    <>
      <title className="sr-only">Reset Your Password</title>
      <Tailwindwrapper>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Container className="w-full bg-[#E1D6D666]">
            <EmailHeader />
          </Container>

          <Container className="w-full flex-1 bg-background">
            <Section className="mb4 relative mt-4 flex flex-col items-center justify-center px-3">
              <Container className="w-full max-w-[590px] rounded-[--radius] bg-card p-8 text-card-foreground">
                <main>{children}</main>
              </Container>
            </Section>
          </Container>

          <Container>
            <EmailFooter />
          </Container>
        </div>
      </Tailwindwrapper>
    </>
  );
};

export default EmailResetPasswordLayout;
