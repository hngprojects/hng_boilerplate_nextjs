// Need to use this as SVG because I'm manipulating some values based on state

interface CheckmarkProperties {
  color: string;
}

const CheckmarkIcon: React.FC<CheckmarkProperties> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_10_17180)">
        <path
          d="M9.99984 18.3333C14.6023 18.3333 18.3332 14.6025 18.3332 9.99999C18.3332 5.39749 14.6023 1.66666 9.99984 1.66666C5.39734 1.66666 1.6665 5.39749 1.6665 9.99999C1.6665 14.6025 5.39734 18.3333 9.99984 18.3333Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10L9.16667 11.6667L12.5 8.33334"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_17180">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckmarkIcon;
