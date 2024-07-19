import DisplayTypeButton from "./components/display-style-button";
import FilterButton from "./components/filter-button";
import Header from "./components/header";
import ProductSearchInput from "./components/product-search-input";
import ProductTable from "./components/product-table";

const Page = () => {
  return (
    <>
      <main className="bg-white container py-[1.5rem]">
        <section>
          <Header />
          <div className="flex flex-row items-center mt-7">
            <div className="mr-auto">
              <ProductSearchInput />
            </div>

            <div className="flex flex-row items-center gap-[16px]">
              <div className="flex gap-3 flex-row items-center">
                <DisplayTypeButton displayGrid={true} />
                <DisplayTypeButton displayGrid={false} />
              </div>

              <div className="h-[36px] w-[1px] bg-[#E4E4E7]"></div>
              <FilterButton />
            </div>
          </div>

          <div className="mt-5">
            <ProductTable />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
