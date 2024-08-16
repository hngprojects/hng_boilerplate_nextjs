"use client";

import { Dispatch, SetStateAction } from "react";

import CustomButton from "~/components/common/common-button/common-button";
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
  id: string;
  name: string;
  description: string;
  value: boolean;
};

function RolePreferencesCreationModal({
  permissions,
  handleChange,
}: {
  permissions: Permission[];
  handleChange: Dispatch<
    SetStateAction<
      | {
          id: string;
          name: string;
          description: string;
          value: boolean;
        }[]
      | []
    >
  >;
}) {
  const handleToggle = (index: number, checked: boolean) => {
    const currentElement = permissions.at(index);
    if (currentElement) {
      currentElement.value = checked;
      handleChange([
        ...permissions.slice(0, index),
        currentElement,
        ...permissions.slice(index + 1),
      ]);
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <CustomButton type="button" variant="secondary">
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
              {permissions.map((permission, index) => (
                <div
                  key={permission.id}
                  className="flex items-center justify-between pb-1.5"
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
                      checked={permission.value}
                      onChange={(event) =>
                        handleToggle(index, event.target.checked)
                      }
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"></div>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <DialogClose
                type="button"
                className="rounded border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-2 text-sm font-medium text-[#0F172A] hover:bg-[#c1c9d2]"
              >
                Done
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default RolePreferencesCreationModal;
