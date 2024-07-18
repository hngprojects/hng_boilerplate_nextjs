// The 'Badge' component.
// This component accepts 3 arguments as props.
// A mandatory Label (string)
// A mandatory Variant ('default' | 'primary' | 'success' | 'error')
// An optional icon (React.ReactNode)

import BadgeInterface from "./BadgeInterface";

const Badge = ({ label, icon, variant }: BadgeInterface) => {
  return (
    <div>
      <p>{label}</p>
      <p>{icon}</p>
      <p>{variant}</p>
    </div>
  );
};

export default Badge;
