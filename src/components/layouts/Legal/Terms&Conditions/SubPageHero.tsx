import React from 'react';

interface SubPageHeroProperty {
  subheading?: string;
  heading?: string;
  description?: string;
  wordToStyleIndex?: number; // Index of the word to style (0-based)
  styledWordClassName?: string; // Class name to apply to the styled word
}

const SubPageHero = ({
  subheading,
  heading,
  description,
  wordToStyleIndex,
}: SubPageHeroProperty) => {

  const words = heading?.split(' ');

  return (
    <div
      data-testid="subpage-hero"
      className="relative box-border flex h-[13rem] w-full shrink-0 flex-col items-center justify-center overflow-hidden p-[0.875rem] text-center text-[2rem] text-white md:h-[15.25rem] md:text-[2.75rem] lg:text-[3.75rem] bg-[#FAFAFA]"
    >
      <div className="flex flex-col items-center py-[0.625rem] justify-start gap-[10px] md:gap-[24px]">
        {subheading && (
          <p className="text-sm text-[#525252] p-[10px] rounded-[10px] bg-[#F1F1F1]">
            {subheading}
          </p>
        )}
        {heading && (
          <b className="relative text-black text-[28px] md:text-[60px]">
            {words?.map((word, index) => (
              <span
                key={index}
                className={index === wordToStyleIndex ? 'text-[#F97316]' : 'text-[#0A0A0A]'}
              >
                {word}{' '}
              </span>
            ))}
          </b>
        )}
        {description && (
          <div className="relative self-stretch text-center text-[1.125rem] text-[#525252]">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubPageHero;
