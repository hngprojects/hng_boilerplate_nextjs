import Hero from "~/components/layouts/homepage/Hero";
import HowItWorks from "~/components/layouts/homepage/HowItWorks";
import MarketingAd from "~/components/layouts/homepage/MarketingAd";
import PerfectFit from "~/components/layouts/homepage/PerfectFit";
import Testimonials from "~/components/layouts/homepage/Testimonials";
import UserSection from "~/components/layouts/homepage/UserSection";
import Video from "~/components/layouts/homepage/Video";

export default function Home() {
  return (
    <>
      <Hero />
      <UserSection />
      <Video />
      <HowItWorks />
      <Testimonials />
      <MarketingAd />
      <PerfectFit />
    </>
  );
}
