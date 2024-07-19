"use client";

import Image from 'next/image'
import React from 'react'
import { HeroBoilerPlate, HeroChat, HeroCheckMark, HeroLine } from './svgs'
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Hero = () => {
    return (
        <div className="hero bg-background">
            <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-10 xl:px-10">
                <div className="hero-content">
                    <div className="hero-left">
                        <h1>
                            Focus on What Matters. We've Got the Foundation Covered.
                        </h1>

                        <div>
                            <HeroLine />
                        </div>

                        <p className="text-foreground">
                            Streamline your processes with a boilerplate built for efficiency and optimal productivity.
                        </p>

                        <button className="bg-primary text-background get-started">
                            Get Started
                        </button>
                    </div>


                    <div className="hero-right">


                        <div className="image-container">
                            <div className="hero-checkmark">
                                <HeroCheckMark />
                            </div>

                            <div className="hero-chat">
                                <HeroChat />
                            </div>

                            <div className="hero-boilerplate">
                                <HeroBoilerPlate />
                            </div>

                            <Swiper
                                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={1}
                                slidesPerView={1}
                                // onSwiper={(swiper) => console.log("")}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                speed={4000}
                            >

                                <SwiperSlide>
                                    <Image src="/images/hero-image.svg" alt="Hero Image" width={100} height={100} unoptimized/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image src="/images/hero-image.svg" alt="Hero Image" width={100} height={100} unoptimized/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image src="/images/hero-image.svg" alt="Hero Image" width={100} height={100} unoptimized/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image src="/images/hero-image.svg" alt="Hero Image" width={100} height={100} unoptimized/>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
