interface SubPageHeroProperty {
  heading?: string;
  description?: string;
}

const SubPageHero = ({
  heading = "Build Your Product Faster",
  description = "Get Your Free Boilerplate Samples!",
}: SubPageHeroProperty) => {
  return (
    <div className="relative box-border flex h-[13.438rem] w-full shrink-0 flex-col items-center justify-center overflow-hidden bg-black px-[0rem] py-[4.687rem] text-center text-[2rem] text-white md:h-[20.25rem] md:text-[3.75rem]">
      <div className="flex flex-col items-center justify-start gap-[0.25rem] self-stretch">
        <b className="relative self-stretch">{heading}</b>
        <div className="relative self-stretch text-[1.25rem] md:text-[1.75rem]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SubPageHero;
