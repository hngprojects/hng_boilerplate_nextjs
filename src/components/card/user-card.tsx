"use client";

import { ChevronDown } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

interface User {
  email: string;
  image: string;
  name: string;
}

const UserCard = ({ user }: { user: User }) => {
  const { replace } = useRouter();

  const handleSignOut = async () => {
    await signOut();
    replace("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center rounded-full p-1 hover:bg-subtle"
        >
          <Avatar className="size-8 sm:size-10">
            <AvatarImage src={user?.image} />
            <AvatarFallback>{user?.email[0]}</AvatarFallback>
          </Avatar>
          <ChevronDown
            data-testid="chevronDown"
            className="size-4 text-neutral-dark-2 sm:size-5"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-1 w-56" alignOffset={6}>
        <DropdownMenuLabel className="pb-0 pt-3">
          {user?.name}
        </DropdownMenuLabel>
        <span className="block px-2 pb-1 text-xs text-neutral-dark-1">
          {user?.email ?? "Signed In"}
        </span>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span className="font-medium">Profile</span>
            <DropdownMenuShortcut>⇧P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="font-medium">Billing</span>
            <DropdownMenuShortcut>⇧B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="font-medium">New Team</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <span className="font-medium">Log out</span>
          <DropdownMenuShortcut>⇧Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserCard;
