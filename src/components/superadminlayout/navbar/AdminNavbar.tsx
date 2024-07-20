import { BellIcon, ChevronDown, HelpCircle, SearchIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const AdminNavbar = () => {
  return (
    <nav className="flex items-center justify-between gap-2 bg-[#FDFDFD] px-[10px] py-[14px]">
      <div className="flex h-10 items-center justify-between gap-2 rounded-[6px] border border-[#E4E4E7] px-3 text-sm font-normal placeholder:text-sm">
        <SearchIcon
          data-testid="search"
          className="text-neutral-dark-2 h-4 w-4"
        />
        <input
          className="text-neutral-dark-2 placeholder:text-neutral-dark-1 h-full w-full border-none outline-none ring-0"
          placeholder="Search option..."
          data-testid="input"
        />
      </div>
      <div className="flex w-full max-w-[152px] items-center justify-between gap-1">
        <div className="relative">
          <BellIcon
            data-testid="bell"
            className="text-neutral-dark-2 hover:text-neutral-dark-1 h-6 w-6 transition-colors duration-300 hover:cursor-pointer"
          />
          <span className="bg-error absolute right-1 top-0 h-[6px] w-[6px] rounded-full"></span>
        </div>
        <div>
          <HelpCircle
            data-testid="help"
            className="text-neutral-dark-2 hover:text-neutral-dark-1 h-6 w-6 transition-colors duration-300 hover:cursor-pointer"
          />
        </div>
        <div className="hover:bg-black-1 flex w-full max-w-[64px] cursor-pointer items-center justify-between gap-2">
          <Avatar data-testid="avatar" className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ChevronDown
            data-testid="chevronDown"
            className="2-5 text-neutral-dark-1 h-5"
          />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
