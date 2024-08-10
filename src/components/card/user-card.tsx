import { ChevronDown } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

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

const UserCard = () => {
  const { data: session, status } = useSession();
  const { user } = session ?? {};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center rounded-full p-1 hover:bg-subtle"
          disabled={status === "loading"}
        >
          {status === "loading" && (
            <span className="size-8 animate-pulse rounded-full bg-subtle-hover/80 sm:size-10" />
          )}
          {status === "authenticated" && (
            <Avatar className="size-8 sm:size-10">
              <AvatarImage src={user?.image ?? ""} />
              <AvatarFallback className="bg-primary/30 uppercase">
                {user?.first_name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          )}
          <ChevronDown
            data-testid="chevronDown"
            className={cn(
              "size-4 text-neutral-dark-2 sm:size-5",
              status !== "authenticated" && "opacity-0",
            )}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-1 w-56" align="end">
        <DropdownMenuLabel className="pb-0 pt-3">
          {user?.first_name} {user?.last_name}
        </DropdownMenuLabel>
        <span className="block px-2 pb-1 text-xs text-neutral-dark-1">
          {user?.email ?? "Signed In"}
        </span>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/dashboard" passHref legacyBehavior>
            <DropdownMenuItem className="cursor-pointer">
              <span className="font-medium">Overview</span>
              <DropdownMenuShortcut>⇧O</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/customers" passHref legacyBehavior>
            <DropdownMenuItem className="cursor-pointer">
              <span className="font-medium">Customers</span>
              <DropdownMenuShortcut>⇧C</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/products" passHref legacyBehavior>
            <DropdownMenuItem className="cursor-pointer">
              <span className="font-medium">Products</span>
              <DropdownMenuShortcut>⇧P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/admin/settings" passHref legacyBehavior>
            <DropdownMenuItem className="cursor-pointer">
              <span className="font-medium">Settings</span>
              <DropdownMenuShortcut>⇧G</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          <span className="font-medium">Log out</span>
          <DropdownMenuShortcut>⇧Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserCard;
