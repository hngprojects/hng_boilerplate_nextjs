"use client";

import { Dispatch, SetStateAction, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

type Permission = {
  [key: string]: boolean;
};

const perm = {
  "Can view transactions": false,
  "Can view refunds": false,
  "Can log refunds": false,
  "Can view users": false,
  "Can create users": false,
  "Can blacklist/whitelist users": false,
};

const RolePreferencesCreationModal: React.FC = ({
  handleSubmit,
}: {
  handleSubmit: Dispatch<SetStateAction<Permission>>;
}) => {
  const [permissions, setPermissions] = useState<Permission>(perm);
  const [isSaving, setIsSaving] = useState(false);

  const handleToggle = (permission: string, value: boolean) => {
    setPermissions({
      ...permissions,
      [permission]: value,
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <CustomButton type="button" variant="primary">
            Add Permissions
          </CustomButton>
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-6">
          <DialogHeader className="!space-y-0 border-b border-[#CBD5E1] p-1 !pt-0 md:p-3">
            <DialogTitle className="mb-1 text-base font-medium text-[#0A0A0A]">
              Permissions
            </DialogTitle>
            <DialogDescription className="text-xs font-normal text-[#525252]">
              See the list of permissions for this role
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 px-3">
              {Object.keys(permissions).map((permission) => (
                <div
                  key={permission}
                  className="flex items-center justify-between pb-1.5"
                >
                  <span className="text-sm font-normal text-[#525252]">
                    {permission
                      .replaceAll("_", " ")
                      .replaceAll(/\b\w/g, (l) => l.toUpperCase())}
                  </span>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={permissions[permission]}
                      onChange={(event) =>
                        handleToggle(permission, event.target.checked)
                      }
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"></div>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <DialogClose className="rounded border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-2 text-sm font-medium text-[#0F172A] hover:bg-[#c1c9d2]">
                Cancel
              </DialogClose>
              <CustomButton
                variant="primary"
                onClick={() => handleSubmit(permissions)}
              >
                {isSaving ? (
                  <LoadingSpinner className="mx-auto size-4 animate-spin sm:size-5" />
                ) : (
                  "Create Role"
                )}
              </CustomButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RolePreferencesCreationModal;
