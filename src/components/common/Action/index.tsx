import Image from "next/image";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

function Action() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border border-none outline-none">
          <Image
            src="/images/action.svg"
            width={24}
            height={24}
            alt="action button"
          />{" "}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[80px] shadow-[0_2px_5px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.1)]">
        <DropdownMenuGroup className="px-[2px] text-sm">
          <DropdownMenuItem className="px-[10px] py-[6px] hover:bg-accent hover:text-accent-foreground">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="px-[10px] py-[6px] hover:bg-accent hover:text-accent-foreground">
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Action;
