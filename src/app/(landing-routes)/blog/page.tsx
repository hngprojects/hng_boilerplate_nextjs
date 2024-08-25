"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import HeroSection from "~/components/extDynamicPages/blogCollection/BlogPageHero";
import BlogCard from "~/components/layouts/BlogCards";
import { useToast } from "~/components/ui/use-toast";
import { blogPosts } from "./data/mock";

const BlogHome = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();
  const [, setBlogPost] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const apiUrl = await getApiUrl();
        const token = session?.access_token;
        const response = await axios.get(`${apiUrl}/api/v1/blogs`, {
          headers: {
            Authorization: `Bearer: ${token}`,
          },
        });
        const data = response.data;
        setBlogPost(data);
        toast({
          title:
            Array.isArray(data.data) && data.data.length === 0
              ? "No Blog Post Available"
              : "Blog Posts Retrieved",
          description:
            Array.isArray(data.data) && data.data.length === 0
              ? "Blog posts are empty"
              : "Blog posts retrieved successfully",
          variant:
            Array.isArray(data.data) && data.data.length === 0
              ? "destructive"
              : "default",
        });
      } catch (error) {
        toast({
          title: "Error occured",
          description:
            error instanceof Error
              ? error.message
              : "An unknown error occurred",
          variant: "destructive",
        });
      }
    }
    fetchBlog();
  }, [session?.access_token, toast]);

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
