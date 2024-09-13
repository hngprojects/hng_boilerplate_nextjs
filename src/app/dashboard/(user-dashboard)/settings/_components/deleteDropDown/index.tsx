import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Ellipsis } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DeleteDropDownProperties {
  onDelete: () => void;
}

const DeleteDropDown = ({ onDelete }: DeleteDropDownProperties) => {
  const containerReference = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

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

  const options: string[] = ["Delete Member"];

  return (
    <div ref={containerReference}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span
            className="relative flex cursor-pointer items-center justify-center gap-1 rounded-[6px] bg-white px-5 text-sm font-normal placeholder:text-sm"
            onClick={() => {
              setOpen((previous) => !previous);
            }}
          >
            <span>
              <Ellipsis />
            </span>
          </span>
        </DropdownMenuTrigger>
        {open && (
          <DropdownMenuContent className="translate-x-[-100px] rounded bg-white shadow">
            <DropdownMenuSeparator />
            {options.map((option, index) => (
              <div key={index} onClick={onDelete}>
                <DropdownMenuItem
                  onClick={onDelete}
                  className="right-0 cursor-pointer px-8 py-[6px] text-[14px] hover:border-none hover:bg-slate-50 hover:outline-none"
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

export default DeleteDropDown;
