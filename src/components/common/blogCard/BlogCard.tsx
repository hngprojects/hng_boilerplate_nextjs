"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";

interface blogCardProperties {
  tag: string;
  date: string;
  link: string;
  title: string;
  authorPfP: string;
  blogImage: string;
  authorName: string;
  description: string;
  timeOfReading: number;
}

const BlogCard = (properties: blogCardProperties) => {
  const [leading, setLeading] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setLeading(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-center border-b border-b-neutral-dark-1 py-3 lg:w-[70%]">
      <Card
        data-testid="mobile-element"
        className="flex w-full flex-col items-center border-none bg-transparent shadow-none lg:flex-row"
      >
        <CardHeader className="flex-auto lg:flex-1">
          <div
            className={clsx(
              "mb-[10px] flex h-[10px] w-fit bg-desaturatedBlue px-[9px] py-[13px]",
              "items-center gap-1 rounded-full font-semibold",
            )}
          >
            <span className="rounded-full text-[30px] font-bold">&middot;</span>
            <p className="m-0 mt-[2px] text-[10px] uppercase text-neutral-dark-1 sm:text-[12px]">
              {properties.tag}
            </p>
          </div>
          <CardTitle
            className="text-[24px] leading-[3rem] tracking-[50px] text-neutral-dark-1 md:text-[28px] md:leading-[2.5rem]"
            style={{
              lineHeight: leading ? "30px" : "32px",
              letterSpacing: "0.6px",
            }}
          >
            {properties.title}
          </CardTitle>
          <CardDescription className="text-[14px] font-normal leading-[21.78px] text-neutral-dark-1 sm:text-[16px]">
            {properties.description}
          </CardDescription>
          <div className="flex flex-col-reverse items-start justify-between sm:flex-row sm:items-center">
            <div className="flex items-center gap-[13px] font-medium text-neutral-dark-1">
              <Image
                src={properties.authorPfP}
                alt={"author"}
                className="h-[32px] w-[32px] rounded-full sm:h-[40px] sm:w-[40px]"
                width={40}
                height={40}
              />
              <p className="text-[12px] font-medium sm:text-[16px]">
                {properties.authorName}
              </p>
            </div>
            <div className="flex items-center gap-[15px] text-[12px] font-medium text-neutral-dark-1 sm:text-[16px]">
              <p>{properties.timeOfReading} mins Read</p>
              <p className="text-[30px] text-grey50">&middot;</p>
              <p>{properties.date}</p>
            </div>
          </div>
        </CardHeader>
        <Link
          className="h-[200px] w-[100%] flex-auto sm:h-[250px] md:w-[100%] lg:w-[900px] lg:flex-1"
          href={properties.link}
        >
          <Image
            src={properties.blogImage}
            alt="author"
            className="rounded-0 h-full w-full object-cover md:rounded-[8px]"
            width={600}
            height={100}
          />
        </Link>
      </Card>
    </div>
  );
};

export default BlogCard;
