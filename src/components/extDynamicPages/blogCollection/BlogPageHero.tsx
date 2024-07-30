const HeroSection: React.FC = () => {
  return (
    <header className="space-y-6 px-4">
      <div className="flex justify-center">
        <span className="bg-[#f1f1f1] p-2.5 text-neutral-dark-1 rounded-md mx-auto">
          Blog
        </span>
      </div>
      <h1 className="font-bold md:text-5xl text-4xl text-center">
        Stay <span className="text-primary text-dark">
          updated with latest
        </span> news
      </h1>

      <p className="text-center text-neutral-dark-1">
        Catch the latest and trending news and articles from around the world
      </p>
    </header>
  );
};

export default HeroSection;
