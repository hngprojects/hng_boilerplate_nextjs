"use client";

import Image, { StaticImageData } from "next/image";

interface ProductCardProperties {
  title: string;
  price: string;
  description: string;
  inStock: boolean;
  imageUrl: string | StaticImageData;
}

const Delete = () => {
  alert("Are you sure you want to delete");
};

const Edit = () => {
  alert("Proceed to edit");
};

const ProductCard: React.FC<ProductCardProperties> = ({
  title,
  price,
  description,
  inStock,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-md border-[1px] border-[#D9D9D9] bg-white p-3 shadow-md">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className="h-48 w-full rounded-md object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-1 text-[20px] font-bold text-gray-900">{price}</p>
        </div>
        <p className="mb-4 text-base text-gray-700">{description}</p>
        <span
          className={`mt-3 px-5 py-2 text-sm ${inStock ? "rounded-full bg-[#E7F7E9] text-green-500" : "bg-[#FDE7E7] text-red-500"}`}
        >
          {inStock ? "In stock" : "Out of stock"}
        </span>
        <div className="mt-6 flex justify-between space-x-2">
          <button
            onClick={Edit}
            className="w-[130px] rounded-md border-[1px] px-4 py-2 text-black"
          >
            Edit
          </button>
          <button
            onClick={Delete}
            className="w-[130px] rounded-md border-[1px] bg-white px-4 py-2 text-[#DC2626]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
