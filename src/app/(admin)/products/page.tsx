"use client";

import { useState } from "react";

import ProductContent from "./_components/product-content";
import ProductFilter from "./_components/product-filter";
import ProductHeader from "./_components/product-header";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState<"list" | "grid">("list");
  return (
    <div className="flex w-full flex-col gap-y-8">
      <ProductHeader />
      <ProductFilter
        view={view}
        setView={setView}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ProductContent searchTerm={searchTerm} view={view} />
    </div>
  );
};

export default ProductPage;
