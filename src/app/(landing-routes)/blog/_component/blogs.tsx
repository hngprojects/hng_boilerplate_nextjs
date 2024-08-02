"use client";

import { useEffect, useState } from "react";

import BlogCard from "~/components/layouts/BlogCards";
import { useGetBlogs } from "~/hooks/blog/use-blogs";
import { getApiUrl } from "~/utils/getApiUrl";

const Blogs = () => {
  const [url, setUrl] = useState<string | undefined>();
  const { fetchBlogs, data } = useGetBlogs();
  const blogs = data?.data;
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  useEffect(() => {
    getApiUrl().then((url) => {
      setUrl(url);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {url &&
        blogs &&
        blogs.map((post, index) => (
          <BlogCard key={index} data={post} url={url} />
        ))}
    </div>
  );
};

export default Blogs;
