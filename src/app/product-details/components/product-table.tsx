import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPen, LuTrash } from "react-icons/lu";

import { productData } from "../data/product-data";

const tableHeadArray: string[] = [
  "product name",
  "product ID",
  "category",
  "price",
  "status",
  "actions",
];

const ProductTable = () => {
  return (
    <>
      <table className="w-full ring-1 ring-[#CBD5E1] rounded-[8px] bg-white overflow-visible">
        <thead className="border-b border-b-[#E4E4E7] bg-[#F1F5F9] rounded-t-[8px] min-w-full">
          <tr>
            <th
              scope="col"
              className="py-[12px] px-[16px] h-[55.36px] rounded-tl-[8px] w-[89px]"
            ></th>
            {tableHeadArray.map((data, index) => {
              return (
                <th
                  className={`text-sm last:rounded-tr-[8px] leading-[16.94px] font-[500] text-black capitalize py-[12px] px-[16px] h-[55.36px] text-left ${data === "actions" ? "w-[101px]" : "w-[234px]"}`}
                  key={index}
                >
                  {data}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {productData.map((data, index) => {
            const { category, id, image, inStock, lowStock, name, price } =
              data;

            return (
              <tr
                key={index}
                className="border-b border-b-[#E4E4E7] last:border-b-0"
              >
                <td className="flex items-center flex-row gap-x-[10px] justify-center w-[89px] p-[12px]">
                  <input type="checkbox" className="outline-none" />

                  <div className="h-[32px] w-[32px] rounded-[10px] overflow-hidden">
                    <Image
                      src={image}
                      className="h-full w-full object-cover"
                      alt={name}
                    />
                  </div>
                </td>

                <td className="p-[12px] w-[234px] capitalize text-sm leading-[16.94px] text-[#0A0A0A]">
                  {name}
                </td>

                <td className="p-[12px] w-[234px] uppercase text-sm leading-[16.94px] text-[#525252]">
                  {id}
                </td>

                <td className="p-[12px] w-[234px] capitalize text-sm leading-[16.94px] text-[#525252]">
                  {category}
                </td>

                <td className="p-[12px] w-[234px] capitalize text-sm leading-[16.94px] text-[#525252]">
                  ${price.toLocaleString()}.00
                </td>

                <td className="p-[12px] w-[234px] text-sm leading-[16.94px] text-[#525252]">
                  {lowStock ? (
                    <div className="flex items-center flex-row gap-[8px]">
                      <div className="h-[12px] w-[12px] rounded-full bg-[#EAB308]"></div>
                      <div>Low on stock</div>
                    </div>
                  ) : inStock ? (
                    <div className="flex items-center flex-row gap-[8px]">
                      <div className="h-[12px] w-[12px] rounded-full bg-[#6DC347]"></div>
                      <div>In stock</div>
                    </div>
                  ) : (
                    <div className="flex items-center flex-row gap-[8px]">
                      <div className="h-[12px] w-[12px] rounded-full bg-[#DC2626]"></div>
                      <div>Out of stock</div>
                    </div>
                  )}
                </td>

                <td className="p-[12px] w-[101px] capitalize text-sm leading-[16.94px] text-[#525252]">
                  <Popover className="relative">
                    <PopoverButton className="outline-none">
                      <BsThreeDotsVertical className="text-lg" />
                    </PopoverButton>

                    <PopoverPanel
                      transition
                      className="absolute xl:-left-[45px] md:left-1/3 -left-[58px] z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 outline-none transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="w-[121px] flex-auto overflow-hidden outline-none rounded-[6px] bg-white shadow ring-1 ring-[#CBD5E1]">
                        <div className="p-[5px] border-b border-b-">
                          <div className="py-[6px] px-[8px] text-sm leading-[20px] font-semibold text-[#0A0A0A]">
                            Actions
                          </div>
                        </div>
                        <div className="p-[5px]">
                          <Link
                            href={`/`}
                            className="outline-none w-full text-sm leading-[20px] font-[500] text-[#525252] duration-200 ease-in bg-white font-secondary flex items-center gap-3 px-[8px] py-[6px]"
                          >
                            <LuPen className="h-[13.22px] w-[13.22px]" />
                            <div>Edit</div>
                          </Link>

                          <Link
                            href={`/`}
                            className="outline-none w-full text-sm leading-[20px] font-[500] text-[#DC2626] duration-200 ease-in font-secondary flex flex-row gap-[8px] items-center text-left px-[8px] py-[6px]"
                          >
                            <LuTrash className="h-[13.22px] w-[13.22px]" />
                            <div>Delete</div>
                          </Link>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
