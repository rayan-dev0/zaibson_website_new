import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../Styles/swiper-custom.css";

const Carousel = ({ imgs }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {imgs?.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt="Product Image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
