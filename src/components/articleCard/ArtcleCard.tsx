interface ArticleCardProperties {
  id: number;
  occupation: string;
  description: string;
  header: string;
  accountImgMobile: string;
  name: string;
  readTime: string;
  date: string;
  image: string;
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
}: ArticleCardProperties) => {
  return (
    <div
      key={id}
      className="flex flex-col items-start justify-center border-b border-[#525252] md:flex-row md:gap-[24px] md:p-[24px]"
      data-testid="card-list"
    >
      <div className="">
        <span className="left-2 rounded-[16px] bg-[#F97316] px-[12px] py-[4px] text-center text-[12px] font-bold text-[#525252]">
          {occupation}
        </span>
        <h1 className="text-[20px] font-bold leading-normal">{header}</h1>
        <p className="text-[14px] font-normal leading-normal">{description}</p>
        <div className="flex items-center gap-[6px]">
          <img width={24} src={accountImgMobile} alt="image" />
          <p className="text-[14px] font-medium leading-normal">{name}</p>
          <p className="text-[14px] font-normal leading-normal">{readTime}</p>
          <p className="text-[14px] font-normal leading-normal">{date}</p>
        </div>
      </div>
      <div className="relative">
        <img src={image} alt="picture"></img>
      </div>
    </div>
  );
};

export default ArtcleCard;
