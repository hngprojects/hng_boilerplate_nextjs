/**
 * Using the Badge component
 * This component has 4 variants:
 * - Default: A default slate coloured label (and icon if specified) with a lighter slate background
 * - Primary: An orange coloured label (and icon if specified) with a lighter orange background
 * - Success: A green coloured label (and icon if specified) with a lighter green background
 * - Error: A red coloured label (and icon if specified) with a lighter red background
 *
 * It accepts 2 mandatory 'label' and 'variant' arguments, and 1 optional 'icon' argument as props.
 * - Label: string
 * - Variant:  "default" | "primary" | "success" | "error"
 * - Icon?: React.ReactNode
 * The commponent can be rendered as follows:
 * - Import the component and its props ineterface
 *
 * ```
 * import Badge from "~/components/common/Badge/Badge";
 * import BadgeInterface from "~/components/common/Badge/BadgeInterface";
 * ```
 * - Option1: Define the props object, render the component, and spread the object as props to it
 *
 * ```
 * const badgeProperties: BadgeInterface = {
 *     label: "label",
 *     variant: "error",
 *     icon: <p>&larr;</p>,
 *   };
 *   <Badge {...badgeProperties} />
 * ```
 *
 * - Option2: Render the component, and pass in the required props individually
 *
 * ```
 *   <Badge label={"labeltest"} variant={"default"} />
 * ```
 */

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
      <span role="img" aria-label={label}>
        {icon && icon}
      </span>
      <span>{label}</span>
    </div>
  );
};

export default Badge;
