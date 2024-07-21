import { AnimatePresence, motion } from "framer-motion";
import { MoreVertical } from "lucide-react";

import BlurImage from "~/components/miscellaneous/blur-image";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { cn, formatPrice } from "~/lib/utils";
import { ProductTableProperties } from "~/types/admin-product.types";

type Properties = {
  subset: ProductTableProperties[];
  filteredProducts: ProductTableProperties[];
  searchTerm: string;
};

const ProductBody = ({ subset, filteredProducts, searchTerm }: Properties) => {
  const { products } = useProducts();
  const { updateOpen, updateProductId, product_id } = useProductModal();

  if (!products) return;

  return (
    <motion.tbody
      initial="productCards"
      animate="whileInView"
      whileInView="whileInView"
      transition={{ duration: 0.2, staggerChildren: 0.15 }}
      className="min-h-[400px] w-full divide-y divide-gray-200 overflow-hidden bg-white"
    >
      <AnimatePresence>
        {filteredProducts.length > 0 &&
          subset.length > 0 &&
          subset.map((product) => (
            <motion.tr
              role="button"
              onClick={() => {
                updateProductId(product.product_id);
                updateOpen(true);
              }}
              layout
              layoutId={product.product_id}
              key={product.product_id}
              variants={{
                productCards: {
                  opacity: 0,
                  y: 30,
                },
                whileInView: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                type: "spring",
                mass: 2,
                // stiffness: 200,
                damping: 30,
              }}
              viewport={{ once: true }}
              className={cn(
                "transition-colors hover:bg-[#F1F5F9]",
                product_id === product.product_id
                  ? "pointer-events-none bg-[#F1F5F9]"
                  : "pointer-events-auto",
              )}
            >
              <td className="flex items-center justify-start gap-x-2 whitespace-nowrap px-2 py-4 md:gap-x-4 min-[1440px]:px-6">
                <div className="flex items-center gap-x-2 md:gap-x-4">
                  <Input type="checkbox" className="size-4 lg:size-5" />
                  <BlurImage
                    src={product.image}
                    alt="Product"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-lg"
                  />
                </div>
                <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-900 md:gap-x-4 min-[1440px]:px-6">
                  <span>
                    {searchTerm.length > 1 ? (
                      <span
                        className={cn(
                          "",
                          searchTerm.length > 2
                            ? "w-[50px] overflow-x-auto"
                            : "",
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
                      <span>{product.name}</span>
                    )}
                  </span>
                </td>
              </td>
              <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500 md:gap-x-4 min-[1440px]:px-6">
                {product.product_id}
              </td>
              <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500 md:gap-x-4 min-[1440px]:px-6">
                {product.category}
              </td>
              <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500 md:gap-x-4 min-[1440px]:px-6">
                {formatPrice(product.price)}
              </td>
              <td className="whitespace-nowrap px-2 py-4 md:gap-x-4 min-[1440px]:px-6">
                <span
                  className={cn(
                    "flex items-center gap-x-1 rounded-full px-2 text-sm leading-5 md:gap-x-2",
                  )}
                >
                  <span
                    className={cn("size-4 rounded-full", {
                      "bg-[#6DC347]": product.status === "in_stock",
                      "bg-[#DC2626]": product.status === "low_on_stock",
                      "bg-[#EAB308]": product.status === "out_of_stock",
                    })}
                  />
                  {product.status === "in_stock" && "In Stock"}
                  {product.status === "low_on_stock" && "Low on Stock"}
                  {product.status === "out_of_stock" && "Out of Stock"}
                </span>
              </td>
              <td className="whitespace-nowrap px-2 py-4 md:gap-x-4 min-[1440px]:px-6">
                <Button variant={"ghost"} size={"icon"}>
                  <MoreVertical />
                </Button>
              </td>
            </motion.tr>
          ))}
      </AnimatePresence>
    </motion.tbody>
  );
};

export default ProductBody;
