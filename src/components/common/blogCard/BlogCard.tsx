import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Card
          data-testid="mobile-element"
          className="flex w-[100%] flex-col-reverse items-center border-none shadow-none sm:w-[484px] md:w-[890px] md:flex-row"
        >
          <CardHeader className="flex-auto sm:flex-1">
            <div
              className={clsx(
                "mb-[10px] flex h-[10px] w-fit bg-desaturatedBlue px-[9px] py-[13px]",
                "items-center gap-1 rounded-full font-semibold",
              )}
            >
              <span className="mt-1 rounded-full text-[30px] font-bold">
                &middot;
              </span>
              <p className="m-0 mt-[2px] text-[12px] uppercase text-neutral-dark-1">
                {properties.tag}
              </p>
            </div>
            <CardTitle className="text-[24px] leading-[2rem] tracking-[20px] text-neutral-dark-1 md:text-[29px] md:leading-[2.5rem]">
              {properties.title}
            </CardTitle>
            <CardDescription className="text-[14px] font-normal leading-[21.78px] text-neutral-dark-1 sm:text-[17px]">
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
            className="h-[200px] w-[100%] flex-auto sm:h-[250px] sm:flex-1 md:w-[900px]"
            href={properties.link}
          >
            <Image
              src={properties.blogImage}
              alt="author"
              className="rounded-0 h-full w-full object-cover md:rounded-[8px]"
              width={900}
              height={100}
            />
          </Link>
        </Card>
      </div>
    </>
  );
};

export default BlogCard;
