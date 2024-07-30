import { ArrowLeft } from "lucide-react";

import { Product, products } from "../../data/mock.products";
import ProductMedia from "./_components/ProductMedia";
import StockTable from "./_components/StockTable";

const EditProductDetail = ({ params }: { params: { productID: string } }) => {
  const product: Product = products?.filter(
    ({ id }) => id === params.productID,
  )[0];
  return (
    <>
      <section className="flex flex-col gap-8 p-6">
        <div className="border-b-solid flex items-center justify-start gap-2.5 border-b-[1px] border-b-[#CBD5E1] pb-2.5">
          <ArrowLeft />
          <h1 className="text-2xl font-semibold text-[#0A0A0A]">
            Product Detail
          </h1>
        </div>

        <div className="flex w-full max-w-[1060px] flex-col gap-8 xl:flex-row">
          <div className="left-side flex flex-[.30] flex-col gap-6">
            <div className="product-details flex w-full flex-col gap-6 rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] p-6">
              <div className="border-b-solid w-full border-b-[1px] border-b-[#CBD5E1] pb-4">
                <h1 className="text-6 font-semibold text-[#0A0A0A]">
                  Product Detail
                </h1>
                <p className="text-[0.875rem] font-normal text-[#525252]">
                  Make quick changes to your product
                </p>
              </div>
              <div className="flex w-full flex-col gap-6">
                <div className="flex w-full flex-col gap-[0.38rem]">
                  <label
                    htmlFor="title"
                    className="text-[0.875rem] font-medium text-[#0A0A0A]"
                  >
                    Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Product Title"
                    value={product.name}
                    className="rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-3 py-2 text-[0.875rem] text-[#525252]"
                  />
                </div>
                <div className="flex w-full flex-col gap-[0.38rem]">
                  <label
                    htmlFor="description"
                    className="text-[0.875rem] font-medium text-[#0A0A0A]"
                  >
                    Description
                  </label>
                  <textarea
                    rows={3}
                    name="description"
                    id="description"
                    placeholder="A small description"
                    className="rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-3 py-2 text-[0.875rem] text-[#525252]"
                  />
                </div>
              </div>
              <button className="w-fit rounded-[0.375rem] border-[1px] border-solid border-[#E2E8F0] px-4 py-2 text-[0.875rem] font-medium text-[#0F172A]">
                Save changes
              </button>
            </div>

            <StockTable price={product.price} />
          </div>

          <div className="right-side flex flex-[.70] flex-col gap-6 xl:gap-8">
            <div className="product-details flex w-full flex-col gap-6 rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-4 py-6">
              <div className="border-b-solid w-full border-b-[1px] border-b-[#CBD5E1] pb-4">
                <h1 className="text-6 font-semibold text-[#0A0A0A]">Media</h1>
                <p className="text-[0.875rem] font-normal text-[#525252]">
                  Upload media for your product
                </p>
              </div>
              <ProductMedia />
            </div>

            <div className="flex w-full flex-col gap-6 xl:gap-8">
              <div className="product-details flex w-full flex-col gap-6 rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] p-6">
                <div className="border-b-solid w-full border-b-[1px] border-b-[#CBD5E1] pb-4">
                  <h1 className="text-6 font-semibold text-[#0A0A0A]">
                    Status
                  </h1>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#0A0A0A]">
                    Availability
                  </p>
                  <select
                    name="status"
                    id="status"
                    className="w-full rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-4 py-2"
                  >
                    <option value="In stock">Draft</option>
                    <option value="Out of stock">Active</option>
                  </select>
                </div>
                <button className="w-fit rounded-[0.375rem] border-[1px] border-solid border-[#E2E8F0] px-4 py-2 text-[0.875rem] font-medium text-[#0F172A]">
                  Save
                </button>
              </div>
              <div className="product-details flex w-full flex-col gap-6 rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] p-6">
                <div className="border-b-solid w-full border-b-[1px] border-b-[#CBD5E1] pb-4">
                  <h1 className="text-6 font-semibold text-[#0A0A0A]">
                    Archive
                  </h1>
                  <p className="text-[0.875rem] font-normal text-[#525252]">
                    Archive the product
                  </p>
                </div>
                <button className="w-fit rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-4 py-2">
                  Archive {product.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProductDetail;
