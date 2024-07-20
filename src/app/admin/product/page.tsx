import ProductFilter from "~/components/common/ProductFilter";
import TableData from "~/components/common/Table";

export default function Page() {
  return (
    <main className="">
      <ProductFilter />
      <TableData />

      {/* <Paginations /> */}
    </main>
  );
}
