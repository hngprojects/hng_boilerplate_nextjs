export default function Header() {
  return (
    <header className="flex items-center justify-center bg-[#E1D6D666] p-[2.5rem]">
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4.5" r="4" fill="#F97316" />
        <circle cx="14" cy="4.5" r="4" fill="#F97316" />
        <circle cx="4" cy="14.5" r="4" fill="#F97316" />
        <circle cx="14" cy="14.5" r="4" fill="#F97316" />
      </svg>
      <h1 className="ml-4 text-[2rem] font-semibold text-[#121a26]">
        Boilerplate.
      </h1>
    </header>
  );
}
