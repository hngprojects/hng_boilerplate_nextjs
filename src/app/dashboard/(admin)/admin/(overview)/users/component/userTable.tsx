import React from "react";

import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { UserData } from "../page";
import UserTableBody from "./userTableBody";
import UserTableHead from "./userTableHead";

interface UserTableProperties {
  data: UserData[];
  onDelete: (userId: string) => void;
  isDeleting: boolean;
  loading: boolean;
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserTable: React.FC<UserTableProperties> = ({
  data,
  onDelete,
  isDeleting,
  loading,
  isDialogOpen,
  setIsDialogOpen,
}) => {
  return (
    <>
      <table className="user-table h-full w-full overflow-hidden">
        <UserTableHead />
        {loading ? (
          <span className="mx-auto flex w-full items-center justify-center gap-x-2">
            <span className="animate-pulse">Fetching user data...</span>{" "}
            <LoadingSpinner className="size-4 animate-spin sm:size-5" />
          </span>
        ) : (
          <UserTableBody
            data={data}
            onDelete={onDelete}
            isDeleting={isDeleting}
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
          />
        )}
      </table>
    </>
  );
};

export default UserTable;
