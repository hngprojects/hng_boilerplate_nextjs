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

export interface BadgeInterface {
  label: string;
  icon?: React.ReactNode;
  variant: "default" | "primary" | "success" | "error";
}

const Badge = ({ label, icon, variant }: BadgeInterface) => {
  const badgeTextVariants = {
    default: "text-[#344054] bg-[#F2F4F7]",
    primary: "text-[#B15210] bg-[#FFFAF7]",
    success: "text-[#0B7C17] bg-[#E7F7E9]",
    error: "text-[#A50909] bg-[#FDE7E7]",
  };

  return (
    <div
      className={`${badgeTextVariants[variant]} py-[2px] pr-2 pl-[6px] leading-[18px] md:py-[2px] md:pr-[10px] md:pl-[8px] md:text-[0.875rem] lg:py-1 lg:pr-3 lg:pl-[10px] lg:leading-[20px] capitalize flex gap-[6px] items-center rounded-[16px] max-w-max  font-[500] text-[0.75rem]`}
    >
      {icon && icon}
      <span>{label}</span>
    </div>
  );
};

export default Badge;
