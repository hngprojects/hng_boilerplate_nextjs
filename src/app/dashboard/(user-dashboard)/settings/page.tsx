"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const pronounsOptions = ["He/Him", "She/Her", "Other"];

const SettingsPage: React.FC = () => {
  const [socialLinks, setSocialLinks] = useState<string[]>(["", ""]);
  const [selectedPronoun, setSelectedPronoun] = useState<string>("Select");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: "",
    jobTitle: "",
    department: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handlePronounSelect = (pronoun: string) => {
    setSelectedPronoun(pronoun);
    setIsDropdownOpen(false);
  };

  const handleChange = (
    product: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = product.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(
        "https://api-expressjs.boilerplate.hng.tech/api-docs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            pronouns: selectedPronoun,
            socialLinks,
          }),
        },
      );

      if (response.ok) {
        setIsModalOpen(true);
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <form className="flex w-[826px] flex-col gap-4 px-[36px] py-[30px]">
        <div
          className="flex w-full flex-col gap-6 text-sm"
          onSubmit={(value) => value.preventDefault()}
        >
          <div className="flex w-full flex-col gap-4">
            <p className="text-sm font-medium">Your photo</p>
            <div className="flex gap-4">
              <div className="hover:bg-black-1 flex w-full max-w-[120px] cursor-pointer items-center justify-between gap-2">
                <Avatar data-testid="avatar" className="h-[108px] w-[108px]">
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col justify-center gap-2 text-sm">
                <p className="font-semibold text-primary">Change your photo</p>
                <p>Photos help your teammates recognize you.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex w-full flex-col gap-2">
              <label className="font-medium">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                className="w-full rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label className="font-medium">Pronouns</label>
              <div className="relative">
                <div
                  className="w-full cursor-pointer rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedPronoun}
                </div>
                {isDropdownOpen && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-border bg-white">
                    {pronounsOptions.map((option) => (
                      <div
                        key={option}
                        className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                        onClick={() => handlePronounSelect(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex w-full flex-col gap-2">
              <label className="font-medium">Your job title</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Enter job title"
                className="w-full rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
                onChange={handleChange}
                value={formData.jobTitle}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label className="font-medium">Department or team</label>
              <input
                type="text"
                name="department"
                placeholder="Enter department or team"
                className="w-full rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
                onChange={handleChange}
                value={formData.department}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label className="font-medium">Your email address</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email address"
              className="w-full rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <div>
              <label className="font-medium">Bio</label>
              <textarea
                name="bio"
                style={{ resize: "none", height: "80px" }}
                placeholder="Enter your bio"
                className="w-full rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
                onChange={handleChange}
                value={formData.bio}
              />
            </div>
            <span>Maximum of 64 characters</span>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-col gap-2">
              <label className="font-medium">Connect Social links</label>

              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    src="/settings/facebook.svg"
                    width={24}
                    height={24}
                    alt="Link icon"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Link to social platform"
                  className="w-full rounded-md border border-border px-3 py-2 pl-12 placeholder:text-sm placeholder:text-slate-400"
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    src="/settings/google.svg"
                    width={24}
                    height={24}
                    alt="Link icon"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Link to social platform"
                  className="w-full rounded-md border border-border px-3 py-2 pl-12 placeholder:text-sm placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <CustomButton variant="outline">Cancel</CustomButton>
          <CustomButton
            variant="primary"
            onClick={handleSaveChanges}
            className="font-medium"
          >
            Save Changes
          </CustomButton>
        </div>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex w-[512px] flex-col gap-4 rounded-lg bg-white p-6">
            <div className="flex flex-col justify-start gap-2">
              <h2 className="text-xl font-bold">Profile Updated!</h2>
              <p className="">Your profile has been successfully updated.</p>
            </div>
            <div className="flex w-fit justify-end">
              <CustomButton variant="primary" onClick={handleCloseModal}>
                Continue
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
