import { UserData } from "../page";
import UserTableBody from "./userTableBody";
import UserTableHead from "./userTableHead";

const UserTable = ({ data }: { data: UserData[] }) => {
  return (
    <>
      <table className="user-table h-full w-full overflow-hidden">
        <UserTableHead />
        <UserTableBody data={data} />
      </table>
      {data.length === 0 && (
        <div className="w-full pb-5 pt-10 text-center text-neutral-dark-2">
          No data
        </div>
      )}
    </>
  );
};

export default UserTable;
