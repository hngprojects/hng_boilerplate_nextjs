const tableHeadData: string[] = [
  "Product Name",
  "Product ID",
  "Category",
  "Price",
  "Status",
  "Actions",
];

const ProductTableHead = () => {
  return (
    <>
      <thead>
        <tr className="border-b border-b-border bg-[#F1F5F9]">
          <th className="h-[55.36px] w-[89px] px-[16px] py-[12px]"></th>
          {tableHeadData.map((data, index) => {
            return (
              <th
                key={index}
                className="h-[55.36px] w-[234px] px-[16px] py-[12px] text-sm font-[500] leading-[16.94px] text-neutral-dark-2"
              >
                {data}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

export default ProductTableHead;
