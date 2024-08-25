const MarketingAd = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center">
      <video width="1000" controls>
        <source src="/video/boilerplate-mkt-ad.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MarketingAd;
