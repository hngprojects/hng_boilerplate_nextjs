import Layout from "~/components/layouts";
import Hero from "~/components/layouts/homepage/Hero";
import HowItWorks from "~/components/layouts/homepage/HowItWorks";
import PerfectFit from "~/components/layouts/homepage/PerfectFit";
import Testimonials from "~/components/layouts/homepage/Testimonials";
import UserSection from "~/components/layouts/homepage/UserSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <UserSection />
      <HowItWorks />
      <Testimonials />
      <PerfectFit />
    </Layout>
  );
}
