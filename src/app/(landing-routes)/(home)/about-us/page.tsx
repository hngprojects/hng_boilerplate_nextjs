import CoreValues from "~/components/layouts/aboutUs/CoreValues";
import ExecutiveTeam from "~/components/layouts/aboutUs/ExecutiveTeam";
import Hero from "~/components/layouts/aboutUs/Hero";
import Join from "~/components/layouts/aboutUs/Join";
import Mission from "~/components/layouts/aboutUs/Mission";
import OurServices from "~/components/layouts/aboutUs/OurServices";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <Hero />
      <OurServices />
      <Mission />
      <CoreValues />
      <ExecutiveTeam />
      <Join />
    </div>
  );
};

export default AboutUs;
