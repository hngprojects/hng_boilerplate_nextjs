import { useEffect } from "react";

import BlogCard from "~/components/layouts/BlogCards";
import { useGetBlogs } from "~/hooks/blog/use-blogs";

export type New = {
  id: number;
  thumbnailUrl: string;
};

const RelatedArticle = () => {
  const { fetchBlogs, data } = useGetBlogs();
  const blogs = data?.data;
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);
  return (
    <>
      <div className="">
        <h1 className="font-inter text-center text-xl font-bold leading-[29.05px] text-[#525252] sm:text-2xl md:text-left">
          Related Articles
        </h1>
        <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8">
          {blogs &&
            blogs
              .slice(0, 3)
              .map((post, index) => <BlogCard key={index} {...post} />)}
        </div>
      </div>
    </>
  );
};

export default RelatedArticle;
