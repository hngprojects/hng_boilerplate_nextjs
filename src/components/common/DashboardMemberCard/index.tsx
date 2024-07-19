'use client';

import React, { PointerEventHandler } from 'react'
import Image, { ImageLoaderProps } from 'next/image'
import { Ellipsis } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '~/components/ui/dropdown-menu';
import './index.css';

type DashboardMemberCardProps = {
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
    deleteMember
}: DashboardMemberCardProps) => {
  return (
    <div className="flex dashboard-member-card gap-[16px] items-center py-[24px] border-b-solid border-b-[1px] border-slate-300">
        <Image
            loader={
                ({ src }: ImageLoaderProps) => {
                    return src.startsWith('http')? src : `https://i.ibb.co/${src}`
                }
            }
            unoptimized
            src={profileImage}
            width={500}
            height={500}
            alt={fullName}
            className='w-[40px] h-[40px] object-cover rounded-full'
        />

        <div className='flex flex-col flex-auto gap-[12px] w-64'>
            <h2 className='text-[18px] font-semibold text-neutral-600 leading-[normal]'>
                {fullName}
            </h2>
            <p className='text-[14px] text-neutral-600'>
                {emailAddress}
            </p>
        </div>

        <div className='flex-auto'>
            <Select onValueChange={(value: string) => {
                changeRole(value)
            }}>
                <SelectTrigger className="w-[100px] border-none ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0">
                    <SelectValue placeholder={role} className='text-slate-900 font-medium text-[14px]' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {
                            roles.map((role, index) => (
                                <SelectItem key={index} value={role} className='text-slate-900 font-medium text-[14px]'>
                                    {role}
                                </SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>

        <DropdownMenu>
            <DropdownMenuTrigger>
                <Ellipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onPointerDown={deleteMember}>Delete member</DropdownMenuItem>
                {
                    otherInfo && otherInfo.map((info, index) => (
                        <DropdownMenuItem key={index} onPointerDown={info.onInfoClick}>{info.info}</DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default Index