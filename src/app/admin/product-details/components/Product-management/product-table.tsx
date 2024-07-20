import ProductTableHead from "./product-table-head";

const ProductTable = () => {
  return (
    <>
      <div className="w-full overflow-x-auto overflow-y-hidden rounded-[8px] ring-1 ring-border xl:overflow-visible">
        <table className="w-[230vw] md:w-[120vw] lg:w-screen xl:w-full">
          <ProductTableHead />
        </table>
      </div>
    </>
  );
};

export default ProductTable;
