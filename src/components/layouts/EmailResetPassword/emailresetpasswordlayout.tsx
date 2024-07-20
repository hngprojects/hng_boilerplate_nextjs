import { Container } from "@react-email/components";

import EmailFooter from "~/components/common/resetpasswordemail/emailfooter";
import EmailHeader from "~/components/common/resetpasswordemail/EmailHeader";
import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

interface EmailResetPasswordLayoutProperties {
  children: React.ReactNode;
}

const EmailResetPasswordLayout: React.FC<
  EmailResetPasswordLayoutProperties
> = ({ children }) => {
  return (
    <Tailwindwrapper>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <div className="w-full bg-[#E1D6D666]">
          <EmailHeader />
        </div>

        <div className="w-full flex-1 bg-background">
          <Container className="mb4 relative mt-4 flex flex-col items-center justify-center px-3">
            <div className="w-full max-w-[590px] rounded-[--radius] bg-card p-8 text-card-foreground">
              <main>{children}</main>
            </div>
          </Container>
        </div>

        <div>
          <EmailFooter />
        </div>
      </div>
    </Tailwindwrapper>
  );
};

export default EmailResetPasswordLayout;
