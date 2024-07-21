import Image from "next/image";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
<<<<<<< HEAD
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
=======
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Delete from "../Modal/Delete";
import Edit from "../Modal/Edit";
>>>>>>> 14fffb6bbe5e05ef9f9eae8bb3848a61ef7fcd81

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
<<<<<<< HEAD
          <DropdownMenuItem className="px-[10px] py-[6px] hover:bg-accent hover:text-accent-foreground">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="px-[10px] py-[6px] hover:bg-accent hover:text-accent-foreground">
            Delete
          </DropdownMenuItem>
=======
          <div className="px-[10px] py-[6px] hover:bg-accent hover:text-accent-foreground">
            <Edit />
          </div>
          <div className="px-[10px] py-[6px] hover:bg-accent hover:text-accent-foreground">
            <Delete />
          </div>
>>>>>>> 14fffb6bbe5e05ef9f9eae8bb3848a61ef7fcd81
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Action;
