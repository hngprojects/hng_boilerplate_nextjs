"use client";

import { EllipsisIcon } from "lucide-react";
import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { Input } from "~/components/common/input";
import InviteMemberModal from "~/components/common/modals/invite-member";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/components/ui/use-toast";

type Member = {
  avatar?: string;
  id: number;
  name: string;
  email: string;
  role: string;
};

const memberData: Member[] = [
  {
    avatar: "CB",
    id: 1,
    name: "Chad Bosewick",
    email: "ChadBoseW@gmail.com",
    role: "Admin",
  },
  {
    avatar: "SN",
    id: 2,
    name: "Chad Bosewick",
    email: "ChadBoseW@gmail.com",
    role: "Admin",
  },
  {
    avatar: "CB",
    id: 3,
    name: "Chad Bosewick",
    email: "ChadBoseW@gmail.com",
    role: "Admin",
  },
  {
    avatar: "CB",
    id: 4,
    name: "Chad Bosewick",
    email: "ChadBoseW@gmail.com",
    role: "Admin",
  },
  {
    avatar: "CB",
    id: 5,
    name: "Chad Bosewick",
    email: "ChadBoseW@gmail.com",
    role: "Admin",
  },
];

const activeMembers: number = memberData.length;

const Members = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText("https://example.com").then(() => {
      toast({
        description: "Invite link copied to clipboard.",
      });
    });
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="ml-4 w-5/6 space-x-4 text-[#0A0A0A]">
      <div className="border-b border-[#CBD5E1] p-4">
        <h2 className="text-2xl font-semibold">Members</h2>
        <p className="text-sm text-[#525252]">
          Manage who has access to this workspace
        </p>
      </div>
      <div className="flex flex-col justify-between space-y-2 p-4 text-sm">
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="font-bold">Invite Link</p>
            <p>
              This provides a unique URL that allows anyone to join your
              workspace
            </p>
          </div>
          <div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                onChange={() => {}}
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"></div>
            </label>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <CustomButton variant="outline" className="w-full overflow-hidden">
            https://www.figma.com/design/7hCSTNzQOJLl9aww6wEEd1/Managing-Users----Team-Learn-AI?node-i
          </CustomButton>
          <CustomButton
            variant="primary"
            className="ml-8 space-x-4"
            onClick={handleCopy}
          >
            Copy link
          </CustomButton>
        </div>
      </div>
      <div className="w-full space-y-2">
        <h4 className="text-lg font-medium">Manage members</h4>
        <p className="text-sm">
          On the Free plan all members in a workspace are administrators.
          Upgrade to a paid plan to add the ability to assign or remove
          administrator roles. <span className="text-primary">Go to Plans</span>
        </p>
      </div>
      <div className="my-8 flex justify-between">
        <div className="flex gap-4">
          <Input placeholder="Search by name or email" />
          <Select>
            <SelectTrigger className="w-[100px] bg-white">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Roles</SelectLabel>
                <SelectItem value="apple">Name</SelectItem>
                <SelectItem value="banana">Email</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <CustomButton variant="primary" onClick={handleModalOpen}>
          Invite people
        </CustomButton>
      </div>
      <div>
        <p className="text-sm">{activeMembers} active members</p>
        <ul>
          {memberData.map((member) => {
            return (
              <li
                key={member.id}
                className="flex items-center justify-between border-b border-[#CBD5E1] p-2"
              >
                <span className="flex gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-center">
                    {member.avatar}
                  </div>
                  <div className="flex flex-col gap-2 font-semibold">
                    {member.name}
                    <p className="text-sm font-normal">{member.email}</p>
                  </div>
                </span>

                <div className="justify-self-end">
                  <Select>
                    <SelectTrigger className="mx-6 w-[100px] border-none bg-white">
                      <SelectValue placeholder={member.role} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="guest">Guest</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <EllipsisIcon onClick={() => {}} className="flex-shrink-0" />
              </li>
            );
          })}
        </ul>
        <div className="my-8 flex items-center justify-between">
          <div>
            <h4 className="text-lg font-medium">Export Members List</h4>
            <p className="text-sm">
              Export a CSV with information of all members of your team
            </p>
          </div>
          <CustomButton variant="primary">Export CSV</CustomButton>
        </div>
      </div>
      <InviteMemberModal show={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default Members;
