"use client";

import { FC, useEffect } from "react";

import BlogCard from "~/components/layouts/BlogCards";
import { useGetBlogs } from "~/hooks/blog/use-blogs";

interface IProperties {
  url: string;
}

const Blogs: FC<IProperties> = ({ url }) => {
  const { fetchBlogs, data } = useGetBlogs();
  const blogs = data?.data;
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs &&
        blogs.map((post, index) => (
          <BlogCard key={index} data={post} url={url} />
        ))}
    </div>
  );
};

export default Blogs;
