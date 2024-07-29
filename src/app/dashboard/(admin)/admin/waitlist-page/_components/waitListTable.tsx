import WaitListTableBody from "./waitListTableBody";
import WaitListTableHead from "./waitListTableHead";

const WaitListTable = () => {
  return (
    <>
      <table className="user-table z-10 h-full w-full overflow-hidden">
        <WaitListTableHead />
        <WaitListTableBody />
      </table>
    </>
  );
};

export default WaitListTable;
