const Blog = () => {
  return (
    <div className="mx-auto mt-[108px] flex h-[116px] w-[1200px] justify-evenly gap-[120px] rounded-2xl bg-[#f974161a] p-[8px_16px]">
      <div className="flex w-[205px] flex-col items-center text-[#F97316]">
        <h2 className="text-[48px] font-[700]">10 years</h2>
        <p className="text-[18px] font-[500]">In Business</p>
      </div>
      <div className="flex w-[205px] flex-col items-center text-[#F97316]">
        <h2 className="text-[48px] font-[700]">75,000+</h2>
        <p className="text-[18px] font-[500]">Customers</p>
      </div>
      <div className="flex w-[205px] flex-col items-center text-[#F97316]">
        <h2 className="text-[48px] font-[700]">100k+</h2>
        <p className="text-[18px] font-[500]">Monthly Blog Readers</p>
      </div>
      <div className="flex w-[145px] flex-col items-center text-[#F97316]">
        <h2 className="text-[48px] font-[700]">1.2m+</h2>
        <p className="text-[18px] font-[500]">Social Follower</p>
      </div>
    </div>
  );
};

export default Blog;
