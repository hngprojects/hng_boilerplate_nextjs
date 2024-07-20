import ProductTableBody from "./product-table-body";
import ProductTableHead from "./product-table-head";

const ProductTable = () => {
  return (
    <>
      <div className="w-full overflow-x-auto overflow-y-hidden rounded-[8px] ring-1 ring-border xl:overflow-visible">
        <table className="max-w-screen w-full">
          <ProductTableHead />
          <ProductTableBody />
        </table>
      </div>
    </>
  );
};

export default ProductTable;
