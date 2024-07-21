"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import ProductFilter from "./_components/product-filter";
import ProductHeader from "./_components/product-header";

const ProductContent = dynamic(() => import("./_components/product-content"), {
  ssr: false,
});

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
