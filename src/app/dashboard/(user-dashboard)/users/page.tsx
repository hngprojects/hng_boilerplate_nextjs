'use client';
import React, { useEffect, useState } from 'react';
import { Download, Printer, Filter } from 'lucide-react';
import CardComponent from '~/components/common/DashboardCard/CardComponent';
import { cardData } from '~/components/adminDashboard/cardData';
import { users } from '~/components/adminDashboard/userData';
import { UserTable } from '../settings/_components/UserTable/page';
import { fetchUserData } from '~/actions/user';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@radix-ui/react-select';

function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };
    return date.toLocaleDateString(undefined, options);
}

const Users = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchUserData();
                const mappedData = data.data.data .map((item, index) => ({
                    id: index + 1, 
                    name: 'Oladipo Munirat', 
                    email: 'oladipomunirat@gmail.com', 
                    img: '', 
                    role: 'User',
                    loginTime: formatDateTime(item.loginTime),
                    status: item.logoutTime ? 'success' : 'failure',
                    ipAddress: item.ipAddress,
                }));
                setUserData(mappedData );
                console.log(data.data.data);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Failed to fetch user data');
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return (
        <div className='my-10 mx-6'>
            <div className='flex justify-between my-5 gap-10'>
                {users.map((card, index) => (
                    <CardComponent
                        key={index}
                        title={card.title}
                        value={card.value}
                        description={card.description}
                        icon={card.icon}
                    />
                ))}
            </div>
            <div className='flex justify-between gap-4'>
                <div>
                    <h1 className='font-bold text-2xl'>Users Tracking</h1>
                    <p>Manage Users & Track Activity</p>
                </div>
                <div>
                    <div className='flex gap-5 text-[#525252] cursor-pointer my-3 justify-end'>
                        <p><Printer /></p>
                        <p><Download /></p>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[90px] flex text-[#525252] gap-3 border p-2 rounded-md">
                            <Filter />
                            <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className=' bg-white shadow-md z-10 p-2'>
                                <SelectLabel>Filter by:</SelectLabel>
                                <SelectItem value="inactive">Inactive</SelectItem>
                                <SelectItem value="latest">Latest Records</SelectItem>
                                <SelectItem value="oldest">Oldest Records</SelectItem>
                                <SelectItem value="roles">Roles</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {loading ? (
                <p>Loading...</p>
            )  : (
                <UserTable data={userData} />
            )}
        </div>
    );
};

export default Users;
