import UserTableBody from "./userProductTableBody";
import UserTableHead from "./userProductTableHead";

const UserProductsTable = () => {
  return (
    <>
      <table className="user-table h-full w-full overflow-hidden">
        <UserTableHead />
        <UserTableBody />
      </table>
    </>
  );
};

export default UserProductsTable;
