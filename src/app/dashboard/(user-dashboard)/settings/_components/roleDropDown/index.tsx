import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface RoleDropDownProperties {
  onChange: (data: string) => void;
}

const RoleDropDown = ({ onChange }: RoleDropDownProperties) => {
  const containerReference = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("Admin");

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

  const options: string[] = ["Admin", "User", "Guest"];

  return (
    <div ref={containerReference}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="p-0">
          <span
            className="flex cursor-pointer items-center justify-center gap-1 rounded-[6px] text-sm font-normal placeholder:text-sm"
            onClick={() => {
              setOpen((previous) => !previous);
            }}
          >
            <span className="flex h-full w-full items-center justify-center rounded-[6px] p-0 text-[14px] font-medium text-neutral-dark-2 outline-none ring-0">
              {value}
            </span>
            <span>
              <ChevronDown color="gray" width={16} height={16} />
            </span>
          </span>
        </DropdownMenuTrigger>
        {open && (
          <DropdownMenuContent className="m-0 min-w-[110px] rounded border bg-white p-0 shadow">
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
                    onChange(option);
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

export default RoleDropDown;
