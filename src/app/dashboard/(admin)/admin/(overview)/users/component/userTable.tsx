import UserTableBody from "./userTableBody";
import UserTableHead from "./userTableHead";

const UserTable = () => {
  return (
    <>
      <table className="user-table z-10 h-full w-full overflow-hidden">
        <UserTableHead />
        <UserTableBody />
      </table>
    </>
  );
};

export default UserTable;
