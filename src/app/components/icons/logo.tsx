import { SVGProps } from "react";

const LogoIcon = (properties: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...properties}
  >
    <circle cx={4} cy={4} r={4} fill="#F97316" />
    <circle cx={14} cy={4} r={4} fill="#F97316" />
    <circle cx={4} cy={14} r={4} fill="#F97316" />
    <circle cx={14} cy={14} r={4} fill="#F97316" />
  </svg>
);
export default LogoIcon;
