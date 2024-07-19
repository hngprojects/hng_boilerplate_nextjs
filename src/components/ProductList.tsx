import Image from "next/image";

export type ProductListProperties = {
  id: number;
  name: string;
  image: string;
  total: number;
};

export default function ProductList({
  id,
  name,
  image,
  total,
}: ProductListProperties) {
  return (
    <div
      className="flex justify-between items-center"
      data-testid="product-list-item"
    >
      <div className="span-col-8 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10"
          data-testid={`product-image-${id}`}
        />
        <p className="font-medium text-base" data-testid="product-name">
          {name}
        </p>
      </div>
      <div className="font-semibold text-base" data-testid="product-total">
        {total} sales
      </div>
    </div>
  );
}
