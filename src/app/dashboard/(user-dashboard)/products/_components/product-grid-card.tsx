import { useRouter } from "next-nprogress-bar";

import BlurImage from "~/components/miscellaneous/blur-image";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { addDotsToLongString, cn, formatPrice } from "~/lib/utils";
import { ProductTableProperties } from "~/types/admin-product.types";

type Properties = {
  product: ProductTableProperties;

  searchTerm: string;
};

const ProductGridCard = ({ product, searchTerm }: Properties) => {
  const router = useRouter();

  const {
    updateProductId,
    updateOpen,

    setIsDelete,
  } = useProductModal();

  if (!product) return;

  const handleEditAction = (id: string) => {
    updateOpen(false);
    router.push(`/dashboard/products/${id}`);
    updateProductId("null");
  };
  const handleOpenDetail = (product_id: string) => {
    updateProductId(product_id);
    updateOpen(true);
  };
  return (
    <div className="relative flex w-full max-w-[243px] flex-col items-center gap-y-4 rounded-[6px] border border-gray-200 px-4 pt-4">
      <Input
        type="checkbox"
        className="absolute left-6 top-6 z-10 size-4 lg:size-5"
      />
      <BlurImage
        width={211}
        height={113}
        src={product.imageUrl}
        alt={product.name}
        className="h-[113px] rounded-[7px]"
        onClick={() => handleOpenDetail(product.product_id)}
        role="button"
      />
      <div className="flex w-full flex-col gap-y-1">
        <div className="flex w-full items-center justify-between">
          <span
            role="button"
            onClick={() => handleOpenDetail(product.product_id)}
            className="font-bold"
          >
            {searchTerm.length > 1 ? (
              <span
                className={cn(
                  "",
                  searchTerm.length > 2 ? "w-[70px] overflow-x-auto" : "",
                )}
                dangerouslySetInnerHTML={{
                  __html: product.name!.replaceAll(
                    new RegExp(`(${searchTerm})`, "gi"),
                    (match, group) =>
                      `<span  style="color: black; background-color: ${
                        group.toLowerCase() === searchTerm.toLowerCase()
                          ? "yellow"
                          : "inherit"
                      }">${match}</span>`,
                  ),
                }}
              />
            ) : (
              <span className="">
                {addDotsToLongString({ str: product.name, len: 12 })}
              </span>
            )}
          </span>
          <span className="font-bold">{formatPrice(product.price)}</span>
        </div>
        <span className="text-[11.3px] text-neutral-dark-1">
          {" "}
          {product.category.length > 0
            ? typeof product.category === "string"
              ? product.category
              : product.category[0]
            : "N/A"}
        </span>
        <span
          className={cn(
            "flex w-fit items-center gap-x-1 whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-medium",
            {
              "bg-[#6DC347] bg-opacity-20 text-[#6DC347]":
                product.status === "in_stock",
              "bg-[#DC2626] bg-opacity-20 text-[#DC2626]":
                product.status === "out_of_stock",
              "bg-[#EAB308] bg-opacity-20 text-[#EAB308]":
                product.status === "low_on_stock",
            },
          )}
        >
          <span
            className={cn("size-1 rounded-full", {
              "bg-[#6DC347]": product.status === "in_stock",
              "bg-[#DC2626]": product.status === "out_of_stock",
              "bg-[#EAB308]": product.status === "low_on_stock",
            })}
          />
          {product.status === "in_stock" && "In Stock"}
          {product.status === "low_on_stock" && "Low on Stock"}
          {product.status === "out_of_stock" && "Out of Stock"}
        </span>

        <div className="my-2 flex w-full items-center justify-between gap-x-2">
          <Button
            onClick={() => handleEditAction(product!.product_id)}
            variant="outline"
            className="!h-[22px] w-full bg-white text-[10px] font-medium sm:font-semibold sm:tracking-wide"
          >
            Edit
          </Button>
          <Button
            onClick={() => setIsDelete(true)}
            variant="outline"
            className="!h-[22px] w-full bg-white text-[10px] font-medium text-error sm:font-semibold sm:tracking-wide"
          >
            <span>Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductGridCard;
