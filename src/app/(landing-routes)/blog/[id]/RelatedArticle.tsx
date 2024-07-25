import { useRouter } from "next/navigation";

import BlogCard from "~/components/layouts/BlogCards";
import { blogPosts } from "../data/mock";

export type New = {
  id: number;
  thumbnailUrl: string;
};

const RelatedArticle = () => {
  const router = useRouter();
  return (
    <>
      <div className="mx-4 mb-8 mt-12 sm:mx-8 sm:mt-16 md:mx-16 lg:mx-24">
        <h1 className="font-inter text-left text-xl font-bold leading-[29.05px] text-[#525252] sm:text-2xl">
          Related Articles
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
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
    </>
  );
};

export default RelatedArticle;
