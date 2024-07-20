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
      className="flex items-center justify-between"
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
        <p className="text-base font-medium" data-testid="product-name">
          {name}
        </p>
      </div>
      <div className="text-base font-semibold" data-testid="product-total">
        {total} sales
      </div>
    </div>
  );
}
