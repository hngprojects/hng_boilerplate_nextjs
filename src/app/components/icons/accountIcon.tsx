
const AccountIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#525252"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.33}
      d="M13.333 17.5v-1.667A3.333 3.333 0 0 0 10 12.5H5a3.333 3.333 0 0 0-3.333 3.333V17.5M7.5 9.167a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z"
    />
    <path
      stroke="#525252"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.833 10.833a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333ZM15.833 6.667V7.5M15.833 10.834v.833M18 7.917l-.725.416M14.392 10l-.725.417M18 10.417 17.275 10M14.392 8.333l-.725-.417"
    />
  </svg>
)
export default AccountIcon