"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Button } from "~/components/ui/button";
import {
  ChevronRight,
  DeliveryVanIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
  ThreeDRotateIcon,
} from "../icons";

export default function Page() {
  return (
    <div className="bg-white px-4">
      <div className="mx-auto w-full max-w-[1196px] pb-[40px] pt-[24px]">
        <div>
          <div className="mb-[48px] flex w-max items-center gap-[8px] rounded-[6px] bg-[#fafafa] px-[16px] py-[4px] text-[14px] lg:text-[16px]">
            <span>Products</span>
            <ChevronRight />
            <span className="ml-2">Product Details</span>
          </div>
          <div className="grid gap-[45px] lg:grid-cols-2 lg:gap-[90px]">
            <figure className="overflow-hidden rounded-[6px]">
              <Image
                src="/product/product-detail-img.png"
                alt="Product"
                width={546}
                height={380}
                className="w-full"
              />
            </figure>
            <div>
              <div className="flex items-center gap-[2px] self-start">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <h1 className="font-inter my-[8px] text-[24px] font-medium text-[#14171b] md:text-[32px] lg:text-[40px]">
                Product 2
              </h1>
              <p className="text-[#6c7275]">
                A fusion of ripe bananas, pure honey, and succulent raspberries
                with our bread. Crafted to perfection.
              </p>
              <h2 className="font-poppins my-[16px] text-[20px] font-medium text-[#14171b] lg:text-[28px]">
                $150.00
              </h2>
              <div className="my-[16px] border-t-[1px] border-t-[#e8ecef] pt-[16px]">
                <div className="mb-[16px] flex gap-[24px]">
                  <div className="flex h-[44px] w-[127px] items-center justify-between rounded-[8px] bg-[#f5f5f5] p-[16px]">
                    <MinusIcon />
                    <span className="font-inter font-semibold text-[#121212]">
                      1
                    </span>
                    <PlusIcon />
                  </div>
                  <Button
                    size="lg"
                    className="flex-1 text-primary"
                    variant="outline"
                  >
                    Add to Cart
                  </Button>
                </div>
                <Button className="w-full" size="lg">
                  Make Payment
                </Button>
              </div>
              <div className="mb-[16px] flex items-center gap-[20px]">
                <DeliveryVanIcon />
                <p className="text-[14px] text-[#424242]">
                  Free worldwide shipping on all orders over $100
                </p>
              </div>
              <div className="flex items-center gap-[20px]">
                <ThreeDRotateIcon />
                <p className="text-[14px] text-[#424242]">
                  Delivers in: 3-7 Working Days Shipping & Return
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[48px]">
          <header className="mb-[24px] lg:mb-[42px]">
            <div className="flex items-center gap-[14px] text-[18px] lg:gap-[20px] lg:text-[26px]">
              <h1 className="text-[26px] font-bold">Descriptions</h1>
              <div className="h-[33px] w-[1px] bg-black"></div>
              <p className="text-[#696969]">Reviews</p>
            </div>
          </header>
          <p className="text-[14px] leading-[170.5%] text-[#575757] lg:text-[16px]">
            Our artisan bread is crafted using traditional methods and the
            finest ingredients. Baked fresh daily, each loaf features a crisp,
            golden crust and a soft, flavorful interior. Our signature recipes
            include a range of varieties, from hearty sourdough and rustic
            multigrain to rich olive and rosemary. Our dried nuts are carefully
            selected and processed to preserve their natural flavor and
            nutritional value. Sourced from trusted farms, our nuts include a
            variety of options such as almonds, cashews, walnuts, and
            pistachios, all roasted to perfection and lightly seasoned.Our team
            of skilled bakers and nut experts work tirelessly to blend age-old
            techniques with modern practices, creating products that not only
            taste great but are also kind to the environment. From our ovens to
            your table, we strive to deliver products that enhance your culinary
            experiences and support a healthier lifestyle.
          </p>
        </div>
        <div className="py-[48px]">
          <header className="mb-[50px] flex justify-between gap-2">
            <h1 className="text-[24px] font-semibold leading-[28.8px]">
              {`Similar Products from Kingpin's Organization`}{" "}
            </h1>
            <button className="whitespace-nowrap text-[14px] font-medium text-[#464646] underline">
              See all
            </button>
          </header>
          <div>
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              breakpoints={{
                // When the screen is >= 640px
                425: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 2,
                },
                // When the screen is >= 768px
                768: {
                  slidesPerView: 3,
                },
                // When the screen is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="overflow-hidden rounded-[6px]"
                >
                  <figure>
                    <Image
                      src="/product/product-detail-img-x1.png"
                      alt="Product"
                      width={266}
                      height={348}
                      className="h-[348px] w-full select-none object-cover"
                    />
                  </figure>
                  <div className="px-[2px] py-[12px]">
                    <div className="flex items-center gap-[2px] self-start">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} />
                      ))}
                    </div>
                    <h1 className="pb-1 pt-2 font-semibold text-[#14171b]">
                      Product 50
                    </h1>
                    <p className="text-[14px] font-semibold text-[#14171b]">
                      $575.99
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
