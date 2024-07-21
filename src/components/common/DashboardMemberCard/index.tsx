"use client";

import { Ellipsis } from "lucide-react";
import Image, { ImageLoaderProps } from "next/image";
import { PointerEventHandler } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

type DashboardMemberCardProperties = {
  profileImage: string;
  fullName: string;
  emailAddress: string;
  role: string;
  roles: Array<string>;
  otherInfo: Array<{
    info: string;
    onInfoClick: PointerEventHandler<HTMLDivElement>;
  }>;
  changeRole: (role: string) => void;
  deleteMember: PointerEventHandler<HTMLDivElement>;
};

const Index = ({
  profileImage,
  fullName,
  emailAddress,
  role,
  roles,
  otherInfo,
  changeRole,
  deleteMember,
}: DashboardMemberCardProperties) => {
  return (
    <div className="dashboard-member-card border-b-solid flex items-center gap-[16px] border-b-[1px] border-slate-300 py-[24px]">
      <Image
        loader={({ src }: ImageLoaderProps) => {
          return src.startsWith("http") ? src : `https://i.ibb.co/${src}`;
        }}
        unoptimized
        src={profileImage}
        width={500}
        height={500}
        alt={fullName}
        className="h-[40px] w-[40px] rounded-full object-cover"
      />

      <div className="flex w-64 flex-auto flex-col gap-[12px]">
        <h2 className="text-[18px] font-semibold leading-[normal] text-neutral-600">
          {fullName}
        </h2>
        <p className="text-[14px] text-neutral-600">{emailAddress}</p>
      </div>

      <div className="flex-auto">
        <Select
          onValueChange={(value: string) => {
            changeRole(value);
          }}
        >
          <SelectTrigger className="w-[100px] border-0 border-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
            <SelectValue
              placeholder={role}
              className="text-[14px] font-medium text-slate-900"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {roles.map((role, index) => (
                <SelectItem
                  key={index}
                  value={role}
                  className="text-[14px] font-medium text-slate-900"
                >
                  {role}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onPointerDown={deleteMember}>
            Delete member
          </DropdownMenuItem>
          {otherInfo &&
            otherInfo.map((info, index) => (
              <DropdownMenuItem key={index} onPointerDown={info.onInfoClick}>
                {info.info}
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Index;
