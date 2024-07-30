interface SubPageHeroProperty {
  subheading?: string;
  heading?: string;
  description?: string;
  wordToStyleIndex?: number;
  styledWordClassName?: string;
}

const SubPageHero = ({
  subheading,
  heading,
  description,
  wordToStyleIndex,
}: SubPageHeroProperty) => {
  const words = heading?.split(" ");

  return (
    <div
      data-testid="subpage-hero"
      className="relative box-border flex h-[15.25rem] w-full shrink-0 flex-col items-center justify-center overflow-hidden bg-[#FAFAFA] p-[0.875rem] text-center text-[2rem] text-white md:text-[2.75rem] lg:text-[3.75rem]"
    >
      <div className="flex flex-col items-center justify-start gap-[10px] py-[0.625rem] md:gap-[24px]">
        {subheading && (
          <p className="rounded-[10px] bg-[#F1F1F1] p-[10px] text-sm text-neutral-dark-1">
            {subheading}
          </p>
        )}
        {heading && (
          <b className="relative text-[28px] text-black md:text-[60px]">
            {words?.map((word, index) => (
              <span
                key={index}
                className={
                  index === wordToStyleIndex
                    ? "text-[#F97316]"
                    : "text-[#0A0A0A]"
                }
              >
                {word}{" "}
              </span>
            ))}
          </b>
        )}
        {description && (
          <div className="relative self-stretch text-center text-[1.125rem] text-neutral-dark-1">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubPageHero;
