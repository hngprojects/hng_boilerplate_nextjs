interface HeadingProperties {
  heading: string;
  subheading?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const PasswordSettingsHeading = (headingProperties: HeadingProperties) => {
  const { heading, subheading, headingLevel = "h4" } = headingProperties;
  // check for valid headingLevel value
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
  const HeadingTag = (
    validHeadingLevels.includes(headingLevel) ? headingLevel : "h4"
  ) as keyof JSX.IntrinsicElements;

  return (
    <div
      className="flex flex-col items-start gap-1.5 self-stretch text-foreground md:gap-2"
      aria-labelledby="heading"
    >
      <HeadingTag className="self-stretch text-xl font-semibold leading-[29.05px] md:text-2xl">
        {heading}
      </HeadingTag>
      {subheading && (
        <p className="self-stretch text-sm font-normal leading-[19.2px] md:text-base">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default PasswordSettingsHeading;
