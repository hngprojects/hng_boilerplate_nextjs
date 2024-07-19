const Navbar = () => {
  return (
    <div className="flex justify-between h-[67px] px-[10px] py-[13.5px]  border-b-[0.5px] border-stroke-100">
      <div className="relative">
        <input
          type="text"
          className="w-full px-3 py-2 pl-9 border rounded-[6px] bg-white border-b-[1px] border-stroke-400 placeholder-natural-200"
          placeholder="Search"
        />
        <svg
          className="absolute left-3 top-[10px] h-5 w-5 text-natural-300"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <g opacity="0.5">
            <path
              d="M13.7105 14.2105L13.357 13.8568C13.3439 13.8699 13.3227 13.8699 13.3096 13.8568L10.283 10.83L9.9665 10.5136L9.61704 10.7932C8.88136 11.3817 7.94909 11.7333 6.9333 11.7333C4.55848 11.7333 2.6333 9.80812 2.6333 7.4333C2.6333 5.05848 4.55848 3.1333 6.9333 3.1333C9.30812 3.1333 11.2333 5.05848 11.2333 7.4333C11.2333 8.44909 10.8817 9.38136 10.2932 10.117L10.0136 10.4665L10.33 10.783L13.3568 13.8096C13.3699 13.8227 13.3699 13.8439 13.3568 13.857L13.7105 14.2105ZM13.7105 14.2105C13.9187 14.0022 13.9187 13.6644 13.7105 13.4561L12.9561 14.2105C13.1644 14.4187 13.5022 14.4187 13.7105 14.2105ZM6.9333 11.6666C9.27131 11.6666 11.1666 9.77131 11.1666 7.4333C11.1666 5.09529 9.27131 3.19997 6.9333 3.19997C4.59529 3.19997 2.69997 5.09529 2.69997 7.4333C2.69997 9.77131 4.59529 11.6666 6.9333 11.6666Z"
              fill="#0A0A0A"
              stroke="#0A0A0A"
            />
          </g>
        </svg>
        {/* <svg
          className="absolute left-3 top-3 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0"
          />
        </svg> */}
      </div>

      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
