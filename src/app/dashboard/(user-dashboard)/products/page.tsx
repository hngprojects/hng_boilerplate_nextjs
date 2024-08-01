"use client";

import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { useProductModal } from "~/hooks/admin-product/use-product.modal";
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
  const [view, setView] = useState<"list" | "grid">("list");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();
  const [orgId, setOrgId] = useState<string | null>(); //

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

  useEffect(() => {
    const fetchOrgId = async () => {
      try {
        const response = await axios.get(
          "https://deployment.api-expressjs.boilerplate.hng.tech/api/v1/organisations",
        );
        setOrgId(response.data.orgId);
      } catch (error) {
        console.error("Error fetching organization ID:", error);
        setError("Failed to fetch organization ID");
        setLoading(false);
      }
    };

    fetchOrgId();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!orgId) return;

      try {
        const response = await axios.get(
          `https://deployment.api-expressjs.boilerplate.hng.tech/api/v1/products/${orgId}?page=1&limit=3`,
        );
        console.log(response.data);
        setProducts(response.data.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [orgId]);

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
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <ProductContent
                products={products}
                searchTerm={searchTerm}
                view={view}
              />
            )}
          </motion.div>

          {isOpen && <ProductDetailView />}
          <ProductDetailModal />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
