'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Database, User, Users, Menu, ChevronDown, ChevronLeft, ChevronRight, Banknote, Bell, Globe, CircleHelp } from 'lucide-react';
import AccountIcon from '../components/icons/accountIcon';
import LogoIcon from '../components/icons/logo';
import SearchIcon from '../components/icons/searchIcon';
import profile from '../../../public/images/avatar.png'


const SideMenu = ({ children, }: { children: React.ReactNode }) => {
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)

    const pathname = usePathname()

    const handleSideBar = () => {
        setSideBarOpen(prevBar => !prevBar)
    }

    return (
        <div className='w-full h-screen flex flex-col'>
            <div className='fixed w-full h-[60px] flex items-center justify-between px-4 md:px-[2rem] bg-white z-10'>
                <div className='flex items-center gap-x-12'>
                    <div className='flex items-center gap-x-4'>
                        <Menu className='stroke-[1px] size-4 md:size-7 cursor-pointer' onClick={handleSideBar} role="button"
                            aria-label="menu" />
                        <LogoIcon className='text-lg md:text-2xl text-[#F97316]' />
                        <h2 className='max-[610px]:hidden md:block text-2xl font-semibold'>Boilerplate.</h2>
                    </div>
                    <ul className='hidden min-[800px]:flex items-center gap-x-4 text-sm font-semibold'>
                        <li className='text-[#F97316] cursor-pointer'>Overview</li>
                        <li className='cursor-pointer'>Customers</li>
                        <li className='cursor-pointer'>Products</li>
                    </ul>
                </div>
                <div className='flex items-center gap-x-2 lg:gap-x-4'>
                    <div className='flex items-center gap-x-1 border border-gray-200 rounded-md p-2'>
                        <SearchIcon className='text-gray-500' />
                        <input type='text' placeholder='Search option...' className='text-xs focus:outline-none' />
                    </div>
                    <Bell className='h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1' />
                    <CircleHelp className='h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1' />
                    <div className='flex items-center gap-x-2'>
                        <Image
                            src={profile}
                            alt='profile'
                            width={40}
                            height={40}
                            className='w-[1.5rem] md:w-[2rem] rounded-full'
                        />
                        <ChevronDown className='h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1' />
                    </div>
                </div>
            </div>

            <div className='flex pt-[60px]'>
                <div className={`fixed top-[60px] flex flex-col px-[1.5rem] w-[280px] lg:w-[310px] bg-gray-100 rounded-t-2xl duration-500 ease-in-out ${sideBarOpen ? 'left-0' : 'left-[-100%] md:left-0'} h-full overflow-y-auto pb-20 z-10`} role="navigation"
                    aria-hidden={sideBarOpen}>
                    <div className='h-full flex flex-col gap-y-6 py-[1rem]'>
                        <h2 className='flex items-center gap-x-1 text-xl font-semibold'><ChevronLeft />Settings</h2>
                        <p className='text-sm font-semibold'>Profile</p>
                        <ul className='flex flex-col gap-y-6 text-sm text-[#525252]'>
                            <li className='flex gap-x-2 items-center'><User className='stroke-[1.5px] size-5' />General</li>
                            <div className='flex items-center justify-between'>
                                <li className='flex gap-x-2 items-center'><AccountIcon />Account</li>
                                <ChevronRight className='stroke-[1.5px] size-5' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <li className='flex gap-x-2 items-center'><Bell className='stroke-[1.5px] size-5' />Notification</li>
                                <ChevronRight className='stroke-[1.5px] size-5' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <li className='flex gap-x-2 items-center'><Banknote className='stroke-[1.5px]' />Payment Information</li>
                                <ChevronRight className='stroke-[1.5px] size-5' />
                            </div>
                            <li className='flex gap-x-2 items-center'><Database className='stroke-[1px] size-5' />Data and Privacy</li>
                            <li className='flex gap-x-2 items-center'><Globe className='stroke-[1px] size-5' />Language and Region</li>
                        </ul>
                        <hr />
                        <p className='text-sm font-semibold'>Organization</p>
                        <ul className='flex flex-col gap-y-6 text-sm text-[#525252]'>
                            <div className='flex items-center justify-between'>
                                <li className='flex gap-x-2 items-center'><Users className='stroke-[1.5px] size-5' />Members</li>
                                <ChevronRight className='stroke-[1.5px] size-5' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <li className='flex gap-x-2 items-center'><Bell className='stroke-[1.5px] size-5' />Roles and permissions</li>
                                <ChevronRight className='stroke-[1.5px] size-5' />
                            </div>
                            <div className={`${pathname === '/' ? 'bg-[#F97316] text-white' : ''} flex items-center justify-between rounded-md py-2 w-full -px-6`}>
                                <li className='flex gap-x-2 items-center'><Banknote className='stroke-[1.5px] size-5' />Integrations</li>
                                <ChevronRight className='stroke-[1.5px] size-5' />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex-1 overflow-y-auto pt-6 px-[2rem] md:ml-[280px] lg:ml-[310px] bg-white'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SideMenu;
