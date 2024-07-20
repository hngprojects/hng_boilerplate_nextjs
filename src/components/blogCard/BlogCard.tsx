import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

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
            <div className="flex items-center justify-center h-screen">
                <Card
                    data-testid="mobile-element"
                    className="flex md:w-[890px] sm:w-[484px] w-[100%]  shadow-none items-center border-none md:flex-row flex-col-reverse"
                >
                    <CardHeader className="sm:flex-1 flex-auto">
                        <p className="flex items-center w-fit"><span className="text-[30px] font-bold">&middot;</span>Business</p>
                        <CardTitle className="text-[24px] md:text-[29px] font-medium  md:leading-[2.5rem] leading-[2rem]">
                            5 Mistakes That kill your start-up before it takes off
                        </CardTitle>
                        <CardDescription className=" leading-[21.78px] sm:text-[17px] text-[14px]">
                            We often hear about the ENIAC, hailed as the first computer, but
                            its story is just one thread in a rich tapestry woven by brilliant
                        </CardDescription>
                        <div className=" flex sm:flex-row flex-col-reverse sm:items-center items-start justify-between">
                            <div className="flex items-center gap-[13px] font-medium text-[#525252]">
                                <Image
                                    src={"/images/ing.jpg"}
                                    alt={"author"}
                                    className="sm:h-[40px] sm:w-[40px] w-[32px] h-[32px] rounded-full"
                                    width={40}
                                    height={40}
                                />
                                <p className="sm:text-[16px] text-[12px]">Nora Nora</p>
                            </div>
                            <div className="flex items-center sm:text-[16px] text-[12px] gap-[15px] font-medium text-[#525252]">
                                <p>7 mins Read</p>
                                <p className="text-[30px] text-[#D9D9D9]">&middot;</p>
                                <p>July 12, 2024</p>
                            </div>
                        </div>
                    </CardHeader>
                    <section className="sm:h-[250px] h-[200px] md:w-[900px] w-[100%] sm:flex-1 flex-auto">
                        <Image
                            src="/images/image 9.png"
                            alt="author"
                            className="h-full w-full md:rounded-[8px] rounded-0 object-cover"
                            width={900}
                            height={100}
                        />
                    </section>
                </Card>
            </div>
        </>
    );
};

export default BlogCard