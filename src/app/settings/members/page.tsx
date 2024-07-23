import {
  ArrowRight,
  ChevronDown,
  EllipsisVertical,
  Search,
} from "lucide-react";

import CustomButton from "~/components/common/Button/button";
import ExportToCsv from "~/components/exportToCSV/ExportToCsv";
import userImg from "../../../../public/user-img.png";

type membersProperties = {
  name: string;
  email: string;
};

const members: membersProperties[] = [
  { name: "Alice Johnson", email: "alice.johnson@example.com" },
  { name: "Bob Smith", email: "bob.smith@example.com" },
  { name: "Carol Davis", email: "carol.davis@example.com" },
  { name: "David Wilson", email: "david.wilson@example.com" },
  { name: "Eva Brown", email: "eva.brown@example.com" },
  { name: "Frank Thomas", email: "frank.thomas@example.com" },
  { name: "Grace Lee", email: "grace.lee@example.com" },
];
export default function Members() {
  const data = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "User" },
  ];
  return (
    <div className="flex flex-col gap-5 bg-white px-[50px] py-7 tracking-normal">
      <div className="flex w-[80%] flex-col gap-[20px]">
        <div className="flex w-11/12 flex-col gap-2 border-b border-border pb-8 lg:w-[750px] xl:w-[894px]">
          <h1 className="text-[24px] font-semibold tracking-wider">Members</h1>
          <p className="text-[12px] text-[#525252]">
            Manage who has access to this workspace
          </p>
        </div>

        <div className="flex w-11/12 flex-col gap-2 border-b border-border pb-8 lg:w-[750px] xl:w-[894px]">
          <h1 className="text-[18px] font-semibold">Manage Members</h1>
          <p className="text-[16px] text-[#525252]">
            On the Free plan all members in a workspace are administrators.
            Upgrade to a paid plan to add the ability to assign or remove
            administrator roles.{" "}
            <span className="flex flex-row gap-[5px] text-primary">
              Go to Plans <ArrowRight />
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-[5px]">
            <div className="x-[25px] hidden items-center gap-[10px] rounded-sm border border-solid border-gray-500 px-[12px] py-[7px] text-sm md:flex">
              <Search />
              <input
                type="text"
                className="text-sm outline-none"
                placeholder="Search Option..."
              />
            </div>

            <div className="x-[25px] hidden items-center gap-[10px] rounded-sm border border-solid border-gray-500 px-[12px] py-[7px] text-sm md:flex">
              <p className="">All</p>
              <ChevronDown />
            </div>
          </div>

          <CustomButton variant="primary">Invite People</CustomButton>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[#525252]">5 active members</h1>

          <div className="flex w-full flex-col gap-[20px]">
            {members.map((member, id) => (
              // eslint-disable-next-line react/jsx-key
              <div className="">
                <div
                  key={id}
                  className="flex items-center justify-between pb-[20px]"
                >
                  <div className="flex items-center gap-[30px]">
                    <div className="flex items-center gap-[10px]">
                      <div
                        className="h-[45px] w-[45px] rounded-full bg-gray-400 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${userImg.src})` }}
                      ></div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-[#525252]">
                          {member.name}
                        </h1>
                        <p className="text-[#525252]">{member.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-[10px] p-[10px]">
                    <p className="">Admin</p>
                    <ChevronDown />
                  </div>

                  <div className="flex cursor-pointer items-center justify-center rounded-[5px] p-[5px] hover:bg-gray-200">
                    <EllipsisVertical />
                  </div>
                </div>

                <hr />
              </div>
            ))}
          </div>
        </div>
        {/* Export menbers component created by myself */}
        <div className="w-11/12 border-b border-border pb-8 lg:w-[750px] xl:w-[894px]">
          <ExportToCsv members={data} />
        </div>
      </div>
    </div>
  );
}
