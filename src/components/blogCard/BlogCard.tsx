import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"

interface blogCardProps {
    tag: string,
    date: string,
    link: string,
    title: string,
    authorPfP: string,
    blogImage: string,
    authorName: string,
    description: string,
    timeOfReading: number,
}


const BlogCard = () => {
    return (
        <main data-testid="mobile-element" className="md:w-[792px] sm:w-[50%] h-fit bg-white shadow-lg md:pt-[30px] pt-0 pb-[30px]">
            <div className="flex items-center gap-[25px] md:flex-row flex-col-reverse">
                <section>
                    <div className={
                        clsx("flex items-center h-fit w-fit m-0 font-semibold rounded-full",
                            " bg-[#CBD5E1] text-[#525252] px-[13px] text-[12px] py-[1px]"
                        )}>
                        <span className="">&middot;</span>
                        Business
                    </div>
                    <h3 className="md:text-[28px] md:leading-[2.5rem] text-[24px] text-[#525252] leading-[1.9rem] font-semibold  ">
                        5 Mistakes That kill your start-up before it takes off
                    </h3>
                    <p className="text-[#525252] sm:text-[18px] text-[16px] leading-[21.78px] mt-[9px] font-normal">
                        We often hear about the ENIAC, hailed as the first 
                        computer, but its story is just one thread in a rich 
                        tapestry woven by brilliant
                    </p>
                    <div className="flex items-center justify-between mt-[9px]">
                        <div className="flex items-center gap-4 text-[#525252] font-medium">
                            <Image src={"/imgs/author.jpg"} alt={"author"} width={40} height={40} className="rounded-full" />
                            <p className="">Nora Nora</p>
                        </div>
                        <div className="flex items-center gap-[20px] text-[#525252] font-medium">
                            <p>7 min read</p>
                            <p className="text-[30px] text-[#D9D9D9]">&middot;</p>
                            <p>July 12, 2024</p>
                        </div>
                    </div>
                </section>
                <Link href={""} >
                    <Image src={"/imgs/image 9.png"} alt={"author"} width={800} height={100} className="rounded-[8px]" />
                </Link>
            </div>
        </main>
    )
}

export default BlogCard
