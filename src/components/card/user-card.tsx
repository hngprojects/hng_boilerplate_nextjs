// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// TODO: remove the ts-checks after auth

import { ChevronDown } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { cn } from '~/utils'

const handleLogout = async () => {
  await signOut({
    callbackUrl: '/',
  })
}

const UserCard = () => {
  const { data: session, status } = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="hover:bg-subtle flex items-center rounded-full p-1"
          disabled={status === 'loading'}
        >
          {status === 'loading' && (
            <span className="bg-subtle-hover/80 size-8 animate-pulse rounded-full sm:size-10" />
          )}
          {status === 'authenticated' && (
            <Avatar className="size-8 sm:size-10">
              <AvatarImage
                src={`${session.user.image}?t=${Date.now()}`}
                alt="User Avatar"
              />
              <AvatarFallback className="bg-primary/30 uppercase">
                {session.user?.first_name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          )}
          <ChevronDown
            data-testid="chevronDown"
            className={cn(
              'text-neutral-dark-2 size-4 sm:size-5',
              status !== 'authenticated' && 'opacity-0'
            )}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-1 w-56" align="end">
        <DropdownMenuLabel className="pb-0 pt-3">
          {session?.user?.first_name} {session?.user?.last_name}
        </DropdownMenuLabel>
        <span className="text-neutral-dark-1 block px-2 pb-1 text-xs">
          {session?.user?.email ?? 'Signed In'}
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
  )
}

export default UserCard
