/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { getApiUrl } from "~/lib/utils";
import NewProductModal from "./_components/new-product-modal";
import ProductDeleteModal from "./_components/product-delete-modal";
import ProductDetailModal from "./_components/product-detail-modal";
import ProductDetailView from "./_components/product-detail-view";
import ProductHeader from "./_components/product-header";

const ProductContent = dynamic(() => import("./_components/product-content"), {
  ssr: false,
});
const ProductFilter = dynamic(() => import("./_components/product-filter"), {
  ssr: false,
});

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize] = useState(10);
  const [pageNumber] = useState(1);
  const [view, setView] = useState<"list" | "grid">("list");
  const { addProducts } = useProducts();
  const {
    isOpen,
    updateProductId,
    updateOpen,
    updateFilterModal,
    setIsNewModal,
    isNewModal,
    isActionModal,
    setIsActionModal,
    isDelete,
    setIsDelete,
  } = useProductModal();

  const fetchProducts = async () => {
    const url = getApiUrl("/api/v1/products", {
      PageSize: pageSize,
      PageNumber: pageNumber,
    });

    const response = await fetch(url, {
      method: "GET",
      // Token has not been stored from the login in schema once done this can be uncommented
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const resp = await response.json();

    addProducts(resp.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        updateOpen(false);
        updateFilterModal(false);
        setIsNewModal(false);
        updateProductId("null");
        setIsActionModal(false);
        setIsDelete(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isNewModal || isActionModal || isDelete ? "hidden" : "unset";
  }, [isNewModal, isActionModal, isDelete]);

  return (
    <div className="relative flex w-full flex-col gap-y-8 pt-8">
      <ProductHeader />
      <NewProductModal />
      <ProductDeleteModal />
      <AnimatePresence>
        <div className="relative flex w-full items-start gap-x-2 pt-4 xl:gap-x-8">
          <motion.div
            layout
            layoutId="products_table"
            transition={{ duration: 0.2 }}
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
