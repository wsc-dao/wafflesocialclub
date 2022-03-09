import Image from "next/image";
import React from "react";
import {Autoplay, EffectCoverflow, Parallax} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";


export const Carousel = ({images}: { images: string[] }) => (
  <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={false}
    slidesPerView={3}
    autoplay={true}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }}
    pagination={false}
    modules={[Autoplay, EffectCoverflow, Parallax]}
  >
    {images.map((src) => <SwiperSlide key={src}><Image src={src} width={300} height={300} alt={""}/></SwiperSlide>)}
  </Swiper>)
