import { ChevronDown } from "lucide-react";
import type { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";

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
import { cn } from "~/lib/utils";

const handleLogout = async () => {
  await signOut({
    callbackUrl: "/",
  });
};

type UserCardProperties = {
  status: "authenticated" | "loading" | "unauthenticated";
  session: DefaultSession | null;
};

const UserCard = ({ session, status }: UserCardProperties) => {
  const { user } = session ?? {};
  const loading = status === "loading";
  const isAuth = status === "authenticated";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center rounded-full p-1 hover:bg-subtle"
          disabled={loading}
        >
          {loading && (
            <span className="size-8 animate-pulse rounded-full bg-subtle-hover/80 sm:size-10" />
          )}
          {isAuth && (
            <Avatar className="size-8 sm:size-10">
              <AvatarImage src={user?.image ?? ""} />
              <AvatarFallback className="bg-primary/30 uppercase">
                {user?.email?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          )}
          <ChevronDown
            data-testid="chevronDown"
            className={cn(
              "size-4 text-neutral-dark-2 sm:size-5",
              !isAuth && "opacity-0",
            )}
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
        <DropdownMenuItem onClick={handleLogout}>
          <span className="font-medium">Log out</span>
          <DropdownMenuShortcut>⇧Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserCard;
