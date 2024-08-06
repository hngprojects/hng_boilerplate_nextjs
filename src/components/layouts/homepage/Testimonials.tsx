"use client";

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { TestimonialLeftArrow, TestimonialRightArrow } from "./svgs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials-data";

const Testimonials = () => {
  return (
    <div className="bg-background py-[113px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end md:flex-row md:items-center md:justify-between">
          <div className="w-full pr-0 lg:w-2/3 lg:pr-10">
            <h1 className="font-inter mb-2 text-4xl font-bold md:text-[40px]">
              Client Testimonials
            </h1>
            <p className="font-inter text-[16px] font-normal text-foreground md:text-[18px]">
              {` Don't just take our word for it - see what actual users of our product have to say about their experience.`}
            </p>
          </div>

          <div className="mt-6 flex items-center space-x-4 sm:ml-auto sm:justify-end md:ml-auto md:mt-4 lg:mt-0 lg:space-x-6">
            <div
              data-testid="custom-prev"
              className="custom-prev lg:h-15 lg:w-15 flex h-12 w-12 items-center justify-center rounded border border-border bg-white transition-all duration-300 hover:border-primary"
            >
              <TestimonialLeftArrow />
            </div>
            <div
              data-testid="custom-next"
              className="custom-next lg:h-15 lg:w-15 flex h-12 w-12 items-center justify-center rounded border border-border bg-white transition-all duration-300 hover:border-primary"
            >
              <TestimonialRightArrow />
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between lg:mt-20">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            // speed={1000}
            breakpoints={{
              450: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            data-testid="swiper"
          >
            {testimonials?.map((item, key) => (
              <SwiperSlide key={key} data-testid="testimonial-card">
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
