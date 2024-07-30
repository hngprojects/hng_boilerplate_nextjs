"use client";

import { useRouter } from "next/navigation";

import CustomButton from "~/components/common/common-button/common-button";
import HeroSection from "~/components/extDynamicPages/blogCollection/BlogPageHero";
import BlogCard from "~/components/layouts/BlogCards";
import { blogPosts } from "./data/mock";
import Pagination from "~/components/blog/Pagination";

const BlogHome = () => {
  const router = useRouter();

  return (
    <div className="bg-white py-10">
      <HeroSection />
      <div className="flex w-full flex-col px-4 md:px-12">
        <h1 className="mb-4 mt-12 text-2xl font-bold text-neutral-dark-1">
          Top Stories
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-6 md:gap-y-4">
          {blogPosts.slice(0,3).map((post, index) => (
            <div key={post.title} className={`${index === 0 ? "md:col-span-3 row-span-2" : "md:col-span-2 lg:col-span-1"}`}>
              <BlogCard
                index={index}
                type="featured"
                title={post.title}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                image={post.image}
                onClick={() => {
                  localStorage.setItem("currentBlogPost", JSON.stringify(post));
                  router.push(`/blog/$?id=${post.id}`);
                }}
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:mt-20 mt-6">
          {blogPosts.slice(3).map((post, index) => (
            <BlogCard
              key={index}
              index={index}
              title={post.title}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              image={post.image}
              onClick={() => {
                localStorage.setItem("currentBlogPost", JSON.stringify(post));
                router.push(`/blog/$?id=${post.id}`);
              }}
            />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default BlogHome;
