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
  isSuccessDeleteDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccessDeleteDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserTable: React.FC<UserTableProperties> = ({
  data,
  onDelete,
  isDeleting,
  loading,
  isDialogOpen,
  setIsDialogOpen,
  isSuccessDeleteDialogOpen,
  setIsSuccessDeleteDialogOpen,
}) => {
  return (
    <>
      <table className="user-table h-full w-full overflow-hidden">
        <UserTableHead />
        {loading ? (
          <span className="mx-auto mt-4 flex w-full items-center justify-center gap-x-2">
            <span className="animate-pulse">Fetching user data...</span>{" "}
            <LoadingSpinner className="size-4 animate-spin sm:size-5" />
          </span>
        ) : data.length > 0 ? (
          <UserTableBody
            data={data}
            onDelete={onDelete}
            isDeleting={isDeleting}
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
            isSuccessDeleteDialogOpen={isSuccessDeleteDialogOpen}
            setIsSuccessDeleteDialogOpen={setIsSuccessDeleteDialogOpen}
          />
        ) : (
          <div className="w-full pb-5 pt-10 text-center text-neutral-dark-2">
            No user data
          </div>
        )}
      </table>
    </>
  );
};

export default UserTable;
