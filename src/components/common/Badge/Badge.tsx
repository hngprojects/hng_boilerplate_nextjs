/**
 * It accepts 2 mandatory 'label' and 'variant' arguments, and 1 optional 'icon' argument as props.
 * - Label: string
 * - Variant:  "default" | "primary" | "success" | "error"
 * - Icon?: React.ReactNode
 *
 * The commponent can be rendered as follows:
 * import Badge, { BadgeInterface } from "~/components/common/Badge/Badge";
 * - Option1: Define the props object, render the component, and spread the object as props to it
 * - Option2: Render the component, and pass in the required props individually
 */

export interface BadgeInterface {
  label: string;
  icon?: React.ReactNode;
  variant: "default" | "primary" | "success" | "error";
}

const Badge = ({ label, icon, variant }: BadgeInterface) => {
  const badgeTextVariants = {
    default: "text-[hsl(var(--default))]",
    primary: "text-[hsl(var(--primary))]",
    success: "text-[hsl(var(--success))]",
    error: "text-[hsl(var(--error))]",
  };
  const badgeBackgroundVariants = {
    default: "bg-[hsla(var(--default-badge-bg))]",
    primary: "bg-[hsla(var(--primary-badge-bg))]",
    success: "bg-[hsla(var(--success-badge-bg))]",
    error: "bg-[hsla(var(--error-badge-bg))]",
  };

  return (
    <div
      className={`${badgeBackgroundVariants[variant]} flex max-w-max rounded-[16px]`}
    >
      <div
        className={`${badgeTextVariants[variant]} flex gap-[6px] py-[2px] pl-[6px] pr-2 text-[0.75rem] font-[500] capitalize leading-[18px] md:py-[2px] md:pl-[8px] md:pr-[10px] md:text-[0.875rem] lg:py-1 lg:pl-[10px] lg:pr-3 lg:leading-[20px]`}
      >
        {icon && icon}
        <span>{label}</span>
      </div>
    </div>
  );
};

export default Badge;
