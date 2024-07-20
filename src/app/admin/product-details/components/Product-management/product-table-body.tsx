import Image from "next/image";

import { productData } from "../../data/mock-product-data";
import TableMenuButton from "./table-meu-button";

const ProductTableBody = () => {
  return (
    <>
      <tbody>
        {productData.map((data, index) => {
          const { category, id, price, status, title } = data;

          return (
            <tr
              key={index}
              className="border-b border-b-border duration-300 ease-in last:border-b-0 hover:bg-[#F1F5F9]"
            >
              <td className="flex h-[55.36px] w-[89px] items-center gap-[10px] p-[12px] px-[16px] py-[12px] capitalize">
                <input
                  type="checkbox"
                  className="accent-primary outline-none"
                  id={index.toString()}
                />

                <Image
                  src="/images/user-product-details/product-dummy-image.png"
                  className="h-[32px] w-[32px] rounded-[10px]"
                  height={32}
                  width={32}
                  alt={`${title} image`}
                />
              </td>

              <td className="h-[55.36px] w-[234px] whitespace-nowrap px-[16px] py-[12px] text-sm leading-[16.94px] text-neutral-dark-2">
                {title}
              </td>

              <td className="h-[55.36px] w-[234px] whitespace-nowrap px-[16px] py-[12px] text-sm uppercase leading-[16.94px] text-neutral-dark-1">
                p00{id}
              </td>

              <td className="h-[55.36px] w-[234px] whitespace-nowrap px-[16px] py-[12px] text-sm capitalize leading-[16.94px] text-neutral-dark-1">
                {category}
              </td>

              <td className="h-[55.36px] w-[234px] whitespace-nowrap px-[16px] py-[12px] text-sm leading-[16.94px] text-neutral-dark-1">
                ${price.toLocaleString()}.00
              </td>

              <td className="h-[55.36px] w-[234px] whitespace-nowrap px-[16px] py-[12px] text-sm leading-[16.94px] text-neutral-dark-1">
                {status.inStock && (
                  <div className="flex items-center gap-[8px]">
                    <div className="h-[12px] w-[12px] rounded-full bg-success"></div>
                    <div>In stock</div>
                  </div>
                )}

                {status.lowOnStock && (
                  <div className="flex items-center gap-[8px]">
                    <div className="h-[12px] w-[12px] rounded-full bg-warning"></div>
                    <div>Low on stock</div>
                  </div>
                )}

                {status.outOfStock && (
                  <div className="flex items-center gap-[8px]">
                    <div className="h-[12px] w-[12px] rounded-full bg-error"></div>
                    <div>Out of stock</div>
                  </div>
                )}
              </td>

              <td className="h-[55.36px] w-[101px] whitespace-nowrap px-[16px] py-[12px] text-sm leading-[16.94px] text-neutral-dark-2">
                <TableMenuButton />
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default ProductTableBody;
