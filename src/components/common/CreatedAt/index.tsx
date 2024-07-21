import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

function CreatedAt() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer border border-none outline-none outline">
          Created at
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[80px] shadow-[0_2px_5px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.1)]">
        <DropdownMenuGroup className="px-[2px] text-sm">
          <DropdownMenuItem className="px-[10px] py-[6px] hover:bg-accent hover:text-accent-foreground">
            Draft
          </DropdownMenuItem>
          <DropdownMenuItem className="px-[10px] py-[6px] hover:bg-accent hover:text-accent-foreground">
            Active
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CreatedAt;