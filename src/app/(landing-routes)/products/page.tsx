"use client";

import axios from "axios";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import { Button } from "~/components/ui/button";
import { productData } from "./data";
import { StarIcon } from "./icons";

export default function Page() {
  const [, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const baseUrl = await getApiUrl();
        const API_URL = `${baseUrl}/api/v1/products`;
        const response = await axios.get(`${API_URL}?page=${page}&page_size=9`);
        setProducts(response.data.data.products);
      } catch {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  return (
    <div className="bg-white px-4 pb-[40px] pt-[80px]">
      <header className="mb-[80px] grid place-items-center text-center">
        <div className="mb-[12px] w-max rounded-[10px] bg-[#f1f1f1] p-[10px] text-[14px] lg:mb-[24px] lg:text-[16px]">
          Product
        </div>
        <h1 className="mb-[12px] text-[32px] font-bold leading-[32px] lg:mb-[24px] lg:text-[64px] lg:leading-[64px]">
          Browse our <span className="text-primary">latest products</span>
        </h1>
        <p className="text-[14px] text-[#525252] lg:text-[18px]">
          Connect with Multiple Organizations for Unmatched Variety
        </p>
      </header>
      <div className="mx-auto w-full max-w-[1024px]">
        <div className="mx-auto mb-[36px] flex h-[44px] w-full max-w-[460px] items-center gap-2 rounded-[6px] border-[1px] border-[#e4e7e9] px-[16px] py-[12px]">
          <input
            placeholder="Search for anything"
            className="flex-1 outline-none"
          />
          <SearchIcon />
        </div>
        <div className="mb-[40px] flex items-center justify-between">
          <p className="text-[#717174]">1-24 of 172 products</p>
          <div className="flex items-center gap-[12px] rounded-[4px] border-[1px] border-[#717174] px-[16px] py-[11px]">
            <p className="min-w-[121px] text-[#141414]">Filter</p>
            <div className="h-[24px] w-[1px] bg-[#717171]"></div>
            <ChevronDown />
          </div>
        </div>
        <div className="mb-[40px] grid gap-[40px] sm:grid-cols-2 lg:grid-cols-3">
          {productData.map((data, index) => (
            <Link
              href="/products/uid"
              key={index}
              className="overflow-hidden rounded-[12px] border-[1px] border-[#cbd5e1] hover:border-transparent hover:shadow-[0px_4px_4px_0px_#00000040]"
            >
              <figure>
                <Image
                  src={data.image}
                  alt="product"
                  width={323}
                  height={318}
                  className="w-full object-cover"
                />
              </figure>
              <div className="p-[16px]">
                <div className="mb-[8px] flex items-center justify-between">
                  <h2>Product 2</h2>
                  <p className="font-semibold">$150 USD</p>
                </div>
                <div className="mb-[17px]">
                  <p className="w-max rounded rounded-[6px] bg-[#f3f4f6] px-[8px] py-[4px] text-[14px]">
                    King Pin Organization{" "}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-[2px] self-start">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                  <div>
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <div className="grid place-items-center">
          <div className="flex w-max items-center gap-[16px] pt-[20px]">
            <Button
              variant="ghost"
              className="flex items-center gap-[11px] font-semibold"
              onClick={() =>
                setPage((previous) => (previous > 1 ? previous - 1 : 0))
              }
            >
              <ChevronLeft />
              <div>Previous</div>
            </Button>
            <div className="flex font-medium text-[#09090B]">
              <button className="grid h-[40px] w-[40px] place-items-center rounded-[6px]">
                1
              </button>
              <button className="grid h-[40px] w-[40px] place-items-center rounded-[6px] border-[1px] border-[#E4E4E7] bg-primary text-white">
                2
              </button>
              <button className="grid h-[40px] w-[40px] place-items-center rounded-[6px]">
                3
              </button>
              <button className="grid w-[40px] place-items-center">...</button>
            </div>
            <Button
              variant="ghost"
              onClick={() => setPage((previous) => previous + 1)}
              className="flex items-center gap-[11px] font-semibold"
            >
              <div>Next</div>
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
        stroke="#191C1F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7031 13.7031L17.5 17.5"
        stroke="#191C1F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
