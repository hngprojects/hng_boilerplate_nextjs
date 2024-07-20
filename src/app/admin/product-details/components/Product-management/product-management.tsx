"use client";

import { useState } from "react";

import AddProductButton from "./add-product-button";
import ProductDisplayButton from "./product-display-button";
import SearchProductInput from "./search-product-input";

const ProductManagement = () => {
  const [listDisplay, setListDisplay] = useState<boolean>(true);
  const [gridDisplay, setGridDisplay] = useState<boolean>(false);

  // toggle display style from list to grid
  const changeDisplayToGrid = () => {
    setGridDisplay(true);
    setListDisplay(false);
    // console.log("grid button clicked");
  };

  const changeDisplayToList = () => {
    setListDisplay(true);
    setGridDisplay(false);
    // console.log("list button clicked");
  };

  return (
    <>
      <main>
        <div className="flex flex-row">
          <div className="mr-auto">
            <h2 className="text-[30px] font-semibold leading-[36px] text-default">
              Products
            </h2>
            <div className="text-neutral mt-[8px] text-sm leading-[16.94px]">
              Manage your products efficiently
            </div>
          </div>

          <AddProductButton />
        </div>

        <div className="mt-[24px] flex items-center">
          <div className="mr-auto">
            <SearchProductInput />
          </div>

          <div className="flex items-center gap-[16px]">
            <ProductDisplayButton
              gridDisplay={gridDisplay}
              listDisplay={listDisplay}
              gridDisplayFunction={changeDisplayToGrid}
              listDisplayFunction={changeDisplayToList}
            />

            <div className="h-[36px] w-[1px] bg-border"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductManagement;
