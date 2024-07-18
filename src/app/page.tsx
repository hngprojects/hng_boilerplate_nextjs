import { Hero, Blog, Service, Mission, Vision, CoreValues, ExecutiveTeam, Join } from "~/components/layouts/AboutUs";
import Navbar from "~/components/layouts/Navbar";


export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fff]">
      <Navbar />
      <Hero />
      <Blog />
      <Service />
      <Mission />
      <Vision />
      <CoreValues />
      <ExecutiveTeam />
      <Join />
    </main>
  );
}
