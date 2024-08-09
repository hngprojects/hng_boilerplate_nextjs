"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import NewProductModal from "./_components/new-product-modal";
import ProductFilter from "./_components/product-filter";
import ProductHeader from "./_components/product-header";

const ProductPage = () => {
  const [view, setView] = useState<"list" | "grid">("grid");
  return (
    <div className="relative flex w-full flex-col gap-y-8 pt-8">
      <ProductHeader />
      <NewProductModal />
      {/* <ProductDeleteModal /> */}
      <AnimatePresence>
        <div className="relative flex w-full items-start gap-x-2 pt-4 xl:gap-x-8">
          <motion.div
            layout
            layoutId="products_table"
            transition={{ duration: 0.2 }}
            className="flex w-full flex-col gap-y-8"
          >
            <ProductFilter view={view} setView={setView} />
            {/* <ProductContent view={view} />
            {/* {isOpen && <ProductDetailView />} */}
            {/* <ProductDetailModal />  */}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
