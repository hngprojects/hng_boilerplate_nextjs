import { TooltipArrow, TooltipPortal } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";

import { deleteUserCookie } from "~/actions/login";
import { useUser } from "~/hooks/user/use-user";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const UserCard = ({ email }: { email: string }) => {
  const { updateUser } = useUser();

  return (
    <div className="relative flex w-fit">
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className={cn(
                "grid size-9 place-items-center rounded-full bg-orange-500 text-xl font-medium text-white sm:text-2xl sm:font-bold",
              )}
            >
              {email[0]}
            </Button>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent
              side="top"
              sideOffset={5}
              className="p-2 text-sm font-medium"
            >
              <TooltipArrow className="fill-white" />
              <motion.div
                initial={{ opacity: 0, translateY: 5 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => {
                    updateUser({ email: "", name: "" });
                    deleteUserCookie();
                  }}
                >
                  Logout
                </Button>
              </motion.div>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default UserCard;
