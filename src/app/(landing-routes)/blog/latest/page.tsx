import BlogCard from "~/components/common/blogCard/BlogCard";
import CustomButton from "~/components/common/common-button/common-button";
import { articlesData } from "../data/dummy-article-data";

const LatestArticlesPage = () => {
  const isTesting: boolean = process.env.NEXT_PUBLIC_TESTING === "true";

  return (
    <>
      <main className="mx-auto px-5 py-5 md:px-10 md:py-5">
        <h1 className="text-[28px] font-[700] leading-[33.89px] text-neutral-dark-1 md:text-center md:text-[30px] md:leading-[43.57px] lg:text-[36px]">
          Latest Articles
        </h1>
        <div className="mt-6 flex flex-col space-y-4">
          {!isTesting &&
            articlesData.map((data, index) => {
              const {
                author,
                avatar,
                content,
                datePublished,
                minsRead,
                tag,
                thumbnail,
                title,
              } = data;

              return (
                <div
                  className="mx-auto flex w-full items-center justify-center"
                  key={index}
                >
                  <BlogCard
                    authorName={author}
                    authorPfP={avatar}
                    blogImage={thumbnail}
                    date={datePublished}
                    description={content}
                    link="/"
                    title={title}
                    tag={tag}
                    timeOfReading={Number.parseInt(minsRead, 10)}
                  />
                </div>
              );
            })}
        </div>

        <div className="mt-10">
          <div className="mx-auto w-fit">
            <CustomButton
              variant="primary"
              size="lg"
              isLoading={false}
              isDisabled={false}
              className="hover:bg-destructive"
            >
              Load more
            </CustomButton>
          </div>
        </div>
      </main>
    </>
  );
};

export default LatestArticlesPage;
