import UserTableBody from "./userTableBody";
import UserTableHead from "./userTableHead";

const UserTable = () => {
  return (
    <>
      <table className="user-table z-10 w-full overflow-hidden">
        <UserTableHead />
        <UserTableBody />
      </table>
    </>
  );
};

export default UserTable;
