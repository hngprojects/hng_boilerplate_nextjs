// The 'Badge' component.
// This component accepts 3 arguments as props.
// A mandatory Label (string)
// A mandatory Variant ('default' | 'primary' | 'success' | 'error')
// An optional icon (React.ReactNode)

import BadgeInterface from "./BadgeInterface";

const Badge = ({ label, icon, variant }: BadgeInterface) => {
  const badgeTextVariants = {
    default: "text-[#344054]",
    primary: "text-[#B15210]",
    success: "text-[#0B7C17]",
    error: "text-[#A50909]",
  };
  const badgeBackgroundVariants = {
    default: "bg-[#F2F4F7]",
    primary: "bg-[#FFFAF7]",
    success: "bg-[#E7F7E9]",
    error: "bg-[#FDE7E7]",
  };

  const smallStyling = "py-[2px] pr-[8px] pl-[6px] leading-[18px]";
  const mediumStyling =
    "md:py-[2px] md:pr-[10px] md:pl-[8px] md:text-[0.875rem]";
  const largeStyling =
    "lg:py-[4px] lg:pr-[12px] lg:pl-[10px] lg:leading-[20px]";
  const commonStyling =
    "capitalize flex gap-[6px] items-center rounded-[16px] max-w-max  font-[500] text-[0.75rem]";

  return (
    <div
      className={`${badgeTextVariants[variant]} ${badgeBackgroundVariants[variant]} ${commonStyling} ${smallStyling} ${mediumStyling} ${largeStyling} `}
    >
      <p role="img" aria-label={label}>
        {icon && icon}
      </p>
      <p>{label}</p>
    </div>
  );
};

export default Badge;
