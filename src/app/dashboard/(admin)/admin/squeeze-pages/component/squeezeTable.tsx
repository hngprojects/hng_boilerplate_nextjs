import SqueezeTableBody from "./squeezeTableBody";
import SqueezeTableHead from "./squeezeTableHead";

const SqueezeTable = () => {
  return (
    <table className="squeeze-table z-10 h-full w-full overflow-hidden">
      <SqueezeTableHead />
      <SqueezeTableBody />
    </table>
  );
};

export default SqueezeTable;
