"use client";

import { useRouter } from "next/navigation";

import CustomButton from "~/components/common/common-button/common-button";
import HeroSection from "~/components/extDynamicPages/blogCollection/BlogPageHero";
import BlogCard from "~/components/layouts/BlogCards";
import { blogPosts } from "./data/mock";

const BlogHome = () => {
  const router = useRouter();

  return (
    <div>
      <HeroSection />
      <div className="flex w-full flex-col px-[5%]">
        <h1 className="mb-6 mt-12 text-3xl font-bold text-[#525252]">
          Recent Blog Posts
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              image={post.image}
              labelClassName={post.labelClassName}
              onClick={() => {
                localStorage.setItem("currentBlogPost", JSON.stringify(post));
                router.push(`/blog/$?id=${post.id}`);
              }}
            />
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <CustomButton
          variant="primary"
          size="lg"
          ariaLabel="Show More Articles"
          href="/blog/latest"
          className="hover:bg-destructive"
        >
          Show More Articles
        </CustomButton>
      </div>
    </div>
  );
};

export default BlogHome;
