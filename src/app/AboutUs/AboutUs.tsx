import Blog from "./Blog";
import CoreValues from "./CoreValues";
import ExecutiveTeam from "./ExecutiveTeam";
import Hero from "./Hero";
import Join from "./Join";
import Mission from "./Mission";
import OurServices from "./OurServices";
import Vision from "./Vision";

const AboutUsPage = () => {
  return (
    <div>
      <Hero />
      <Blog />
      <OurServices />
      <Mission />
      <Vision />
      <CoreValues />
      <ExecutiveTeam />
      <Join />
    </div>
  );
};

export default AboutUsPage;
