'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, ChevronDown, HelpCircle, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '~/components/ui/command'
import { Input } from '~/components/ui/input'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '~/utils'

const organizations = [
  {
    name: "Kingpin's Organisation",
    image: '/placeholder.svg?height=32&width=32',
  },
  {
    name: 'Acme Corp',
    image: '/placeholder.svg?height=32&width=32',
  },
  {
    name: 'Stark Industries',
    image: '/placeholder.svg?height=32&width=32',
  },
]

const links = [
  {
    title: 'Overview',
    href: '/',
  },
  {
    title: 'Analytics',
    href: '/analytics',
  },
  {
    title: 'Reports',
    href: '/reports',
  },
]

export default function DashboardNavbar() {
  const [selectedOrg, setSelectedOrg] = React.useState(organizations[0])
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex w-full items-center border-b px-4 py-4 md:px-6"
    >
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={isOpen}
            aria-label="Select organization"
            className="w-[200px] justify-between hover:bg-transparent"
          >
            <motion.div className="flex items-center gap-2" layout>
              <Avatar className="h-8 w-8">
                <AvatarImage src={selectedOrg.image} alt={selectedOrg.name} />
                <AvatarFallback>ORG</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline">{selectedOrg.name}</span>
            </motion.div>
            <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search organization..." />
            <CommandList>
              <CommandEmpty>No organization found.</CommandEmpty>
              <CommandGroup>
                <AnimatePresence>
                  {organizations.map((org) => (
                    <motion.div
                      key={org.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CommandItem
                        onSelect={() => {
                          setSelectedOrg(org)
                          setIsOpen(false)
                        }}
                        className="flex items-center gap-2 px-2 py-1.5"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={org.image} alt={org.name} />
                          <AvatarFallback>ORG</AvatarFallback>
                        </Avatar>
                        <span>{org.name}</span>
                      </CommandItem>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <nav className="mx-6 hidden md:flex md:items-center md:gap-4 lg:gap-6">
        <motion.div
          className="flex gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {links.map((link) => (
            <Button
              key={link.href}
              asChild
              className={cn(
                'text-neutral-dark-2 flex rounded bg-white px-3 py-1.5 text-sm font-medium',
                pathname === link.href && 'bg-subtle text-primary'
              )}
              variant="ghost"
            >
              <Link href={link.href}>{link.title}</Link>
            </Button>
          ))}
        </motion.div>
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          transition={{ delay: 0.3 }}
        >
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search option..."
            className="w-[200px] pl-8"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="ghost" size="icon" aria-label="Help">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </motion.header>
  )
}
