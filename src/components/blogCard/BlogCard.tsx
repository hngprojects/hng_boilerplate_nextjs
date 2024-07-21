import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

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

const BlogCard = () => {
  return (
    <main
      data-testid="mobile-element"
      className="h-fit bg-white pb-[30px] pt-0 shadow-lg sm:w-[50%] md:w-[792px] md:pt-[30px]"
    >
      <div className="flex flex-col-reverse items-center gap-[25px] md:flex-row">
        <section>
          <div
            className={clsx(
              "m-0 flex h-fit w-fit items-center rounded-full font-semibold",
              "bg-[#CBD5E1] px-[13px] py-[1px] text-[12px] text-[#525252]",
            )}
          >
            <span className="">&middot;</span>
            Business
          </div>
          <h3 className="text-[24px] font-semibold leading-[1.9rem] text-[#525252] md:text-[28px] md:leading-[2.5rem]">
            5 Mistakes That kill your start-up before it takes off
          </h3>
          <p className="mt-[9px] text-[16px] font-normal leading-[21.78px] text-[#525252] sm:text-[18px]">
            We often hear about the ENIAC, hailed as the first computer, but its
            story is just one thread in a rich tapestry woven by brilliant
          </p>
          <div className="mt-[9px] flex items-center justify-between">
            <div className="flex items-center gap-4 font-medium text-[#525252]">
              <Image
                src={"/imgs/author.jpg"}
                alt={"author"}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="">Nora Nora</p>
            </div>
            <div className="flex items-center gap-[20px] font-medium text-[#525252]">
              <p>7 min read</p>
              <p className="text-[30px] text-[#D9D9D9]">&middot;</p>
              <p>July 12, 2024</p>
            </div>
          </div>
        </section>
        <Link href={""}>
          <Image
            src={"/imgs/image 9.png"}
            alt={"author"}
            width={800}
            height={100}
            className="rounded-[8px]"
          />
        </Link>
      </div>
    </main>
  );
};

export default BlogCard;
