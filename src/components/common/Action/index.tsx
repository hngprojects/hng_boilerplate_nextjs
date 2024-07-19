"use client";

import Image from "next/image";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Delete from "../Modal/Delete";
import Edit from "../Modal/Edit";

function Action() {
  // const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border border-none outline outline-none"
        >
          <Image src="/action.svg" width={24} height={24} alt="action button" />{" "}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[80px] shadow-[0_2px_5px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.1)]">
        <DropdownMenuGroup className="px-[2px] text-sm">
          <div className="py-[6px] px-[10px] p hover:bg-accent hover:text-accent-foreground">
            <Edit />
          </div>
          <div className="py-[6px] px-[10px] p hover:bg-accent hover:text-accent-foreground">
            <Delete />
          </div>
          {/* <DropdownMenuItem>
            <span>Delete</span>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Action;
