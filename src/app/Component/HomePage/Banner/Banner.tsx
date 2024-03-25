import Image from "next/image";
import React from "react";
import bg from "../../../asset/bg1.jpg";

const Banner = () => {
  return (
    <>
      <div className=" mb-2 h-[76vh] sm:h-[86vh] md:h-[96vh] overflow-hidden relative  w-full">
        <div className="flex   w-full h-full">
          <Image
            className=" w-full  flex-shrink-0  h-full object-cover"
            src={bg}
            alt="background"
          ></Image>
          {/* <Image className=" w-full flex-shrink-0  h-full object-cover" src={bg} alt="background"></Image> */}
        </div>

        <div className="absolute w-[90%] md:w-[80%] top-[50%] translate-x-[-50%] translate-y-[-50%] md:translate-y-[-70%] lg:translate-y-[-90%] left-[50%] ">
          <h1 className=" text-4xl sm:text-6xl font-bold text-white drop-shadow-lg text-center">
            Meet The Best Doctor
          </h1>
          <p className="text-center mt-4 text-white">
            Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment or a simple consultation.
          </p>
        </div>
        <div style={{ filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 1))" }}>
          <svg
            className=" absolute bottom-[-1px] w-[111%] left-[-10px] z-[20]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 219"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,128L60,138.7C120,149,240,171,360,181.3C480,192,600,192,720,181.3C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Banner;
