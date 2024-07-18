// Interface for the 'Badge' component

interface BadgeInterface {
  label: string;
  icon?: React.ReactNode;
  variant: "default" | "primary" | "success" | "error";
}

export default BadgeInterface;
