"use client";

import { useState } from "react";

import { mainBlog } from "../../../data/articledata";

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
              className="flex flex-col items-start justify-center border-b border-[#525252] md:flex-row md:gap-[24px] md:p-[24px]"
              data-testid="card-list"
            >
              <div className="">
                <span className="left-2 rounded-[16px] bg-[#F97316] px-[12px] py-[4px] text-center text-[12px] font-bold text-[#525252]">
                  {blog.occupation}
                </span>
                <h1 className="text-[20px] font-bold leading-normal">
                  {blog.header}
                </h1>
                <p className="text-[14px] font-normal leading-normal">
                  {blog.description}
                </p>
                <div className="flex items-center gap-[6px]">
                  <img width={24} src={blog.accountImgMobile.src} alt="image" />
                  <p className="text-[14px] font-medium leading-normal">
                    {blog.name}
                  </p>
                  <p className="text-[14px] font-normal leading-normal">
                    {blog.readTime}
                  </p>
                  <p className="text-[14px] font-normal leading-normal">
                    {blog.date}
                  </p>
                </div>
              </div>
              <div className="relative">
                <img src={blog.image.src} alt="picture"></img>
              </div>
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
