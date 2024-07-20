import {
  Blog,
  CoreValues,
  ExecutiveTeam,
  Hero,
  Join,
  Mission,
  Service,
  Vision,
} from ".";

const AboutUsPage = () => {
  return (
    <div>
      <Hero />
      <Blog />
      <Service />
      <Mission />
      <Vision />
      <CoreValues />
      <ExecutiveTeam />
      <Join />
    </div>
  );
};

export default AboutUsPage;
