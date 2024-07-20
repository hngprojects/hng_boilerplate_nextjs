"use client";

import Image from "next/image";
import { useState } from "react";

import CustomButton from "~/components/common/Button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

const RoleCreation = () => {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ roleName: "", description: "" });
  const [isRoleCreationModalOpen, setIsRoleCreationModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleRoleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoleName(event.target.value);
    if (event.target.value) {
      setErrors((previousErrors) => ({ ...previousErrors, roleName: "" }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        roleName: "Role name is required",
      }));
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(event.target.value);
    if (event.target.value) {
      setErrors((previousErrors) => ({ ...previousErrors, description: "" }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        description: "Description is required",
      }));
    }
  };

  const handleSubmit = () => {
    if (!roleName) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        roleName: "Role name is required",
      }));
    }
    if (!description) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        description: "Description is required",
      }));
    }
    if (roleName && description) {
      //Make post request here
      console.log("Role Name:", roleName);
      console.log("Description:", description);
      // Clear form fields
      setRoleName("");
      setDescription("");
      setErrors({ roleName: "", description: "" });
      setIsSuccessModalOpen(true);
      setIsRoleCreationModalOpen(false);
    }
  };

  return (
    <>
      <Dialog
        open={isRoleCreationModalOpen}
        onOpenChange={setIsRoleCreationModalOpen}
      >
        <DialogTrigger>
          <CustomButton variant="primary">Create Role</CustomButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h2 className="mb-2 text-left text-lg font-semibold text-[#0f0e0e]">
                Create Role
              </h2>
            </DialogTitle>
            <DialogDescription>
              <p className="text-left text-sm font-normal text-[#475569]">
                Define customized responsibilities for collaborative success.
              </p>
              <div className="mb-7 mt-6">
                <label className="mb-2 block text-left text-base font-bold text-[#0A0A0A]">
                  Name of role
                </label>
                <input
                  type="text"
                  placeholder="e.g: IT Staff"
                  value={roleName}
                  onChange={handleRoleNameChange}
                  className="w-full rounded-md border border-[#e4e4e7] px-3 py-2 shadow-sm outline-none focus:border-[#f97316] focus:ring-[#f97316] md:w-[230px]"
                />
                {errors.roleName && (
                  <p className="mt-1 text-sm text-red-500">{errors.roleName}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-left text-base font-bold text-[#0A0A0A]">
                  Role Descriotion
                </label>
                <textarea
                  value={description}
                  placeholder="describe role"
                  onChange={handleDescriptionChange}
                  className="min-h-20 w-full resize-none rounded-md border border-[#e4e4e7] px-3 py-2 shadow-sm outline-none focus:border-[#f97316] focus:ring-[#f97316]"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.description}
                  </p>
                )}
              </div>
              <div className="mt-8 flex items-center justify-end gap-4">
                <div onClick={() => setIsRoleCreationModalOpen(false)}>
                  <CustomButton variant="subtle">Cancel</CustomButton>
                </div>

                <div onClick={() => handleSubmit()}>
                  <CustomButton variant="primary">Create Role</CustomButton>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {isSuccessModalOpen && (
        <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription className="justiify-center flex flex-col items-center">
                <Image
                  src="/checkmark.svg"
                  alt="success checkmark"
                  width={72}
                  height={72}
                  priority
                />
                <h2 className="text-lg font-semibold text-[#0a0a0a]">
                  Success
                </h2>
                <p className="mb-4 text-sm font-normal text-[#475569]">
                  You have created a new role successfully!
                </p>
                <div
                  className="w-full"
                  onClick={() => setIsSuccessModalOpen(false)}
                >
                  <CustomButton variant="primary">Continue</CustomButton>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default RoleCreation;
