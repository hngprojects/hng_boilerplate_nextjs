const Blog = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
        <div className="mx-auto flex flex-wrap items-center justify-around gap-5 rounded-2xl bg-[#f974161a] p-5 sm:gap-10 md:gap-20">
          <div className="flex w-[133px] flex-col items-center justify-center text-primary max-sm:h-[72px] sm:w-[147px] md:w-[205px]">
            <h2 className="text-[28px] font-[700] sm:text-[32px] md:text-[40px]">
              10 years
            </h2>
            <p className="text-[12px] font-[500] sm:text-[14px] md:text-[18px]">
              In Business
            </p>
          </div>
          <div className="flex w-[133px] flex-col items-center justify-center text-primary max-sm:h-[72px] sm:w-[147px] md:w-[205px]">
            <h2 className="text-[28px] font-[700] sm:text-[32px] md:text-[40px]">
              75,000+
            </h2>
            <p className="text-[12px] font-[500] sm:text-[14px] md:text-[18px]">
              Customers
            </p>
          </div>
          <div className="flex w-[133px] flex-col items-center justify-center text-primary max-sm:h-[72px] sm:w-[147px] md:w-[205px]">
            <h2 className="text-[28px] font-[700] sm:text-[32px] md:text-[40px]">
              100k+
            </h2>
            <p className="text-[12px] font-[500] leading-[16px] sm:text-[14px] md:text-[18px]">
              Monthly Blog Readers
            </p>
          </div>
          <div className="flex w-[133px] flex-col items-center justify-center text-primary max-sm:h-[72px] sm:w-[147px] md:w-[205px]">
            <h2 className="text-[28px] font-[700] sm:text-[32px] md:text-[40px]">
              1.2m+
            </h2>
            <p className="text-[12px] font-[500] sm:text-[14px] md:text-[18px]">
              Social Followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
