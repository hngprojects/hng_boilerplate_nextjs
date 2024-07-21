import { SVGProps } from "react";

const SearchIcon = (properties: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...properties}
  >
    <path
      fill="#0A0A0A"
      stroke="#0A0A0A"
      d="m13.71 13.71-.353-.353a.033.033 0 0 1-.047 0l-3.027-3.027-.316-.316-.35.28a4.3 4.3 0 1 1 .676-.676l-.28.348.317.317 3.027 3.027a.033.033 0 0 1 0 .047l.354.354Zm0 0a.534.534 0 0 0 0-.754l-.754.755a.534.534 0 0 0 .755 0Zm-6.777-2.543a4.233 4.233 0 1 0 0-8.467 4.233 4.233 0 0 0 0 8.467Z"
      opacity={0.5}
    />
  </svg>
);
export default SearchIcon;
