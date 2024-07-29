import { ArrowLeft } from "lucide-react";
import Image from "next/image";

import shoeImg from "~/app/dashboard/(admin)/admin/products/edit/[productID]/shoe-pic.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Product, products } from "../../data/mock.products";

const EditProductDetail = ({ params }: { params: { productID: string } }) => {
  const productImg = shoeImg;
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

        <div className="flex w-full flex-col gap-8 xl:flex-row">
          <div className="left-side flex flex-[.5] flex-col gap-6">
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
            </div>
            <div className="stock flex w-full flex-col gap-6 rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] p-6">
              <div className="border-b-solid w-full border-b-[1px] border-b-[#CBD5E1] pb-4">
                <h1 className="text-6 font-semibold text-[#0A0A0A]">Stock</h1>
                <p className="text-[0.875rem] font-normal text-[#525252]">
                  Add and remove products
                </p>
              </div>

              <Table className="max-w-[400px] whitespace-nowrap rounded-lg border-[1px] border-solid border-[#E4E4E7]">
                <TableHeader className="rounded-lg">
                  <TableRow className="bg-[#F1F5F9] shadow-none *:text-left *:text-base *:text-neutral-950 *:shadow-none hover:bg-primary/10">
                    <TableHead className="text-[0.875rem] font-medium text-[#0A0A0A]">
                      Size
                    </TableHead>
                    <TableHead className="text-[0.875rem] font-medium text-[#0A0A0A]">
                      Stock
                    </TableHead>
                    <TableHead className="text-[0.875rem] font-medium text-[#0A0A0A]">
                      Price
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-none bg-white shadow-none *:text-left *:text-base *:text-neutral-950 *:shadow-none hover:bg-primary/10">
                    <TableCell>Size</TableCell>
                    <TableCell>
                      <input
                        type="text"
                        name="small"
                        id="small"
                        className="rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7] px-3 py-[0.72rem]"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex w-fit items-center gap-2 rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7]">
                        <h1 className="mx-3 my-2 text-2xl font-medium">$</h1>
                        <input
                          type="text"
                          name="small"
                          id="small"
                          value={product.price}
                          className="px-3 py-[0.72rem]"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none bg-white shadow-none *:text-left *:text-base *:text-neutral-950 *:shadow-none hover:bg-primary/10">
                    <TableCell>Standard</TableCell>
                    <TableCell>
                      <input
                        type="text"
                        name="standard"
                        id="standard"
                        className="rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7] px-3 py-[0.72rem]"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex w-fit items-center gap-2 rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7]">
                        <h1 className="mx-3 my-2 text-2xl font-medium">$</h1>
                        <input
                          type="text"
                          name="standard-price"
                          id="standard-price"
                          value={product.price}
                          className="px-3 py-[0.72rem]"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none bg-white shadow-none *:text-left *:text-base *:text-neutral-950 *:shadow-none hover:bg-primary/10">
                    <TableCell>Large</TableCell>
                    <TableCell>
                      <input
                        type="text"
                        name="large"
                        id="large"
                        className="rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7] px-3 py-[0.72rem]"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex w-fit items-center gap-2 rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7]">
                        <h1 className="mx-3 my-2 text-2xl font-medium">$</h1>
                        <input
                          type="text"
                          name="large-price"
                          id="large-price"
                          value={product.price}
                          className="px-3 py-[0.72rem]"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <button className="w-fit rounded-[0.375rem] border-[1px] border-solid border-[#E2E8F0] px-4 py-2 text-[0.875rem] font-medium text-[#0F172A]">
                Add a variant
              </button>
            </div>
          </div>

          <div className="right-side flex flex-1 flex-col gap-6 xl:gap-8">
            <div className="product-details flex w-full flex-col gap-6 rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] p-6">
              <div className="border-b-solid w-full border-b-[1px] border-b-[#CBD5E1] pb-4">
                <h1 className="text-6 font-semibold text-[#0A0A0A]">Media</h1>
                <p className="text-[0.875rem] font-normal text-[#525252]">
                  Upload media for your product
                </p>
              </div>
              <div className="imgs-uploader flex flex-col items-center gap-4 xl:flex-row xl:gap-4">
                <Image
                  width={287}
                  height={292}
                  src={productImg}
                  alt="product img"
                  className="bg-[#F1F5F9]"
                />
                <div className="m-0 flex w-[15rem] justify-center rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-1 text-xl font-semibold xl:my-3 xl:h-[15rem] xl:w-fit xl:items-center">
                  +
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 xl:gap-8">
              <div className="product-details flex w-full flex-col gap-6 rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] p-6">
                <div className="border-b-solid w-full border-b-[1px] border-b-[#CBD5E1] pb-4">
                  <h1 className="text-6 font-semibold text-[#0A0A0A]">
                    Status
                  </h1>
                </div>
                <select
                  name="status"
                  id="status"
                  className="w-full rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-4 py-2"
                >
                  <option value="In stock">Draft</option>
                  <option value="Out of stock">Active</option>
                </select>
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
