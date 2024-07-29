import { Body, Container, Font, Head, Html } from "@react-email/components";

import TailwindWrapper from "../../_tailwindWrapper";
import EmailFooter from "../template-footer/EmailFooter";
import EmailHeader from "../template-header/EmailHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html lang="en">
      <TailwindWrapper>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>

        <Body>
          <EmailHeader />
          <Container className="max-w-[792px]">{children}</Container>
          <EmailFooter />
        </Body>
      </TailwindWrapper>
    </Html>
  );
}
