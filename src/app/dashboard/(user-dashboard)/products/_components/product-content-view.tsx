import { AnimatePresence } from "framer-motion";
import { useRouter } from "next-nprogress-bar";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { cn } from "~/lib/utils";
import { ProductTableProperties } from "~/types/admin-product.types";
import { ProductGridCard } from "./product-grid-card";
import { ProductListRow } from "./product-list-row";
import { ProductNotFound } from "./product-not-found";

type Properties = {
  subset: ProductTableProperties[];
  filteredProducts: ProductTableProperties[];
  searchTerm: string;
  view: "grid" | "list";
};

export const ProductContentView = ({
  subset,
  filteredProducts,
  searchTerm,
  view = "grid",
}: Properties) => {
  const { products } = useProducts();
  const {
    updateOpen,
    updateProductId,
    product_id,
    isActionModal,
    setIsActionModal,
    setIsDelete,
  } = useProductModal();
  const router = useRouter();

  if (!products) return;

  const handleOpenActionModal = (product_id: string) => {
    updateProductId(product_id);
    setIsActionModal(!isActionModal);
  };

  const handleOpenDetail = (product_id: string) => {
    setIsActionModal(false);
    updateProductId(product_id);
    updateOpen(true);
  };
  const handleDeleteAction = (id: string) => {
    setIsActionModal(false);
    updateProductId(id);
    setIsDelete(true);
  };
  const handleEditAction = (id: string) => {
    setIsActionModal(false);
    router.push(`/dashboard/products/${id}`);
  };

  return (
    <AnimatePresence>
      {view === "list" && (
        <div className="show_scrollbar rounded-xl border border-gray-300 bg-[#F1F5F9] pt-1 sm:pt-4">
          <Table
            divClassName={cn(
              "relative h-full min-h-[400px] xl:min-h-[600px] bg-white",
            )}
          >
            <TableHeader>
              <TableRow className="bg-[#F1F5F9]">
                <TableHead className="w-[100px]x overflow-x-auto text-center text-xs min-[380px]:text-sm md:w-[200px] md:text-base lg:w-[200px]">
                  Product Name
                </TableHead>
                <TableHead className="whitespace-nowrap text-xs min-[380px]:text-sm md:text-base">
                  Product ID
                </TableHead>
                <TableHead className="whitespace-nowrap text-xs min-[380px]:text-sm md:text-base">
                  Category
                </TableHead>
                <TableHead className="whitespace-nowrap text-xs min-[380px]:text-sm md:text-base">
                  Price
                </TableHead>
                <TableHead className="whitespace-nowrap text-xs min-[380px]:text-sm md:text-base">
                  Status
                </TableHead>
                <TableHead className="whitespace-nowrap text-xs min-[380px]:text-sm md:text-base">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length > 0 &&
                subset.length > 0 &&
                subset.map((product, index) => (
                  <ProductListRow
                    key={product.product_id}
                    id={product.product_id}
                    selectedId={product_id}
                    searchTerm={searchTerm}
                    price={product.price}
                    description={product.description}
                    title={product.name}
                    category={product.category}
                    imgSrc={product.image}
                    status={product.status}
                    isBottomRow={
                      index === subset.length - 1 || index === subset.length - 2
                    }
                    isActionModal={isActionModal}
                    onOpenDetails={() => handleOpenDetail(product.product_id)}
                    onEdit={() => handleEditAction(product.product_id)}
                    onDelete={() => handleDeleteAction(product.product_id)}
                    onOpenActionModal={() =>
                      handleOpenActionModal(product.product_id)
                    }
                    onCloseActionModal={() => setIsActionModal(false)}
                  />
                ))}
            </TableBody>
            {filteredProducts.length === 0 && searchTerm.length > 1 && (
              <ProductNotFound term={searchTerm} />
            )}
          </Table>
        </div>
      )}
      {view === "grid" && (
        <div className="flex h-full flex-col justify-center">
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(var(--min),1fr))] gap-x-[8.91px] gap-y-[26px] [--min:185px] sm:gap-y-8 sm:[--min:240px] md:gap-x-[36px]">
            {filteredProducts.length > 0 &&
              subset.length > 0 &&
              subset.map((product) => (
                <ProductGridCard
                  key={product.product_id}
                  id={product.product_id}
                  // selectedId={product_id}
                  searchTerm={searchTerm}
                  price={product.price}
                  description={product.description}
                  title={product.name}
                  category={product.category}
                  imgSrc={product.image}
                  status={product.status}
                  onSelect={() => ({})}
                  onEdit={() => handleEditAction(product.product_id)}
                  onDelete={() => handleDeleteAction(product.product_id)}
                />
              ))}
          </div>
          {filteredProducts.length === 0 && searchTerm.length > 1 && (
            <ProductNotFound term={searchTerm} />
          )}
        </div>
      )}
    </AnimatePresence>
  );
};
