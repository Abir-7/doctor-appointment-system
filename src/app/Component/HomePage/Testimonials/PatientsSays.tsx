import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import styles from "./PatientsSays.module.css";

const PatientsSays = () => {
  return (
    <div className="mt-5 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1380: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="mb-10 shadow-lg rounded-xl ">
          <div className="min-h-[260px] p-3   w-full">
            <div className="w-24 h-24 rounded-full  mx-auto overflow-hidden">
              <img
                className="object-cover object-top w-24 h-24 rounded-full"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1710654856~exp=1710655456~hmac=9c192b14a0840c6500cf11d4d033aba53ddab09343fa2253f018e181514a9fb8"
                alt=""
              />
            </div>

            <div className="text-center my-3">
              <h1 className="text-2xl font-bold mb-4">Name</h1>
              <p className="">
                <span className="text-xl font-medium">&quot;</span> Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa veritatis, omnis
                dolores voluptate officiis deleniti aliquid repellat aspernatur
                earum magnam perferendis. Ullam ipsam laboriosam natus non sint!
                Fuga, facere voluptate...
                <span className="text-xl font-medium">&quot;</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10 shadow-lg rounded-xl ">
          <div className="min-h-[260px] p-3   w-full">
            <div className="w-24 h-24 rounded-full  mx-auto overflow-hidden">
              <img
                className="object-cover object-top w-24 h-24 rounded-full"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1710654856~exp=1710655456~hmac=9c192b14a0840c6500cf11d4d033aba53ddab09343fa2253f018e181514a9fb8"
                alt=""
              />
            </div>

            <div className="text-center my-3">
              <h1 className="text-2xl font-bold mb-4">Name</h1>
              <p className="">
                <span className="text-xl font-medium">&quot;</span> Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa veritatis, omnis
                dolores voluptate officiis deleniti aliquid repellat aspernatur
                earum magnam perferendis. Ullam ipsam laboriosam natus non sint!
                Fuga, facere voluptate...
                <span className="text-xl font-medium">&quot;</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10 shadow-lg rounded-xl ">
          <div className="min-h-[260px] p-3   w-full">
            <div className="w-24 h-24 rounded-full  mx-auto overflow-hidden">
              <img
                className="object-cover object-top w-24 h-24 rounded-full"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1710654856~exp=1710655456~hmac=9c192b14a0840c6500cf11d4d033aba53ddab09343fa2253f018e181514a9fb8"
                alt=""
              />
            </div>

            <div className="text-center my-3">
              <h1 className="text-2xl font-bold mb-4">Name</h1>
              <p className="">
                <span className="text-xl font-medium">&quot;</span> Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa veritatis, omnis
                dolores voluptate officiis deleniti aliquid repellat aspernatur
                earum magnam perferendis. Ullam ipsam laboriosam natus non sint!
                Fuga, facere voluptate...
                <span className="text-xl font-medium">&quot;</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10 shadow-lg rounded-xl ">
          <div className="min-h-[260px] p-3   w-full">
            <div className="w-24 h-24 rounded-full  mx-auto overflow-hidden">
              <img
                className="object-cover object-top w-24 h-24 rounded-full"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1710654856~exp=1710655456~hmac=9c192b14a0840c6500cf11d4d033aba53ddab09343fa2253f018e181514a9fb8"
                alt=""
              />
            </div>

            <div className="text-center my-3">
              <h1 className="text-2xl font-bold mb-4">Name</h1>
              <p className="">
                <span className="text-xl font-medium">&quot;</span> Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa veritatis, omnis
                dolores voluptate officiis deleniti aliquid repellat aspernatur
                earum magnam perferendis. Ullam ipsam laboriosam natus non sint!
                Fuga, facere voluptate...
                <span className="text-xl font-medium">&quot;</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10 shadow-lg rounded-xl ">
          <div className="min-h-[260px] p-3   w-full">
            <div className="w-24 h-24 rounded-full  mx-auto overflow-hidden">
              <img
                className="object-cover object-top w-24 h-24 rounded-full"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1710654856~exp=1710655456~hmac=9c192b14a0840c6500cf11d4d033aba53ddab09343fa2253f018e181514a9fb8"
                alt=""
              />
            </div>

            <div className="text-center my-3">
              <h1 className="text-2xl font-bold mb-4">Name</h1>
              <p className="">
                <span className="text-xl font-medium">&quot;</span> Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa veritatis, omnis
                dolores voluptate officiis deleniti aliquid repellat aspernatur
                earum magnam perferendis. Ullam ipsam laboriosam natus non sint!
                Fuga, facere voluptate...
                <span className="text-xl font-medium">&quot;</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        


      </Swiper>
    </div>
  );
};

export default PatientsSays;
