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
  },
  {
    id: 1,
    name: "Lifestyle",
    color: "#7F0682",
  },
  {
    id: 2,
    name: "World News",
    color: "#EAB308",
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
        setNews(data);
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

  const dataNews = news.slice(0, 3);

  if (loading) {
    return (
      <div className="p-[0] sm:px-[100px]">
        <p className="text-[24px] font-bold text-[#525252]">Loading...</p>
      </div>
    );
  }
  if (errors) {
    return (
      <p className="p-[0] text-[24px] font-bold text-[#525252] sm:px-[100px]">
        {errors}
      </p>
    );
  }
  return (
    <div className="flex w-[372px] flex-col justify-center gap-[24px] bg-[#FAFAFA] px-[0px] py-[16px] sm:w-full sm:px-[100px]">
      <h1 className="ml-[17px] text-[28px] font-bold text-[#525252] md:ml-[0px]">
        Related Articles
      </h1>
      <div className="flex flex-wrap gap-[24px] md:flex-nowrap">
        {dataNews.map((article, index) => (
          <div key={article.id} role="listitem">
            <BlogCard
              article={article}
              newsType={newsTypes[index % newsTypes.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticle;
