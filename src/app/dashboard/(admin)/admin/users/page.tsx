import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CirclePlus, Filter } from "lucide-react";

import CardComponent from "~/components/adminDashboard/CardComponent";
import CustomButton from "~/components/common/common-button/common-button";
import { userCardData } from "./data/user-dummy-data";

const UserPage = () => {
  return (
    <>
      <section>
        <div className="mb-6 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {userCardData.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              value={card.value.toLocaleString()}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>

        <div className="mt-8">
          <div className="flex flex-row items-center">
            <div className="mr-auto">
              <h3 className="text-2xl font-semibold leading-8 text-neutral-dark-2">
                Users
              </h3>
              <h5 className="text-base font-normal leading-4 text-neutral-dark-2">
                Manage Users & Track Activity
              </h5>
            </div>

            <div className="flex flex-row items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger className="rounded p-2 outline-none ring-1 ring-stroke-colors-stroke">
                  <div className="flex flex-row items-center gap-2">
                    <Filter size={20} color="#525252" />
                    <div className="text-base font-normal leading-5 text-neutral-dark-1">
                      Filter
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 rounded-lg bg-white px-4 py-2.5 shadow-md">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <CustomButton size="lg" className="p-3" variant="primary">
                <div className="flex flex-row items-center gap-2">
                  <CirclePlus size={16} color="#FFFFFF" />
                  <div className="text-base font-normal leading-5">
                    Add new user
                  </div>
                </div>
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserPage;
