import axios from "axios";

import Pagination from "~/components/blog/Pagination";
import HeroSection from "~/components/extDynamicPages/blogCollection/BlogPageHero";
import BlogCard from "~/components/layouts/BlogCards";
import { getApiUrl } from "~/utils/getApiUrl";

interface Response {
  data: {
    message: string;
    data: Post[];
  };
}

interface Blog {
  searchParams: {
    page: string;
  };
}

export interface Post {
  id: string;
  title: string;
  published_date: string;
  content: string;
  category: string;
  image: string;
}

const BlogHome = async ({ searchParams }: Blog) => {
  const page = Number(searchParams.page) || 1;

  const response: Response = await axios.get(
    `${await getApiUrl()}/api/v1/blogs`,
  );
  const { data } = response.data;

  return (
    <div className="bg-white py-10">
      <HeroSection />
      <div className="flex w-full flex-col px-4 md:px-12">
        <h1 className="mb-4 mt-12 text-2xl font-bold text-neutral-dark-1">
          Top Stories
        </h1>

        <div className="grid gap-x-4 gap-y-6 md:grid-cols-5 md:gap-y-4 lg:grid-cols-4">
          {page === 1 &&
            data.slice(0, 3).map((post: Post, index: number) => (
              <div
                key={post.title}
                className={`${index === 0 ? "row-span-2 md:col-span-3" : "md:col-span-2 lg:col-span-1"}`}
              >
                <BlogCard
                  key={post.id}
                  index={index}
                  type="featured"
                  title={post.title}
                  published_date={post.published_date}
                  content={post.content}
                  category={post.category}
                  image={post.image}
                />
              </div>
            ))}
        </div>

        <div className="mt-6 grid gap-x-4 gap-y-8 md:mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data
            .slice(
              page === 1 ? 3 : 11 + (page - 2) * 12,
              page === 1 ? 11 : 11 + (page - 2) * 12 + 12,
            )
            .map((post: Post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                published_date={post.published_date}
                category={post.category}
                content={post.content}
                image={post.image}
              />
            ))}
        </div>
      </div>
      <Pagination blogs={data} currentPage={page} />
    </div>
  );
};

export default BlogHome;
