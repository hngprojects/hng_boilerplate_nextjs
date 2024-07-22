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
  //

  return (
    <div className="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="testimonials-heading">
          <div className="heading-left">
            <h1>Client Testimonials</h1>
            <p className="text-foreground">
              {` Don't just take our word for it - see what actual users of our
              product have to say about their experience.`}
            </p>
          </div>
          <div className="heading-right">
            <div
              data-testid="custom-prev"
              className="custom-prev border border-border bg-[#ffffff] hover:border-primary"
            >
              <TestimonialLeftArrow />
            </div>
            <div
              data-testid="custom-next"
              className="custom-next border border-border bg-[#ffffff] hover:border-primary"
            >
              <TestimonialRightArrow />
            </div>
          </div>
        </div>
        <div className="testimonials-box">
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
