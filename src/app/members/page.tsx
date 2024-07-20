"use client";

import { Check, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

import SettingsSidebar from "~/components/common/settings/sidebar";
import AdminNavbar from "~/components/superadminlayout/navbar/AdminNavbar";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";
import Image from "../../../node_modules/next/image";

const ManageMember = () => {
  const [enabled, setEnabled] = useState(false);
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showDelete, setShowDelete] = useState<number | null>(null);

  const handleLinkChange = (event: { target: { value: string } }) => {
    setLink(event.target.value);
  };

  const handleCopyLink = () => {
    if (link) {
      setError("");
      navigator.clipboard.writeText(link);
    } else {
      setError("Invite link cannot be empty");
    }
  };

  const handleSelectChange = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEllipsisClick = (index: number) => {
    setShowDelete(showDelete === index ? null : index);
  };

  return (
    <>
      <div>
        <AdminNavbar />
      </div>
      <SettingsSidebar />
      <main className="mx-auto w-10/12 p-6 md:p-12">
        <div className="border-b border-border pb-8">
          <h1 className="text-2xl font-medium">Members</h1>
          <p className="text-neutral-dark1 pb-2 text-base font-normal">
            Manage your team Manages and their permissions.
          </p>
        </div>
        <div
          className={`flex items-center justify-between pb-6 ${enabled ? "" : "border-b"} `}
        >
          <div className="pb-3 pt-3">
            <h2 className="pb-2 text-base font-semibold">Invite Link</h2>
            <p className="text-neutral-dark1 text-sm font-normal">
              This provides a unique URL that allows anyone to join your
              workspace.
            </p>
          </div>
          <Switch
            checked={enabled}
            onCheckedChange={() => setEnabled(!enabled)}
          />
        </div>

        {enabled && (
          <div className="flex gap-2">
            <Input
              type="text"
              value={link}
              onChange={handleLinkChange}
              placeholder=""
              className={`w-full rounded-md border px-4 py-2 text-sm`}
            />
            <div className="flex items-center justify-end gap-2">
              <Button
                className="flex w-[110px] items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-white"
                onClick={handleCopyLink}
              >
                <Image
                  src="/icon.svg"
                  alt="copy"
                  width={16}
                  height={16}
                  priority
                />
                <span className="text-nowrap text-sm">Copy Link</span>
              </Button>
              {error && <p className="text-black">{error}</p>}
            </div>
          </div>
        )}

        <div className="py-4">
          <h2 className="pb-2 text-lg font-medium">Manage Members</h2>
          <p className="text-neutral-dark1 text-sm font-normal">
            On the Free plan, all members in a workspace are administrators.
            Upgrade to a paid plan to add the ability to assign or remove
            administrator roles.{" "}
            <span className="cursor-pointer text-primary">
              Go to plans <span>&rarr;</span>
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 items-center justify-between gap-2 rounded-[6px] border px-3 text-sm font-normal placeholder:text-sm">
              <Search
                data-testid="search"
                className="h-4 w-4 text-neutral-dark-2"
              />
              <input
                className="h-full w-full border-none text-neutral-dark-2 outline-none ring-0 placeholder:text-neutral-dark-1"
                placeholder="Search Name and Email"
                data-testid="input"
              />
            </div>
            <div className="relative">
              <div
                className={`relative flex cursor-pointer items-center justify-between rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none ${dropdownOpen ? "w-[200px]" : "w-[73px]"} transition-all duration-300 ease-in-out`}
                onClick={toggleDropdown}
              >
                {selectedOption}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
                  {dropdownOpen ? (
                    <Check className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-full rounded-md bg-white shadow-lg">
                  {["All", "User", "Admin", "Guest"].map((option) => (
                    <li
                      key={option}
                      className={`cursor-pointer px-3 py-2 ${selectedOption === option ? "bg-gray-100" : ""}`}
                      onClick={() => handleSelectChange(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <Button className="w-[118px] rounded-md bg-primary px-4 py-2 text-sm text-white">
            Invite Members
          </Button>
        </div>

        <div className="py-4">
          <h2 className="text-sm font-medium">3 Active Members</h2>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border p-4"
              >
                <div className="flex items-center gap-3">
                  <Avatar data-testid="avatar" className="h-10 w-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="text-neutral-dark1">
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-sm font-normal">john.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <select className="text-sm font-medium text-black">
                    <option>User</option>
                    <option>Admin</option>
                    <option>Guest</option>
                  </select>
                </div>
                <div className="relative">
                  <button
                    className="font-bold text-gray-400"
                    onClick={() => handleEllipsisClick(index)}
                  >
                    ...
                  </button>
                  {showDelete === index && (
                    <div className="absolute left-4 top-5">
                      <button className="text-nowrap text-sm text-red-500">
                        Delete Member
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-medium flex items-center justify-between py-7">
          <div>
            <h2 className="text-lg font-semibold">Export Members</h2>
            <p className="pt-3 text-sm font-medium">
              Export a CSV list of all workspace members.
            </p>
          </div>
          <Button className="w-[110px] rounded-md bg-primary px-4 py-2 text-sm text-white">
            Export CSV
          </Button>
        </div>
      </main>
    </>
  );
};

export default ManageMember;
