export default function PricePlanCheckMark(properties: {
  isAddedBenefit: boolean;
}) {
  const { isAddedBenefit } = properties;
  return isAddedBenefit ? (
    <svg
      width="22"
      height="13"
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3337 1L6.25033 11.0833L1.66699 6.5"
        stroke="#0A0A0A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 6L5.5 17"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 6L16.5 17"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
