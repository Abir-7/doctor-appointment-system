'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const VisitedDoctorList = () => {
  return (

    <Swiper
    slidesPerView={2}
    spaceBetween={5}

    breakpoints={{
      340: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      540: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      1300: {
        slidesPerView: 9,
        spaceBetween: 50,
      },
      1536: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1700: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>
<SwiperSlide className='w-28 ' ><div className='w-16 bg-red-400 h-16 rounded-full mx-auto'></div></SwiperSlide>

  </Swiper>
  
  
  )
}

export default VisitedDoctorList


