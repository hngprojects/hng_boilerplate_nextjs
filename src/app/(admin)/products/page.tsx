"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import ProductDetailModal from "./_components/product-detail-modal";
import ProductDetailView from "./_components/product-detail-view";
import ProductFilter from "./_components/product-filter";
import ProductHeader from "./_components/product-header";
import { PRODUCT_TABLE } from "./data/product.mock";

const ProductContent = dynamic(() => import("./_components/product-content"), {
  ssr: false,
});

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState<"list" | "grid">("list");
  const { addProducts } = useProducts();
  const { isOpen } = useProductModal();

  useEffect(() => {
    const is_saved = localStorage.getItem("admin_products");
    if (is_saved) {
      const parse_data = JSON.parse(is_saved);
      if (parse_data.state.products) return;
      setTimeout(() => {
        addProducts(PRODUCT_TABLE);
      }, 5000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full flex-col gap-y-8">
      <ProductHeader />
      <AnimatePresence>
        <div className="flex w-full items-start gap-x-8 pt-4 xl:gap-x-10">
          <motion.div
            layout
            layoutId="products_table"
            className="flex w-full flex-col gap-y-8"
          >
            <ProductFilter
              view={view}
              setView={setView}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <ProductContent searchTerm={searchTerm} view={view} />
          </motion.div>

          {isOpen && <ProductDetailView />}
          <ProductDetailModal />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
