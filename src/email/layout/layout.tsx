import { Body, Container, Font, Head, Html } from "@react-email/components";

import EmailFooter from "../templates/_components/template-footer/EmailFooter";
import EmailHeader from "../templates/_components/template-header/EmailHeader";
import TailwindWrapper from "../templates/_tailwindWrapper";

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
