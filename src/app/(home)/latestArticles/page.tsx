"use client";

import { useState } from "react";

import ArtcleCard from "~/components/articleCard/ArtcleCard";
import { mainBlog } from "../../../data/articledata";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const showMoreItem = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col gap-[24px] px-[24px] py-[36px]">
      <h1
        className="text-[28px] font-bold text-[#525252] md:text-center"
        data-testid="required-latest-articles"
      >
        Latest Articles
      </h1>
      <div className="mb-3 flex flex-col items-start gap-[24px] lg:mx-auto">
        {mainBlog.map((blog) => {
          return (
            <>
              <ArtcleCard
                id={blog.id}
                accountImgMobile={blog.accountImgMobile.src}
                accountImgDextop={blog.accountImgDextop.src}
                date={blog.date}
                description={blog.description}
                header={blog.header}
                image={blog.image.src}
                imageDextop={blog.imageDextop.src}
                name={blog.name}
                occupation={blog.occupation}
                readTime={blog.readTime}
              />
            </>
          );
        })}
      </div>

      <button
        data-testid="buttontestid"
        onClick={showMoreItem}
        className="w-full rounded-md bg-[#F97316] py-[9px] text-center text-[14px] font-medium leading-[25px] text-primary-foreground lg:mx-auto lg:w-[11%]"
      >
        {loading ? "LOADING" : "Load More"}
      </button>
    </div>
  );
};
export default Page;
