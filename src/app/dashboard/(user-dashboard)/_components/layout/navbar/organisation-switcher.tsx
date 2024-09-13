"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Skeleton } from "~/components/ui/skeleton";
import { useOrgContext } from "~/contexts/orgContext";
import { CreateOrganization } from "../../create-organization";

export const OrganisationSwitcher = () => {
  const { data: session } = useSession();
  const { isLoading, switchOrganization } = useOrgContext();

  // Ensure that switchOrganization is properly defined and used
  const handleOrgChange = (currentOrgId: string) => {
    switchOrganization(currentOrgId);
  };

  // Ensure currentOrg is correctly derived
  const currentOrg = session?.userOrg?.find(
    (org) => org.organisation_id === session.currentOrgId,
  );

  // State to manage the modal visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CreateOrganization isOpen={isOpen} setIsOpen={setIsOpen} />
      <Select
        defaultValue={currentOrg?.name}
        onValueChange={(value) => handleOrgChange(value)}
      >
        <SelectTrigger
          aria-label="Select organisation"
          className="flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"
        >
          {isLoading ? (
            <Skeleton className="h-4 w-full" />
          ) : (
            <SelectValue placeholder="Select an organization">
              <span className="ml-2">
                {currentOrg?.name || "No Organization Selected"}
              </span>
            </SelectValue>
          )}
        </SelectTrigger>
        <SelectContent>
          {session?.userOrg?.map((org) => (
            <SelectItem key={org.organisation_id} value={org.organisation_id}>
              <div className="flex items-center gap-3">
                <Avatar className="h-4 w-4 sm:h-3 sm:w-3">
                  <AvatarImage src={""} />
                  <AvatarFallback className="bg-primary/30 uppercase">
                    {org.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {org.name}
              </div>
            </SelectItem>
          ))}
          <Button
            variant="outline"
            className="mt-2 w-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            Create Organization
          </Button>
        </SelectContent>
      </Select>
    </>
  );
};
