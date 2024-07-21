const Blog = () => {
  return (
    <div className="mx-auto mt-[148px] grid h-[216px] w-[365px] justify-evenly gap-[40px] rounded-2xl bg-[#f974161a] p-[8px_16px] max-sm:grid-cols-2 md:flex md:h-[116px] md:w-[1200px] md:gap-[120px]">
      <div className="flex w-[133px] flex-col items-center justify-center text-primary max-sm:h-[72px] md:w-[205px]">
        <h2 className="text-[32px] font-[700] md:text-[48px]">10 years</h2>
        <p className="text-[14px] font-[500] md:text-[18px]">In Business</p>
      </div>
      <div className="flex w-[133px] flex-col items-center justify-end text-primary max-sm:h-[72px] md:w-[205px]">
        <h2 className="text-[32px] font-[700] md:text-[48px]">75,000+</h2>
        <p className="text-[14px] font-[500] md:text-[18px]">Customers</p>
      </div>
      <div className="flex flex-col items-center text-primary max-sm:h-[72px] max-sm:w-[147px] md:w-[205px]">
        <h2 className="text-[32px] font-[700] md:text-[48px]">100k+</h2>
        <p className="text-[14px] font-[500] leading-[16px] md:text-[18px]">
          Monthly Blog Readers
        </p>
      </div>
      <div className="flex w-[133px] flex-col items-center text-primary max-sm:h-[72px] md:w-[205px]">
        <h2 className="text-[32px] font-[700] md:text-[48px]">1.2m+</h2>
        <p className="text-[14px] font-[500] md:text-[18px]">Social Follower</p>
      </div>
    </div>
  );
};

export default Blog;
