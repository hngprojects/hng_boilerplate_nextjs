import { useRouter } from "next/navigation";
// import { blogPosts } from "../data/mock";
import { useEffect, useState } from "react";

import BlogCard from "~/components/layouts/BlogCards";

export type New = {
  id: number;
  thumbnailUrl: string;
};

const RelatedArticle = () => {
  const router = useRouter();
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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://staging.api-csharp.boilerplate.hng.tech/api/v1/blogs`,
        );
        const result = await response.json();
        setData(result.data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="">
        <h1 className="font-inter text-center text-xl font-bold leading-[29.05px] text-[#525252] sm:text-2xl md:text-left">
          Related Articles
        </h1>
        {isLoading ? (
          <div className="animate-pulse text-2xl font-bold">
            Loading Related...
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8">
            {data?.slice(0, 3).map((post, index) => (
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
    </>
  );
};

export default RelatedArticle;
