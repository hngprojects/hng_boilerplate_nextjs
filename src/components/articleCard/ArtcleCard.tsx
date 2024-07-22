import Image from "next/image";

interface ArticleCardProperties {
  id: number;
  occupation: string;
  description: string;
  header: string;
  accountImgMobile: string;
  accountImgDextop: string;
  name: string;
  readTime: string;
  date: string;
  image: string;
  imageDextop: string;
}

const ArtcleCard = ({
  accountImgMobile,
  date,
  description,
  header,
  id,
  image,
  name,
  occupation,
  readTime,
  imageDextop,
  accountImgDextop,
}: ArticleCardProperties) => {
  return (
    <div
      key={id}
      className="flex w-full flex-col items-start justify-center gap-[24px] border-b border-[#525252] md:flex-row md:items-center md:gap-[24px] md:p-[24px]"
      data-testid="card-list"
    >
      <div className="flex flex-col items-start gap-3 px-1 py-2">
        <span className="left-2 rounded-[16px] bg-[#F97316] px-[12px] py-[4px] text-center text-[12px] font-bold text-[#525252]">
          {occupation}
        </span>
        <h1 className="text-[20px] font-bold leading-normal">{header}</h1>
        <p className="text-[14px] font-normal leading-normal">{description}</p>
        <div className="flex w-full items-center gap-[3px] lg:justify-between">
          <Image
            width={30}
            height={10}
            src={accountImgMobile}
            alt="image"
            className="md:hidden"
          />
          <Image
            width={30}
            height={10}
            src={accountImgDextop}
            alt="image"
            className="hidden md:block"
          />
          <p className="text-[14px] font-medium leading-normal">{name}</p>
          <p className="text-[14px] font-normal leading-normal">{readTime}</p>
          <p className="text-[14px] font-normal leading-normal">{date}</p>
        </div>
      </div>
      <div className="">
        <Image
          width={500}
          height={500}
          src={image}
          alt="picture"
          className="md:hidden"
        ></Image>
        <Image
          width={500}
          height={500}
          src={imageDextop}
          alt="picture"
          className="hidden md:flex"
        ></Image>
      </div>
    </div>
  );
};

export default ArtcleCard;
