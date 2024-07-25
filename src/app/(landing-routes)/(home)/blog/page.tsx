"use client";

import { useRouter } from "next/navigation";

import CustomButton from "~/components/common/common-button/common-button";
import BlogCard from "~/components/layouts/BlogCards";
import {
  blogCard1,
  blogCard2,
  blogCard3,
  blogCard4,
  blogCard5,
  blogCard6,
} from "../../../../../public/images/blogPage/utils";
import HeroSection from "../../../../components/extDynamicPages/blogCollection/BlogPageHero";

export const blogPosts = [
  {
    id: 1,
    title: "The Power of Networking: How to Build Meaningful Connections",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "Business",
    image: blogCard1,
    labelClassName: "bg-primary",
    author: "Nora Nora",
  },
  {
    id: 2,
    title: "The Global Impact of Climate Change: A Look at the Evidence",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "World News",
    image: blogCard2,
    labelClassName: "bg-warning",
    author: "Jane Doe",
  },
  {
    id: 3,
    title: "5 Easy and Delicious Recipes for Busy Weeknights",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "Food",
    image: blogCard3,
    labelClassName: "bg-success",
    author: "John Doe",
  },
  {
    id: 4,
    title: "5 Simple Habits to Improve Your Mental Wellbeing",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "Lifestyle",
    image: blogCard4,
    labelClassName: "bg-primary",
    author: "Jane Doe",
  },
  {
    id: 5,
    title: "The Ultimate Guide to Dressing Stylishly with Fewer Clothes",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "Fashion",
    image: blogCard5,
    labelClassName: "bg-success",
    author: "John Doe",
  },
  {
    id: 6,
    title: "The Future of Travel: What Will the World Look Like in 2030?",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "World News",
    image: blogCard6,
    labelClassName: "bg-warning",
    author: "Nora Nora",
  },
];
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
        >
          Show More Articles
        </CustomButton>
      </div>
    </div>
  );
};

export default BlogHome;
