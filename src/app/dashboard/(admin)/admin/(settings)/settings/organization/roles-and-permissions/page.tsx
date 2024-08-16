"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import {
  getPermissions,
  getRolePermissions,
  getRoles,
  updateRole,
} from "~/actions/roles-and-permissions";
import CustomButton from "~/components/common/common-button/common-button";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { useToast } from "~/components/ui/use-toast";
import { useLocalStorage } from "~/hooks/use-local-storage";

type Role = {
  id: string;
  name: string;
  description: string;
};

type Permission = {
  id: string;
  name: string;
  description: string;
};

const RolesAndPermission = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<string | undefined>();
  const [permissions, setPermissions] = useState<string[] | []>([]);
  const [allPermission, setAllPermissions] = useState<Permission[] | []>([]);
  const [isAllPermissionsLoaded, setIsAllPermissionsLoaded] =
    useState<boolean>(false);
  const [roles, setRoles] = useState<Role[]>([]);
  const [apiUrl, setApiUrl] = useState("");
  const { toast } = useToast();
  const [loadingRoles, setLoadingRoles] = useState<boolean>(true);
  const [loadingPermissions, setLoadingPermissions] = useState<boolean>(false);
  const [loadingRequest, setLoadingRequest] = useState<boolean>(false);
  const [currentOrgId] = useLocalStorage<string | undefined>(
    "current_orgid",
    "",
  );

  useEffect(() => {
    if (!currentOrgId) return;
    const fetchData = async () => {
      try {
        const url = await getApiUrl();
        setApiUrl(url);
        const { data, error } = await getRoles(currentOrgId);

        if (error) throw new Error("An error occurred!");

        setRoles(data.data);
        setLoadingRoles(false);
      } catch (error: unknown) {
        toast({
          title: "Error occurred",
          description:
            error instanceof Error ? error.message : "Error fetching data",
          variant: "destructive",
        });
        setLoadingRoles(false);
      }
    };
    setLoadingRoles(true);
    fetchData();
  }, [currentOrgId, toast]);

  useEffect(() => {
    const fetchPermissions = async () => {
      if (selectedRoleId && currentOrgId) {
        setLoadingPermissions(true);
        try {
          await getRolePermissions(currentOrgId, selectedRoleId).then(
            (data) => {
              const rolesData = data.data;
              if (rolesData.permissions.length > 0) {
                setPermissions(
                  rolesData.permissions.map(
                    (permission: Permission) => permission.id,
                  ),
                );
              }
              setLoadingPermissions(false);
            },
          );
        } catch {
          toast({
            title: "An error occurred",
            description: "Error fetching permissions",
            variant: "destructive",
          });
          setLoadingPermissions(false);
        }
      }
    };
    fetchPermissions();
  }, [selectedRoleId, apiUrl, currentOrgId, toast]);

  useEffect(() => {
    const fetchPermissions = async () => {
      await getPermissions()
        .then((data) => {
          setIsAllPermissionsLoaded(true);
          if (data.data) setAllPermissions(data.data);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          setIsAllPermissionsLoaded(true);
        });
    };
    fetchPermissions();
  }, []);

  const handleRoleClick = (roleId: string) => {
    setSelectedRoleId(roleId);
  };

  const handleToggle = (permissionId: string, checked: boolean) => {
    if (checked) {
      setPermissions((previous) => [...previous, permissionId]);
    } else {
      setPermissions((previous) =>
        previous.filter((id) => id !== permissionId),
      );
    }
  };

  const handleSave = async () => {
    if (!selectedRoleId || !currentOrgId) return;
    const selectedRole =
      roles.some((role) => role.id === selectedRoleId) &&
      roles.find((role) => role.id === selectedRoleId);
    if (!selectedRole) return;
    setLoadingRequest(true);
    try {
      await updateRole(
        { ...selectedRole, permissions },
        currentOrgId,
        selectedRoleId,
      ).then(() => {
        toast({
          title: "Success",
          description: "Role updated successfully",
          variant: "default",
        });
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to update role",
        variant: "destructive",
      });
    }
    setLoadingRequest(false);
  };

  return (
    <div className="">
      <div className="flex gap-8">
        <div className="w-1/4">
          <h2 className="mb-10 text-xl font-medium">Roles</h2>
          <ul className="rounded-md border border-[#CBD5E1] p-3">
            {loadingRoles ? (
              <div className="flex justify-center py-8">
                <LoadingSpinner className="size-4 animate-spin stroke-orange-500 sm:size-5" />
              </div>
            ) : (
              roles.map((role) => (
                <li
                  key={role.id}
                  className={`mb-2 cursor-pointer border-[#CBD5E1] p-2 ${
                    selectedRoleId === role.id
                      ? "rounded-md bg-orange-500 text-white"
                      : "border-b bg-white text-[#0a0a0a] hover:bg-[#F1F5F9]"
                  }`}
                  onClick={() => handleRoleClick(role.id)}
                >
                  <h3 className="text-base font-medium">{role.name}</h3>
                  <p
                    className={`text-xs font-normal ${selectedRoleId === role.id ? "text-white" : "text-[#525252]"}`}
                  >
                    {role.description}
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="w-3/4">
          <div className="mb-2 flex justify-end">
            <CustomButton variant="primary" className="mb-6">
              <Link href="/dashboard/admin/settings/organization/roles-and-permissions/create-role">
                + Create roles
              </Link>
            </CustomButton>
          </div>
          <div className="rounded-md border border-[#CBD5E1] px-5 py-6">
            <div className="border-b border-[#CBD5E1] pb-4 pl-2">
              <h2 className="mb-2 text-base font-medium text-[#0A0A0A]">
                Permissions
              </h2>
              <p className="text-xs font-normal text-[#525252]">
                See the list of permissions for this role
              </p>
            </div>
            {selectedRoleId === undefined ? (
              <div className="item-center flex flex-col justify-center py-48">
                <p className="text-center text-sm font-normal text-[#525252]">
                  No list to show
                </p>
                <p className="text-center text-sm font-normal text-[#525252]">
                  Click on a role to view permissions
                </p>
              </div>
            ) : loadingPermissions ? (
              <div className="item-center flex justify-center py-48">
                <LoadingSpinner className="size-4 animate-spin stroke-orange-500 sm:size-5" />
              </div>
            ) : isAllPermissionsLoaded ? (
              <div className="mt-6">
                {allPermission.map((permission) => (
                  <div
                    key={permission.id}
                    className="mb-4 flex items-center justify-between"
                  >
                    <span className="text-sm font-normal text-[#525252]">
                      {permission.name
                        .replaceAll("_", " ")
                        .replaceAll(/\b\w/g, (l) => l.toUpperCase())}
                    </span>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={permissions.includes(permission.id as never)}
                        onChange={(event) =>
                          handleToggle(permission.id, event.target.checked)
                        }
                      />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"></div>
                    </label>
                  </div>
                ))}
                <div className="mt-16 flex justify-center">
                  <button
                    className="w-40 rounded border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-2 text-sm font-medium text-[#0F172A] hover:bg-[#c1c9d2]"
                    onClick={handleSave}
                  >
                    {loadingRequest ? (
                      <LoadingSpinner className="mx-auto size-4 animate-spin sm:size-5" />
                    ) : (
                      "Save Preferences"
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="item-center flex justify-center py-48">
                <LoadingSpinner className="size-4 animate-spin stroke-orange-500 sm:size-5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesAndPermission;
