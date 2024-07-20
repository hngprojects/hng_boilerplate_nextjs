import Hero from "~/components/layouts/homepage/Hero";
import HowItWorks from "~/components/layouts/homepage/HowItWorks";
import PerfectFit from "~/components/layouts/homepage/PerfectFit";
import Testimonials from "~/components/layouts/homepage/Testimonials";
import UserSection from "~/components/layouts/homepage/UserSection";
import TopProductLists from "../components/topproductlists/TopProductLists";

export default function Home() {
  return (
    <>
      <TopProductLists />
      <Hero />
      <UserSection />
      <HowItWorks />
      <Testimonials />
      <PerfectFit />
    </>
  );
}
