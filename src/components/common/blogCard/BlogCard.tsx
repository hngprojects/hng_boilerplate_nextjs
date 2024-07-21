import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";

// interface blogCardProperties {
//   tag: string;
//   date: string;
//   link: string;
//   title: string;
//   authorPfP: string;
//   blogImage: string;
//   authorName: string;
//   description: string;
//   timeOfReading: number;
// }

const BlogCard = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Card
          data-testid="mobile-element"
          className="flex w-[100%] flex-col-reverse items-center border-none shadow-none sm:w-[484px] md:w-[890px] md:flex-row"
        >
          <CardHeader className="flex-auto sm:flex-1">
            <div className="mb-[10px] flex h-0 w-fit items-center gap-1 rounded-full bg-[#CBD5E1] px-[9px] py-[13px] font-semibold text-neutral-dark-1">
              <span className="text-[30px] font-bold">&middot;</span>
              <p className="m-0 mt-[2px] text-[12px]">Business</p>
            </div>
            <CardTitle className="text-[24px] font-semibold leading-[2rem] text-neutral-dark-1 md:text-[29px] md:leading-[2.5rem]">
              5 Mistakes That kill your start-up before it takes off
            </CardTitle>
            <CardDescription className="text-[14px] font-normal leading-[21.78px] text-neutral-dark-1 sm:text-[17px]">
              We often hear about the ENIAC, hailed as the first computer, but
              its story is just one thread in a rich tapestry woven by brilliant
            </CardDescription>
            <div className="flex flex-col-reverse items-start justify-between sm:flex-row sm:items-center">
              <div className="flex items-center gap-[13px] font-medium text-[#525252]">
                <Image
                  src={"/images/ing.jpg"}
                  alt={"author"}
                  className="h-[32px] w-[32px] rounded-full sm:h-[40px] sm:w-[40px]"
                  width={40}
                  height={40}
                />
                <p className="text-[12px] sm:text-[16px]">Nora Nora</p>
              </div>
              <div className="flex items-center gap-[15px] text-[12px] font-medium text-neutral-dark-1 sm:text-[16px]">
                <p>7 mins Read</p>
                <p className="text-[30px] text-[#D9D9D9]">&middot;</p>
                <p>July 12, 2024</p>
              </div>
            </div>
          </CardHeader>
          <Link
            className="h-[200px] w-[100%] flex-auto sm:h-[250px] sm:flex-1 md:w-[900px]"
            href={""}
          >
            <Image
              src="/images/image 9.png"
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
