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
    <div className="py-[113px] bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="w-full lg:w-2/3 pr-0 lg:pr-10">
            <h1 className="text-4xl lg:text-5xl font-bold font-inter mb-2">Client Testimonials</h1>
            <p className="text-lg lg:text-xl font-normal font-inter text-foreground">
              {` Don't just take our word for it - see what actual users of our product have to say about their experience.`}
            </p>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-6 mt-6 lg:mt-0">
            <div
              data-testid="custom-prev"
              className="h-12 w-12 lg:h-15 lg:w-15 border border-border bg-white hover:border-primary rounded flex items-center justify-center transition-all duration-300"
            >
              <TestimonialLeftArrow />
            </div>
            <div
              data-testid="custom-next"
              className="h-12 w-12 lg:h-15 lg:w-15 border border-border bg-white hover:border-primary rounded flex items-center justify-center transition-all duration-300"
            >
              <TestimonialRightArrow />
            </div>
          </div>
        </div>
        <div className="mt-14 lg:mt-20 flex items-center justify-between">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            onSlideChange={(item) => console.log(item.realIndex)}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={2000}
            breakpoints={{
              450: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
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
