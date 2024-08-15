"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { createRole, getPermissions } from "~/actions/roles-and-permissions";
import CustomButton from "~/components/common/common-button/common-button";
import RolePermissionsCreationModal from "~/components/common/modals/roles-permissions-creation";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { toast } from "~/components/ui/use-toast";
import { useLocalStorage } from "~/hooks/use-local-storage";
import { roleSchema } from "~/schemas";

type UseFormInputs = z.infer<typeof roleSchema>;
type Role = {
  name: string;
  description: string;
  permissions: Record<string, boolean>;
};

const permOptions: Role[] = [
  {
    name: "Super Admin",
    description: "Full control and Full Permissions",
    permissions: {
      "Can view transactions": true,
      "Can view refunds": true,
      "Can view users": true,
      "Can create users": true,
      "Can blacklist/whitelist users": true,
    },
  },
  {
    name: "Admin",
    description: "Full control and Limited Permissions",
    permissions: {
      "Can view transactions": true,
      "Can view refunds": true,
      "Can view users": true,
      "Can create users": true,
      "Can blacklist/whitelist users": false,
    },
  },
  {
    name: "User",
    description: "Limited Control and Limited Permissions",
    permissions: {
      "Can view transactions": true,
      "Can view refunds": true,
      "Can view users": false,
      "Can create users": false,
      "Can blacklist/whitelist users": false,
    },
  },
  {
    name: "Custom Role",
    description: "Custom Control and Custom Permissions",
    permissions: {
      "Can view transactions": false,
      "Can view refunds": false,
      "Can view users": false,
      "Can create users": false,
      "Can blacklist/whitelist users": false,
    },
  },
];

type APIPermissions = {
  name: string;
  id: string;
  description: string;
};

type PermissionOption = {
  name: string;
  description: string;
  permissions: {
    id: string;
    name: string;
    description: string;
    value: boolean;
  }[];
};

const transformPermissions = (apiResponse: APIPermissions[]) => {
  // eslint-disable-next-line unicorn/no-array-reduce
  const apiResponseMap = apiResponse.reduce<Record<string, APIPermissions>>(
    (accumulator, permission) => {
      accumulator[permission.name.toLowerCase()] = permission;
      return accumulator;
    },
    {},
  );

  const transformedPermOptions = permOptions.map((role) => ({
    name: role.name,
    description: role.description,
    permissions: Object.keys(role.permissions).map((permName) => {
      const permKey = permName.toLowerCase();
      const apiPerm = apiResponseMap[permKey];

      return {
        id: apiPerm.id,
        name: permName,
        description: apiPerm.description,
        value: role.permissions[permName],
      };
    }),
  }));
  return transformedPermOptions;
};

function CreateNewRolePage() {
  const [currentOrgId] = useLocalStorage<string>("current_orgid", "");
  const [isSaving, setIsSaving] = useState(false);
  const [permissions, setPermissions] = useState<
    PermissionOption["permissions"] | []
  >([]);
  const [permissionOptions, setPermissionOptions] = useState<
    PermissionOption[] | []
  >([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UseFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(roleSchema),
  });

  useEffect(() => {
    const fetchPermissions = async () => {
      await getPermissions()
        .then((data) => {
          if (data.data) setPermissionOptions(transformPermissions(data.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    };
    fetchPermissions();
  }, []);

  useEffect(() => {
    if (permissions.length > 0) {
      const permissionIds = permissions
        .filter((permission) => permission.value === true)
        .map((permission) => permission.id);
      setValue("permissions", permissionIds as [string, ...string[]]);
    }
  }, [permissions, setValue]);

  const onValid = async (values: UseFormInputs) => {
    setIsSaving(true);
    try {
      await createRole(values, currentOrgId)
        .then((data) => {
          if (!data.error) {
            toast({
              title: "🎉 Role Created Successfully!",
              description:
                "You have successfully created the new role Role Name. You can now assign this role to team members and manage their permissions in the Roles & Permissions section.",
              variant: "default",
            });
          }
          setIsSaving(false);
        })
        .catch(() => {
          toast({
            title: "⚠️ Error Creating Role",
            description:
              "Oops! Something went wrong while trying to create the new role. Please check your input and try again. If the problem persists, contact support.",
            variant: "destructive",
          });
          setIsSaving(false);
        });
    } catch {
      toast({
        title: "⚠️ Error Creating Role",
        description:
          "Oops! Something went wrong while trying to create the new role. Please check your input and try again. If the problem persists, contact support.",
        variant: "destructive",
      });
      setIsSaving(false);
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
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex w-full flex-col gap-6"
      >
        <div className="flex w-full flex-col gap-6">
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
            <div className="flex flex-col gap-0.5">
              <Select
                onValueChange={(value) => setPermissions(JSON.parse(value))}
              >
                <SelectTrigger className="!text-left">
                  <SelectValue
                    placeholder="Select Permissions"
                    className="text-neutral-dark-2"
                  />
                </SelectTrigger>
                <SelectContent>
                  {permissionOptions.map((option) => (
                    <SelectItem
                      key={option.name}
                      value={JSON.stringify(option.permissions)}
                      className="flex flex-col items-start gap-1 px-1.5 py-[14px] text-neutral-dark-1 hover:rounded-sm hover:bg-[#F4F4F5] hover:text-neutral-dark-2"
                    >
                      <h6 className="font-medium">{option.name}</h6>
                      <p className="text-sm">{option.description}</p>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.permissions && (
                <p className="text-red-500">Please select valid permissions.</p>
              )}
            </div>
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
        </div>
        <div className="flex gap-x-6">
          <RolePermissionsCreationModal
            handleChange={setPermissions}
            permissions={permissions}
          />
          <CustomButton variant="primary" type="submit" isDisabled={isSaving}>
            {isSaving ? (
              <LoadingSpinner
                className={`mx-auto size-4 animate-spin sm:size-5 ${isSaving && "opacity-50"}`}
              />
            ) : (
              "Create Role"
            )}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default CreateNewRolePage;
