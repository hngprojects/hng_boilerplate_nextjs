import axios from "axios";
import { ChevronDown } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
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
import { toast } from "~/components/ui/use-toast";
import { cn } from "~/lib/utils";

const handleLogout = async () => {
  await signOut({
    callbackUrl: "/",
  });
  toast({
    title: "Success",
    description: "You have Sucessfully Logged out.",
    variant: "default",
  });
};

const UserCard = () => {
  const { data: session, status } = useSession();
  const { user } = session ?? {};
  const [profilePicUrl, setProfilePicUrl] = useState<string | undefined>("");
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState<boolean>(false);

  const fetchProfileData = useCallback(async () => {
    if (status === "authenticated" && user?.id) {
      try {
        const baseUrl = await getApiUrl();
        const API_URL = `${baseUrl}/api/v1/profile/${user.id}`;
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
          },
        });
        if (response.data?.data) {
          const { avatar_url, profile_pic_url } = response.data.data;
          setProfilePicUrl(avatar_url || profile_pic_url);
        }
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch profile data.",
          variant: "destructive",
        });
      }
    }
  }, [status, user?.id, session?.access_token]);

  useEffect(() => {
    fetchProfileData();
    const handleProfileUpdate = (event: CustomEvent) => {
      if (event.detail && event.detail.profilePicUrl) {
        setProfilePicUrl(event.detail.profilePicUrl);
      } else {
        fetchProfileData();
      }
    };

    window.addEventListener(
      "userProfileUpdate",
      handleProfileUpdate as EventListener,
    );

    return () => {
      window.removeEventListener(
        "userProfileUpdate",
        handleProfileUpdate as EventListener,
      );
    };
  }, [fetchProfileData]);

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
              <AvatarImage
                src={`${profilePicUrl}?t=${Date.now()}`}
                alt="User Avatar"
              />
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
        <DropdownMenuItem
          onClick={() => setLogoutModalIsOpen(true)}
          className="cursor-pointer"
        >
          <span className="font-medium">Log out</span>
          <DropdownMenuShortcut>⇧Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
      {logoutModalIsOpen && (
        <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-[#00000025]">
          <div className="flex w-4/5 flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 sm:h-1/6 sm:w-1/3">
            <span className="font-medium">
              Are you sure you want to leave the application ?
            </span>
            <div className="flex w-full items-center justify-end gap-2">
              <button
                onClick={() => setLogoutModalIsOpen(false)}
                className="rounded-lg border-2 border-black p-2 text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 p-2 text-white hover:opacity-75"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </DropdownMenu>
  );
};

export default UserCard;
