"use client";

import Image from "next/image";
import React from "react";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
    return (
        <>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                spaceBetween={30}
                centeredSlides={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                loop={true}
                pagination={false}
                modules={[EffectCube, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src="/assets/images/dem-1.jpg" alt="" loading="lazy" height={560} width={550}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/dem-2.jpg" alt="" loading="lazy" height={560} width={550}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/dem-3.jpg" alt="" loading="lazy" height={560} width={550}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/dem-4.jpg" alt="" loading="lazy" height={560} width={550}/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider;