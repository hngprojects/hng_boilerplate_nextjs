import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "~/lib/utils";
import CustomButton from "../common/common-button/common-button";

interface User {
  email: string;
  image: string;
  name: string;
}

const handleLogout = async () => {
  await signOut({
    callbackUrl: "/",
  });
};

const UserCard = ({ user }: { user: User }) => {
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    const handleEscapeClick = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLogout(false);
      }
    };

    document.addEventListener("keydown", handleEscapeClick);
    return () => {
      document.removeEventListener("keydown", handleEscapeClick);
    };
  }, []);

  return (
    <div className="relative w-fit">
      {user?.image ? (
        <div
          className="flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-full"
          onClick={() => setIsLogout(!isLogout)}
        >
          <Image
            src={user.image}
            alt={`${user.name}'s profile image`}
            width={64}
            height={64}
          />
        </div>
      ) : (
        <CustomButton
          variant="primary"
          onClick={() => setIsLogout(!isLogout)}
          className="flex h-full w-full items-center justify-center overflow-hidden rounded-full text-center text-xl capitalize"
        >
          {user?.email[0]}
        </CustomButton>
      )}
      <AnimatePresence>
        {isLogout && (
          <>
            <div
              onClick={() => setIsLogout(false)}
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
              <CustomButton variant="primary" onClick={handleLogout}>
                Logout
              </CustomButton>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserCard;
