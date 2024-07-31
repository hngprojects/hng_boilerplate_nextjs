import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@radix-ui/react-dropdown-menu";
  import { ChevronDown } from "lucide-react";
  import { useEffect, useRef, useState } from "react";
  
  interface FilterByProperties {
    onFilter: (data: string) => void;
  }
  
  const FilterBy = ({ onFilter }: FilterByProperties) => {
    const containerReference = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("All");
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerReference.current &&
          !containerReference.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };
  
      if (open) {
        document.addEventListener("click", handleClickOutside);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [open]);
  
    const options: string[] = [
      "All",
      "Members Suspended",
      "Suspended",
      "Left workspace",
    ];
  
    return (
      <div ref={containerReference}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span
              className="relative flex h-10 cursor-pointer items-center justify-center gap-1 rounded-[6px] border border-border bg-white px-5 text-sm font-normal placeholder:text-sm"
              onClick={() => {
                setOpen((previous) => !previous);
              }}
            >
              <span className="flex h-full w-full items-center justify-center rounded-[6px] border-none text-[14px] font-medium text-neutral-dark-2 outline-none ring-0">
                {value}
              </span>
              <span>
                <ChevronDown color="gray" width={16} height={16} />
              </span>
            </span>
          </DropdownMenuTrigger>
          {open && (
            <DropdownMenuContent className="translate-y-[-40px] rounded bg-white p-2 shadow md:translate-x-10">
              <DropdownMenuSeparator />
  
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setValue(option);
                  }}
                >
                  <DropdownMenuItem
                    onClick={() => {
                      setOpen(false);
                      onFilter(option);
                    }}
                    className={`cursor-pointer rounded px-[8px] py-[6px] text-[14px] hover:border-none hover:bg-slate-50 hover:outline-none`}
                  >
                    {option}
                  </DropdownMenuItem>
                </div>
              ))}
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
    );
  };
  
  export default FilterBy;
  