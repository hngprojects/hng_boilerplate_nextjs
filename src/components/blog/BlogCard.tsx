import Image from "next/image";

type New = {
  id: number;
  thumbnailUrl: string;
};

type newTypes = {
  id: number;
  name: string;
  color: string;
  title: string;
  date: string;
  timeRead: string;
};

const BlogCard = ({
  article,
  newsType,
}: {
  article: New;
  newsType: newTypes;
}) => {
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
          data-testid="news-displayed"
          key={newsType.id}
          style={{ backgroundColor: newsType.color }}
          className="absolute left-[15px] top-[15px] rounded-[16px] px-[17px] py-[5px]"
        >
          <p className="text-[12px] font-bold text-blog-relatedBg">
            {newsType.name}
          </p>
        </div>
      </div>
      <div className="flex h-[147px] w-[372px] flex-col gap-[24px] p-[16px] md:h-[137px] md:w-[354px]">
        <p className="w-[320px] text-[20px] font-bold text-blog-relatedHeading">
          {newsType.title}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-normal text-blog-relatedHeading">
            {newsType.date}
          </p>
          <div className="rounded-[16px] bg-blog-relatedBg p-[8px]">
            <p className="text-[14px] font-normal text-blog-relatedHeading">
              {newsType.timeRead}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
