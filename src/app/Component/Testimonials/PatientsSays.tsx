import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import styles from "./PatientsSays.module.css";

const PatientsSays = () => {
  return (
    <div className="mt-5">
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px] bg-red-600 w-[400px]">

          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-[500px] bg-red-500 w-[400px]">

          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-[500px] bg-red-400 w-[400px]">

          </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PatientsSays;
