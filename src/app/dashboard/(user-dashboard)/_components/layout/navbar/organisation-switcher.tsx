"use client ";

import { useEffect, useState } from "react";

import { getCurrentOrgApi } from "~/actions/switchOrganization";
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
import { useLocalStorage } from "~/hooks/use-local-storage";
import { CreateOrganization } from "../../create-organization";

export const OrganisationSwitcher = () => {
  const [currentOrgId, setCurrentOrgId] = useLocalStorage<string | undefined>(
    "current_orgid",
    "",
  );

  const { organizations, isLoading, switchOrganization } = useOrgContext();

  useEffect(() => {
    if (!currentOrgId && organizations.length > 0) {
      setCurrentOrgId(organizations[0].organisation_id);
      switchOrganization(organizations[0].organisation_id);
    }
    // console.log(organizations);
  }, [currentOrgId, organizations, setCurrentOrgId, switchOrganization]);

  const handleOrgChange = (currentOrg: string) => {
    setCurrentOrgId(currentOrg);
    switchOrganization(currentOrg);
    getCurrentOrgApi({ orgId: currentOrg });
  };

  const currentOrg =
    organizations.length > 0
      ? organizations.find((org) => org.organisation_id === currentOrgId)
      : undefined;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CreateOrganization isOpen={isOpen} setIsOpen={setIsOpen} />
      <Select
        defaultValue={currentOrgId}
        onValueChange={(value) => handleOrgChange(value)}
      >
        <SelectTrigger
          aria-label="Select organisation"
          className="flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"
        >
          {isLoading ? (
            <Skeleton className="h-4 w-full" />
          ) : (
            <SelectValue placeholder={currentOrg?.name}>
              <span className="ml-2">{currentOrg && currentOrg.name}</span>
            </SelectValue>
          )}
        </SelectTrigger>
        <SelectContent>
          {organizations.map((org) => (
            <SelectItem key={org.id} value={org.organisation_id}>
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
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            Create Organisation
          </Button>
        </SelectContent>
      </Select>
    </>
  );
};
