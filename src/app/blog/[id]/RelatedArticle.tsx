import { useEffect, useState } from "react";

import BlogCard from "~/components/blog/BlogCard";

export type New = {
  id: number;
  thumbnailUrl: string;
};

const newsTypes = [
  {
    id: 0,
    name: "Business",
    color: "#F97316",
    title: "The Power of Networking: How to Build Meaningful Connections",
    date: "July 12, 2024",
    timeRead: "5 min read",
  },
  {
    id: 1,
    name: "Lifestyle",
    color: "#7F0682",
    title: "The Power of Networking: How to Build Meaningful Connections",
    date: "July 12, 2024",
    timeRead: "5 min read",
  },
  {
    id: 2,
    name: "World News",
    color: "#EAB308",
    title: "The Power of Networking: How to Build Meaningful Connections",
    date: "July 12, 2024",
    timeRead: "5 min read",
  },
];

const RelatedArticle = () => {
  const [news, setNews] = useState<New[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState<string | null>();
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos",
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setNews(data.slice(0, 3));
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (errors) {
    return (
      <p className="p-[0] text-[24px] font-bold text-blog-relatedHeading sm:px-[100px]">
        {errors}
      </p>
    );
  }

  return (
    <div className="flex w-[372px] flex-col justify-center gap-[24px] bg-blog-relatedBg px-[0px] py-[16px] sm:w-full sm:px-[100px]">
      <h1 className="ml-[17px] text-[28px] font-bold text-blog-relatedHeading md:ml-[0px]">
        Related Articles
      </h1>

      {loading ? (
        <div className="p-[0] sm:px-[100px]">
          <p className="text-[24px] font-bold text-blog-relatedHeading">
            Loading...
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-[24px] md:flex-nowrap">
          {news.map((article, index) => (
            <div key={article.id}>
              <BlogCard
                article={article}
                newsType={newsTypes[index % newsTypes.length]}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedArticle;
