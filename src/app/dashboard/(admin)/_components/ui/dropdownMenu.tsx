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
        className={`absolute bottom-0 right-0 top-full mt-2 h-fit overflow-hidden rounded-md bg-white p-2 shadow ring-1 ring-border duration-200 ease-in ${width} ${active ? "visible translate-y-0 opacity-100" : "invisible -translate-y-[10px] opacity-0"}`}
      >
        {children}
      </div>
    </>
  );
};

export default DropdownMenu;
