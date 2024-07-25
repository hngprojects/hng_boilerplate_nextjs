import UserTableBody from "./userTableBody";
import UserTableHead from "./userTableHead";

const UserTable = () => {
  return (
    <>
      <table className="w-full overflow-x-hidden">
        <UserTableHead />
        <UserTableBody />
      </table>
    </>
  );
};

export default UserTable;
