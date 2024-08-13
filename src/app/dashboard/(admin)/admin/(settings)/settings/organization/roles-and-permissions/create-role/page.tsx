"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { createRole } from "~/actions/roles-and-permissions";
import RolePermissionsCreationModal from "~/components/common/modals/roles-permissions-creation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useLocalStorage } from "~/hooks/use-local-storage";
import { roleSchema } from "~/schemas";

type UseFormInputs = z.infer<typeof roleSchema>;
type Permission = {
  [key: string]: boolean;
};

function CreateNewRolePage() {
  const [org_id] = useLocalStorage<string>("current_orgid", "");
  const [permissions, setPermissions] = useState<Permission>({});

  const { register, handleSubmit } = useForm<UseFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(roleSchema),
  });

  const onValid = async (values: UseFormInputs) => {
    try {
      const { error, status } = await createRole(values, org_id);
      if (error && status) {
        // show toast
      } else {
        // show toast dismiss modal
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex w-full max-w-[682px] flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 text-[##0A0A0A]">
          <Link
            href="/dashboard/admin/settings/organization/roles-and-permissions"
            className=""
          >
            <ChevronLeftIcon className="size-6" />
          </Link>
          <h3 className="text-[28px] font-semibold">Create Role</h3>
        </div>
        <p className="w-full max-w-[610px] text-sm leading-normal text-[#525252]">
          Custom roles let you group permissions and assign them to principals
          in your organization. You can manually select permissions or import
          permissions from another role.
        </p>
      </div>
      <div className="flex w-full flex-col gap-6">
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex w-full flex-col gap-6"
        >
          <div className="flex w-full max-w-[620px] flex-col gap-2">
            <label className="mb-2 block text-left text-base font-bold text-neutral-dark-2">
              Name of role
            </label>
            <input
              type="text"
              placeholder="e.g: IT Staff"
              {...register("name")}
              className="!w-full rounded-md border border-border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-primary focus:ring-ring md:w-56"
            />
          </div>
          <div className="flex w-full max-w-[620px] flex-col gap-2">
            <label className="block text-left text-base font-bold text-neutral-dark-2">
              Permissions
            </label>
            <Select {...register("permissions")}>
              <SelectTrigger>
                <SelectValue
                  placeholder="Select Permissions"
                  className="text-neutral-dark-2"
                />
              </SelectTrigger>
              <SelectContent>
                {[
                  {
                    name: "Super Admin",
                    description: "Full control and Full Permissions",
                  },
                  {
                    name: "Admin",
                    description: "Full control and Limited Permissions",
                  },
                  {
                    name: "User",
                    description: "Limited Control and Limited Permissions",
                  },
                  {
                    name: "Custom Role",
                    description: "Custom Control and Custom Permissions",
                  },
                ].map((permission) => (
                  <SelectItem
                    key={permission.name}
                    value={permission.name}
                    className="flex flex-col items-start gap-1 px-1.5 py-[14px] text-neutral-dark-1 hover:rounded-sm hover:bg-[#F4F4F5] hover:text-neutral-dark-2"
                  >
                    <h6 className="font-medium">{permission.name}</h6>
                    <p className="text-sm">{permission.description}</p>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-full max-w-[620px] flex-col gap-2">
            <label className="block text-left text-base font-bold text-neutral-dark-2">
              Role Description
            </label>
            <textarea
              placeholder="describe role"
              {...register("description")}
              className="min-h-20 w-full resize-none rounded-md border border-border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-primary focus:ring-ring"
            />
          </div>
        </form>
        <div className="">
          <RolePermissionsCreationModal handleSubmit={setPermissions} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewRolePage;
