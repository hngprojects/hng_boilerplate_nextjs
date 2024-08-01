import { AnimatePresence, motion } from "framer-motion";

import { useProductsView } from "~/hooks/admin-product/use-product-view";
import { ProductTableProperties } from "~/types/admin-product.types";
import ProductGridCard from "./product-grid-card";

type Properties = {
  subset: ProductTableProperties[];
  filteredProducts: ProductTableProperties[];
  searchTerm: string;
};

const ProductGridContent = ({
  subset,
  filteredProducts,
  searchTerm,
}: Properties) => {
  const { view } = useProductsView();

  return (
    <AnimatePresence>
      {view === "grid" && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          layout
          layoutId="grid_view"
          className="grid w-full grid-cols-1 justify-center gap-8 pt-4 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-10 min-[1300px]:grid-cols-5"
        >
          {filteredProducts.length > 0 &&
            subset.length > 0 &&
            subset.map((product) => (
              <ProductGridCard
                key={product.product_id}
                searchTerm={searchTerm}
                product={product}
              />
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductGridContent;
