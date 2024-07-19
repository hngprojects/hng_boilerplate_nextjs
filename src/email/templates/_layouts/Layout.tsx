import { Body, Head, Html } from "@react-email/components";

import Footer from "~/email/templates/_components/Footer";
import Header from "~/email/templates/_components/Header";

type LayoutProperties = {
  children: React.ReactNode;
};

export default function Layout(properties: LayoutProperties) {
  const { children } = properties;
  return (
    <Html>
      <Head />
      <Body style={{ margin: 0 }}>
        <Header />
        {children}
        <Footer />
      </Body>
    </Html>
  );
}
