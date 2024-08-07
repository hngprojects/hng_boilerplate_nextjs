"use client ";

import { useEffect } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useOrgContext } from "~/contexts/orgContext";
import { useLocalStorage } from "~/hooks/use-local-storage";

export const OrganisationSwitcher = () => {
  const [currentId, setCurrentOrgId] = useLocalStorage<string | undefined>(
    "current_orgid",
    "",
  );
  const { organizations } = useOrgContext();

  useEffect(() => {
    if (!currentId && organizations.length > 0) {
      setCurrentOrgId(organizations[0].id);
    }
  }, [currentId, organizations, setCurrentOrgId]);

  const currentOrg = organizations.find((org) => org.id === currentId);

  return (
    <Select defaultValue={currentId} onValueChange={setCurrentOrgId}>
      <SelectTrigger
        aria-label="Select organisation"
        className="flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"
      >
        <SelectValue placeholder="Select an organisation">
          <span className="ml-2">
            {currentOrg ? currentOrg.name : "Select an organisation"}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {organizations.map((org) => (
          <SelectItem key={org.id} value={org.id}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
              <Avatar className="size-4 sm:size-3">
                <AvatarImage src={""} />
                <AvatarFallback className="bg-primary/30 uppercase">
                  {org?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>{" "}
              {org.name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
