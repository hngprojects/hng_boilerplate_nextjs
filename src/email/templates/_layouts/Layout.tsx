import { Body, Font, Head, Html } from "@react-email/components";

import Footer from "~/email/templates/_components/Footer";
import Header from "~/email/templates/_components/Header";

type LayoutProperties = {
  children: React.ReactNode;
};

export default function Layout(properties: LayoutProperties) {
  const { children } = properties;
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
            format: "woff2",
          }}
        />
      </Head>
      <Body style={{ margin: 0 }}>
        <Header />
        {children}
        <Footer />
      </Body>
    </Html>
  );
}
