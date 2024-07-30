import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

import { useUser } from "~/hooks/user/use-user";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";

const UserCard = ({ image }: { image: string | undefined }) => {
  const { updateUser } = useUser();
  const [isLogout, setIsLogout] = useState(false);

  const handleLogout = () => {
    updateUser({ email: "", name: "" });
    setIsLogout(false);
    signOut({ callbackUrl: "/" });
  };

  const handleEscapeClick = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsLogout(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeClick);
    return () => {
      document.removeEventListener("keydown", handleEscapeClick);
    };
  }, []);

  return (
    <div className="relative w-fit">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setIsLogout(!isLogout)}
        className={cn(
          "grid size-9 place-items-center rounded-full bg-orange-500 text-xl font-medium text-white sm:text-2xl sm:font-bold",
        )}
      >
        <Avatar className="rounded-full">
          <AvatarImage src={image} className="rounded-full" />
        </Avatar>
      </Button>
      <AnimatePresence>
        {isLogout && (
          <>
            <div
              onClick={() => {
                setIsLogout(false);
              }}
              className={cn(
                "fixed left-0 top-0 z-[99] min-h-screen w-full overflow-hidden bg-neutral-700/0 transition-all duration-300 lg:hidden",
                isLogout
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0",
              )}
            />
            <motion.div
              initial={{ opacity: 0.5, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute -bottom-16 -right-2 z-[999] flex w-[150px] flex-col gap-y-2 rounded-xl bg-white p-2 shadow-lg"
            >
              <Button
                variant={"ghost"}
                onClick={handleLogout}
                className={cn(
                  "w-full text-xl font-medium text-orange-500 sm:font-bold",
                )}
              >
                Logout
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserCard;
