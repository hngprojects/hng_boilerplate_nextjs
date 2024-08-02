import CustomButton from "~/components/common/common-button/common-button";
import HeroSection from "~/components/extDynamicPages/blogCollection/BlogPageHero";
import Blogs from "./_component/blogs";

const BlogHome = async () => {
  return (
    <div>
      <HeroSection />
      <div className="flex w-full flex-col px-[5%]">
        <h1 className="mb-6 mt-12 text-3xl font-bold text-[#525252]">
          Recent Blog Posts
        </h1>
        <Blogs />
      </div>
      <div className="my-10 flex justify-center">
        <CustomButton
          variant="primary"
          size="lg"
          ariaLabel="Show More Articles"
          href="/blog/latest"
        >
          Show More Articles
        </CustomButton>
      </div>
    </div>
  );
};

export default BlogHome;
