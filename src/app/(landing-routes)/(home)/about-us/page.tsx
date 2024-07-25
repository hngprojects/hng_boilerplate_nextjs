import Blog from "~/components/layouts/aboutUs/Blog";
import CoreValues from "~/components/layouts/aboutUs/CoreValues";
import ExecutiveTeam from "~/components/layouts/aboutUs/ExecutiveTeam";
import Hero from "~/components/layouts/aboutUs/Hero";
import Join from "~/components/layouts/aboutUs/Join";
import Mission from "~/components/layouts/aboutUs/Mission";
import OurServices from "~/components/layouts/aboutUs/OurServices";
import Vision from "~/components/layouts/aboutUs/Vision";

const AboutUs = () => {
  return (
    <>
      <Hero />
      <Blog />
      <OurServices />
      <Mission />
      <Vision />
      <CoreValues />
      <ExecutiveTeam />
      <Join />
    </>
  );
};

export default AboutUs;
