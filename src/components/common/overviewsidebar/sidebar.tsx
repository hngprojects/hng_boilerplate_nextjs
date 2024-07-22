"use client";

import {
  Banknote,
  Bell,
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  User,
  UserCog,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "~/lib/utils";

const Sidebar = () => {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("b2");

  const pathname = usePathname();

  return (
    <>
      <div className="w-[110px] cursor-pointer rounded-r-[16px] bg-subtle p-[16px] text-[10px] font-light text-foreground sm:w-[140px] md:w-[304px] md:p-[24px] md:text-[16px]">
        <div className="flex flex-col items-start justify-start gap-[16px] md:gap-[24px]">
          <div
            onClick={() => setHidden((open) => !open)}
            className="flex w-full items-center justify-start gap-[8px] px-[10px] text-[16px] font-semibold md:text-[24px]"
          >
            <ChevronLeft className="w-[16px] md:w-[24px]" />

            <h2 className="hidden md:block">Settings</h2>
          </div>

          {hidden && (
            <div className="w-full">
              <div className="nd:gap-[6px] flex w-full flex-col items-start gap-[3px] border-b border-border pb-[18px] font-light md:pb-[40px] lg:text-[16px]">
                <div className="px-[6px] py-[10px] text-left md:px-[10px] md:py-[15.5px]">
                  {" "}
                  <p className="font-medium lg:text-[16px]">Profile</p>
                </div>

                <div className="w-full">
                  <Link
                    href="/overview/general"
                    className={`link ${pathname === "/overview/general" && "text-background"}`}
                  >
                    <div
                      onClick={() => setActive("b9")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[4px] px-[6px] py-[10px] hover:border hover:border-border md:px-[10px] md:py-[15.5px]",
                        active === "b9" && "bg-primary",
                      )}
                    >
                      <div className="flex items-center justify-start gap-[8px]">
                        <User className="w-[14px] md:w-[20px]" />

                        <p className="hidden md:block">General</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="w-full">
                  <Link
                    href="/overview/account"
                    className={`link ${pathname === "/overview/account" ? "text-background" : ""}`}
                  >
                    <div
                      onClick={() => setActive("b8")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[4px] px-[6px] py-[10px] hover:border hover:border-border md:px-[10px] md:py-[15.5px]",
                        active === "b8" ? "bg-primary text-background" : "",
                      )}
                    >
                      <div className="flex items-center justify-start gap-[8px]">
                        <UserCog className="w-[14px] md:w-[20px]" />
                        <p className="hidden md:block">Account</p>
                      </div>
                      <ChevronRight className="w-[12px] md:w-[16px]" />
                    </div>
                  </Link>
                </div>

                <div className="w-full">
                  <Link
                    href="/overview/notification"
                    className={`link ${pathname === "/overview/notification" ? "text-background" : ""}`}
                  >
                    <div
                      onClick={() => setActive("b7")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[4px] px-[6px] py-[10px] hover:border hover:border-border md:px-[10px] md:py-[15.5px]",
                        active === "b7" ? "bg-primary text-background" : "",
                      )}
                    >
                      <div className="flex items-center justify-start gap-[8px]">
                        <Bell className="w-[14px] md:w-[20px]" />

                        <p className="hidden md:block">Notification</p>
                      </div>
                      <ChevronRight className="w-[12px] md:w-[16px]" />
                    </div>
                  </Link>
                </div>

                <div className="w-full">
                  <Link
                    href="/overview/payment"
                    className={`link ${pathname === "/overview/payment" ? "text-background" : ""}`}
                  >
                    <div
                      onClick={() => setActive("b6")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[4px] px-[6px] py-[10px] hover:border hover:border-border md:px-[10px] md:py-[15.5px]",
                        active === "b6" ? "bg-primary text-background" : "",
                      )}
                    >
                      <div className="flex items-center justify-start gap-[8px]">
                        <Banknote className="w-[14px] md:w-[20px]" />
                        <p className="hidden md:block">Payment Information</p>
                      </div>
                      <ChevronRight className="w-[12px] md:w-[16px]" />
                    </div>
                  </Link>
                </div>

                <div className="w-full">
                  <Link
                    href="/overview/data&"
                    className={`link ${pathname === "/overview/data&" ? "text-background" : ""}`}
                  >
                    <div
                      onClick={() => setActive("b5")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[4px] px-[6px] py-[10px] hover:border hover:border-border md:px-[10px] md:py-[15.5px]",
                        active === "b5" && "bg-primary text-background",
                      )}
                    >
                      <div className="flex items-center justify-start gap-[8px]">
                        <Database className="w-[14px] md:w-[20px]" />

                        <p className="hidden md:block">Data and Privacy</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="w-full">
                  <Link
                    href="/overview/langu-age"
                    className={`link ${pathname === "/overview/langu-age" ? "text-background" : ""}`}
                  >
                    <div
                      onClick={() => setActive("b4")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[4px] px-[6px] py-[10px] hover:border hover:border-border md:px-[10px] md:py-[15.5px]",
                        active === "b4" && "bg-primary text-background",
                      )}
                    >
                      <div className="flex items-center justify-start gap-[8px]">
                        <Globe className="w-[14px] md:w-[20px]" />

                        <p className="hidden md:block">Language and religion</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex w-full flex-col items-start gap-[6px] pb-[141px] font-light md:gap-[12px] lg:text-[16px]">
                <div className="px-[6px] py-[10px] text-left md:px-[10px] md:py-[15.5px]">
                  {" "}
                  <p className="pt-[24px] font-medium">Organization</p>
                </div>

                <div className="w-full">
                  <Link
                    href="/overview/members"
                    className={`link ${pathname === "/overview/members" ? "text-background" : ""}`}
                  >
                    <div
                      onClick={() => setActive("b3")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[4px] px-[6px] py-[10px] hover:border hover:border-border md:px-[10px] md:py-[15.5px]",
                        active === "b3" ? "bg-primary text-background" : "",
                      )}
                    >
                      <div className="flex items-center justify-start gap-[8px]">
                        <Users className="w-[14px] md:w-[20px]" />

                        <p className="hidden md:block">Members</p>
                      </div>
                      <ChevronRight className="w-[12px] md:w-[16px]" />
                    </div>
                  </Link>
                </div>

                <div className="w-full rounded">
                  <Link
                    data-testid="role"
                    href="/overview/roles"
                    className={`link ${pathname === "/overview/roles" ? "text-background" : ""}`}
                  >
                    <div
                      onClick={() => setActive("b2")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[4px] px-[6px] py-[10px] hover:border hover:border-border md:px-[10px] md:py-[15.5px]",
                        active === "b2" ? "bg-primary text-background" : "",
                      )}
                    >
                      <div className="flex items-center justify-start gap-[8px]">
                        <Bell className="w-[14px] md:w-[20px]" />
                        <p className="hidden md:block">Roles and permissions</p>
                      </div>
                      <ChevronRight className="w-[12px] md:w-[16px]" />
                    </div>
                  </Link>
                </div>

                <div className="w-full">
                  <Link
                    href="/overview/integrate"
                    className={`link ${pathname === "/overview/integrate" ? "text-background" : ""}`}
                  >
                    <div
                      onClick={() => setActive("b1")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[4px] px-[6px] py-[10px] hover:border hover:border-border md:px-[10px] md:py-[15.5px]",
                        active === "b1" && "bg-primary text-background",
                      )}
                    >
                      <div className="flex items-center justify-start gap-[8px]">
                        <Banknote className="w-[14px] md:w-[20px]" />
                        <p className="hidden md:block">Integrations</p>
                      </div>
                      <ChevronRight className="w-[12px] md:w-[16px]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
