import UserTableBody from "./userTableBody";
import UserTableHead from "./userTableHead";

const UserTable = () => {
  return (
    <>
      <table className="user-table w-full overflow-x-hidden">
        <UserTableHead />
        <UserTableBody />
      </table>
    </>
  );
};

export default UserTable;
