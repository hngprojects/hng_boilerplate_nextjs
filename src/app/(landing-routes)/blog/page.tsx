"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CustomButton from "~/components/common/common-button/common-button";
import HeroSection from "~/components/extDynamicPages/blogCollection/BlogPageHero";
import BlogCard from "~/components/layouts/BlogCards";
import { blogPosts } from "./data/mock";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

const BlogHome = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<[]>([])
  const [page, setPage] = useState<number>(1)
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://staging.api-csharp.boilerplate.hng.tech/api/v1/blogs`
        );
        const result = await response.json();
        setData(result.data);
        console.log(result.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

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
                router.push(`/blog/${post.id}`);
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
      <Pagination className="max-md:hidden mt-12">
            <PaginationContent>
              <PaginationItem className="mr-4">
                <PaginationPrevious
                  className={
                    "hover:cursor-pointer" +
                    (page == 1 ? " opacity-50 pointer-events-none" : "")
                  }
                  onClick={() => setPage((a) => (a > 1 ? a - 1 : a))}
                />
              </PaginationItem>
              {Array.from(
                { length: Math.ceil(data?.length / 6) },
                (link, id) => (
                  <PaginationItem key={id}>
                    <PaginationLink
                      className={
                        "hover:cursor-pointer text-black rounded-md" +
                        (page === id + 1 ? " border border-[#97B3BA] bg-primary text-white" : "")
                      }
                      onClick={() => setPage(id + 1)}
                    >
                      {id + 1}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem className="ml-4">
                <PaginationNext
                  className={
                    "hover:cursor-pointer" +
                    (page == Math.ceil(data?.length / 6)
                      ? " opacity-50 pointer-events-none"
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
