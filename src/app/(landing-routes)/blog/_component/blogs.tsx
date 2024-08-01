"use client";

import { useEffect } from "react";

import BlogCard from "~/components/layouts/BlogCards";
import { useGetBlogs } from "~/hooks/blog/use-blogs";

const Blogs = () => {
  const { fetchBlogs, data } = useGetBlogs();
  const blogs = data?.data;
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs && blogs.map((post, index) => <BlogCard key={index} {...post} />)}
    </div>
  );
};

export default Blogs;
