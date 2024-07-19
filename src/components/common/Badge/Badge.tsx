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
    default: "badge-default",
    primary: "badge-primary",
    success: "badge-success",
    error: "badge-error",
  };

  return (
    <div
      className={`${badgeTextVariants[variant]} flex·max-w-max·items-center·gap-[6px]·rounded-[16px]·py-[2px]·pl-[6px]·pr-2·text-[0.75rem]·font-[500]·capitalize·leading-[18px]·md:py-[2px]·md:pl-[8px]·md:pr-[10px]·md:text-[0.875rem]·lg:py-1·lg:pl-[10px]·lg:pr-3·lg:leading-[20px]`}
    >
      {icon && icon}
      <span>{label}</span>
    </div>
  );
};

export default Badge;
