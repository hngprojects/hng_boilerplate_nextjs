import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import DropdownMenu from "../../../_components/ui/dropdownMenu";
import { userData, UserDataProperties } from "../data/user-dummy-data";

const UserTableBody = () => {
  const [showDropdown, setShowDropdown] = useState<
    UserDataProperties | undefined
  >();
  const menuReference = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        menuReference.current &&
        !menuReference.current.contains(event.target as Node)
      ) {
        setShowDropdown(undefined);
      }
    };

    document.addEventListener("mousedown", handler);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <tbody className="user-table">
        {userData.map((data, index) => {
          const { avatar, date, email, fullName, phone, status } = data;

          return (
            <tr key={index} className="w-full border-b border-b-border">
              <td
                className={`whitespace-nowrap p-4 text-left text-base font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={avatar}
                      className="object-cover"
                      height={40}
                      width={40}
                      alt={fullName}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-[500] leading-6 text-neutral-dark-2">
                      {fullName}
                    </h3>
                    <div className="text-sm font-normal lowercase leading-4 text-neutral-dark-1">
                      {email}
                    </div>
                  </div>
                </div>
              </td>

              <td
                className={`gap-2 whitespace-nowrap p-4 text-left text-base font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                {phone}
              </td>

              <td
                className={`whitespace-nowrap p-4 text-left text-base font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                {date}
              </td>

              <td
                className={`whitespace-nowrap p-4 text-left text-base font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                <div className="flex items-center gap-1">
                  {status.active && (
                    <>
                      <div className="h-3 w-3 rounded-full bg-success"></div>
                      <div>Active</div>
                    </>
                  )}

                  {!status.active && (
                    <>
                      <div className="h-3 w-3 rounded-full bg-error"></div>
                      <div>Inactive</div>
                    </>
                  )}
                </div>
              </td>

              <td className="whitespace-nowrap p-4 text-center text-base font-normal capitalize leading-4 text-neutral-dark-2">
                <div className="relative" ref={menuReference}>
                  <button
                    onClick={() => {
                      setShowDropdown(userData[index]);
                      setOpen(!open);
                    }}
                    className="outline-none"
                  >
                    <EllipsisVertical size={16} color="#09090b" />
                  </button>

                  <DropdownMenu
                    width="w-[100px]"
                    active={showDropdown?.fullName === fullName && open}
                  >
                    <Link href={"#"} className="outline-none">
                      <button className="block w-full px-2 py-1.5 text-left text-sm font-normal leading-5 text-neutral-dark-2">
                        Edit
                      </button>
                    </Link>

                    <button className="block w-full px-2 py-1.5 text-left text-sm font-normal leading-5 text-neutral-dark-2">
                      Delete
                    </button>
                  </DropdownMenu>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default UserTableBody;
