"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Download, Filter, Printer } from "lucide-react";
import { useEffect, useState } from "react";

import { fetchUserData } from "~/actions/user";
import { users } from "~/components/adminDashboard/userData";
import CardComponent from "~/components/common/DashboardCard/CardComponent";
import { UserTable } from "../settings/_components/UserTable/page";

function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  return date.toLocaleDateString(undefined, options);
}

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const loadData = async () => {
      if (error) {
        return error;
      }
      try {
        const data = await fetchUserData();
        const mappedData = data.data.data.map((item, index) => ({
          id: index + 1,
          name: "Oladipo Munirat",
          email: "oladipomunirat@gmail.com",
          img: "",
          role: "User",
          loginTime: formatDateTime(item.loginTime),
          status: item.logoutTime ? "success" : "failure",
          ipAddress: item.ipAddress,
        }));
        setUserData(mappedData);
        setLoading(false);
      } catch (error_) {
        setError(error_.message || "Failed to fetch user data");
        setLoading(false);
      }
    };

    loadData();
  }, [error]);

  return (
    <div className="mx-6 my-10">
      <div className="my-5 flex justify-between gap-10">
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
      <div className="flex justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Users Tracking</h1>
          <p>Manage Users & Track Activity</p>
        </div>
        <div>
          <div className="my-3 flex cursor-pointer justify-end gap-5 text-[#525252]">
            <p>
              <Printer />
            </p>
            <p>
              <Download />
            </p>
          </div>
          <Select>
            <SelectTrigger className="flex w-[90px] gap-3 rounded-md border p-2 text-[#525252]">
              <Filter />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="z-10 bg-white p-2 shadow-md">
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

      {loading ? <p>Loading...</p> : <UserTable data={userData} />}
    </div>
  );
};

export default Users;
