import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import { Typography } from "@mui/material";
import { logos } from "../data/data";

export default function Clients() {
  return (
    <div style={{ padding: "5rem 8%" }}>
      <div className="heading">
        <h3 style={{ fontSize: "1.4rem", color: "#666" }}>
          Trusted by the world's most innovative teams
        </h3>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {logos.map((logo) => (
          <SwiperSlide>
            <img src={logo.path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
