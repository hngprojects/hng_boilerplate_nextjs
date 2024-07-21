"use client";

import { useState } from "react";

import { mainBlog } from "../../../data/articledata";
import ArtcleCard from "~/components/articleCard/ArtcleCard";

const Page = () => {
  const [visible, setVisible] = useState(5);
  const [loading, setLoading] = useState(false);
  const showMoreItem = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible((previousValue) => previousValue + 2);
    }, 2000);
  };
  return (
    <div className="flex flex-col gap-[24px]">
      <h1
        className="text-[28px] font-bold text-[#525252] md:text-center"
        data-testid="required-latest-articles"
      >
        Latest Articles
      </h1>
      <div className="mb-3 flex flex-col items-start gap-[24px] md:mx-auto md:w-[70%]">
        {mainBlog.slice(0, visible).map((blog) => {
          return (
            <div
              key={blog.id}
              className="flex flex-col items-start justify-center md:flex-row md:gap-[24px] md:p-[24px]"
              data-testid="card-list"
            >
              <ArtcleCard
                id={blog.id}
                accountImgMobile={blog.accountImgMobile.src}
                date={blog.date}
                description={blog.description}
                header={blog.header}
                image={blog.image.src}
                name={blog.name}
                occupation={blog.occupation}
                readTime={blog.readTime}
              />
            </div>
          );
        })}
      </div>

      <button
        data-testid="buttontestid"
        onClick={showMoreItem}
        className="w-full rounded-md bg-[#F97316] py-[9px] text-center text-[14px] font-medium leading-[25px] text-primary-foreground md:mx-auto md:w-[20%] lg:w-[11%]"
      >
        {loading ? "LOADING" : "Load More"}
      </button>
    </div>
  );
};
export default Page;
