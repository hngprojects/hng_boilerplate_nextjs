import BlogCard from "~/components/common/blogCard/BlogCard";
import Hero from "~/components/layouts/homepage/Hero";
import HowItWorks from "~/components/layouts/homepage/HowItWorks";
import PerfectFit from "~/components/layouts/homepage/PerfectFit";
import Testimonials from "~/components/layouts/homepage/Testimonials";
import UserSection from "~/components/layouts/homepage/UserSection";

const properties = {
  tag: "Business",
  title: "5 Mistakes That kill your start-up before it takes off",
  description:
    " We often hear about the ENIAC, hailed as the first computer, but its story is just one thread in a rich tapestry woven by brilliant",
  authorName: "Rahul Sharma",
  date: "2022-02-02",
  link: "",
  authorPfP: "",
  blogImage: "/images/hero-image.svg",
  timeOfReading: 7,
};

export default function Home() {
  return (
    <>
      <BlogCard {...properties} />
      <Hero />
      <UserSection />
      <HowItWorks />
      <Testimonials />
      <PerfectFit />
    </>
  );
}
