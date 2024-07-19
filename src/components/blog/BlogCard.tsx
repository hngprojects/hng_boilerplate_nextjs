import Image from "next/image";

import { New } from "~/app/blog/[id]/RelatedArticle";

type BlogCardProperties = {
  article: New;
  newsType: {
    id: number;
    name: string;
    color: string;
  };
};

const BlogCard = ({ article, newsType }: BlogCardProperties) => {
  const { thumbnailUrl } = article;
  return (
    <div className="flex cursor-pointer flex-col rounded-t-lg">
      <div className="relative flex">
        <Image
          src={thumbnailUrl}
          alt="img"
          width={364}
          height={247}
          className="h-[247px] w-[374px] rounded-t-lg"
        />
        <div
          key={newsType.id}
          style={{ backgroundColor: newsType.color }}
          className="absolute left-[15px] top-[15px] rounded-[16px] px-[17px] py-[5px]"
        >
          <p className="text-[12px] font-bold text-[#FAFAFA]">
            {newsType.name}
          </p>
        </div>
      </div>
      <div className="flex h-[147px] w-[372px] flex-col gap-[24px] p-[16px] md:h-[137px] md:w-[354px]">
        <p className="w-[320px] text-[20px] font-bold text-[#525252]">
          The Power of Networking: How to Build Meaningful Connections
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-normal text-[#525252]">
            July 12, 2024
          </p>
          <div className="rounded-[16px] bg-[#F3F4F6] p-[8px]">
            <p className="text-[14px] font-normal text-[#525252]">5 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
