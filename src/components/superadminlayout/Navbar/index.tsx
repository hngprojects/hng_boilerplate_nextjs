import { BellIcon, ChevronDown, HelpCircle, SearchIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const index = () => {
  return (
    <nav className="flex justify-between items-center gap-2 bg-[#FDFDFD] px-[10px] py-[14px]">
      <div className="flex justify-between items-center gap-2 px-3 h-10 border border-[#E4E4E7] rounded-[6px] text-sm placeholder:text-sm font-normal">
        <SearchIcon
          data-testid="search"
          className="h-4 w-4 text-neutral-dark-2"
        />
        <input
          className="border-none outline-none ring-0 w-full h-full text-neutral-dark-2 placeholder:text-neutral-dark-1"
          placeholder="Search option..."
          data-testid="input"
        />
      </div>
      <div className="w-full max-w-[152px] flex justify-between items-center gap-1">
        <div className="relative">
          <BellIcon
            data-testid="bell"
            className="text-neutral-dark-2 h-6 w-6"
          />
          <span className="h-[6px] w-[6px] rounded-full bg-error absolute top-0 right-1"></span>
        </div>
        <div>
          <HelpCircle
            data-testid="help"
            className="text-neutral-dark-2 h-6 w-6"
          />
        </div>
        <div className="flex justify-between items-center gap-2 max-w-[64px] w-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ChevronDown
            data-testid="chevronDown"
            className="text-neutral-dark-1 h-5 2-5"
          />
        </div>
      </div>
    </nav>
  );
};

export default index;
