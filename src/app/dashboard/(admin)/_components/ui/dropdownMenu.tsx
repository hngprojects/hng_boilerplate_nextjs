<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const DropdownMenu = ({
  width,
  active,
  children,
}: {
  width: string;
  active: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div
        className={`absolute bottom-0 top-full z-20 mt-2 h-fit overflow-hidden rounded-md bg-white p-2 shadow ring-1 ring-border duration-200 ease-in md:right-0 ${width} ${active ? "visible translate-y-0 opacity-100" : "invisible -translate-y-[10px] opacity-0"}`}
      >
        {children}
      </div>
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
const dropdownMenu = () => {
  return (
    <>
      <div className="absolute"></div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </>
  );
};

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default DropdownMenu;
=======
export default dropdownMenu;
>>>>>>> Stashed changes
=======
export default dropdownMenu;
>>>>>>> Stashed changes
=======
export default dropdownMenu;
>>>>>>> Stashed changes
