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
      <div className="">
        <h1 className="font-inter text-center text-xl font-bold leading-[29.05px] text-[#525252] sm:text-2xl md:text-left">
          Related Articles
        </h1>
        <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8">
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
