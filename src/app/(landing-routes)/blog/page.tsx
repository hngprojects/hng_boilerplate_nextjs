"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import HeroSection from "~/components/extDynamicPages/blogCollection/BlogPageHero";
import BlogCard from "~/components/layouts/BlogCards";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { useToast } from "~/components/ui/use-toast";

const BlogHome = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<
    {
      id: string;
      title: string;
      date: string;
      readTime: string;
      category: string;
      image: string;
      labelClassName: string;
    }[]
  >([]);
  const [page, setPage] = useState<number>(1);
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
        setData(response.data);
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
      } finally {
        setIsLoading(false);
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
        {isLoading ? (
          <div className="animate-pulse text-2xl font-bold">
            Loading Blogs...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {data?.map((post, index) => (
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
                  router.push(`/blog/${post.id}`);
                }}
              />
            ))}
          </div>
        )}
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
      <Pagination className="mt-12 max-md:hidden">
        <PaginationContent>
          <PaginationItem className="mr-4">
            <PaginationPrevious
              className={
                "hover:cursor-pointer" +
                (page == 1 ? " pointer-events-none opacity-50" : "")
              }
              onClick={() => setPage((a) => (a > 1 ? a - 1 : a))}
            />
          </PaginationItem>
          {Array.from({ length: Math.ceil(data?.length / 6) }, (link, id) => (
            <PaginationItem key={id}>
              <PaginationLink
                className={
                  "rounded-md text-black hover:cursor-pointer" +
                  (page === id + 1
                    ? " border border-[#97B3BA] bg-primary text-white"
                    : "")
                }
                onClick={() => setPage(id + 1)}
              >
                {id + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem className="ml-4">
            <PaginationNext
              className={
                "hover:cursor-pointer" +
                (page == Math.ceil(data?.length / 6)
                  ? " pointer-events-none opacity-50"
                  : "")
              }
              onClick={() =>
                setPage((a) => (a < Math.ceil(data?.length / 6) ? a + 1 : a))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogHome;
