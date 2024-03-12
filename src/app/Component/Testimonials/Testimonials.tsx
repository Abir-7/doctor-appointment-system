import React from "react";
import bg2 from "../../asset/bg2.jpg";
import Image from "next/image";
import PatientsSays from "./PatientsSays";
const Testimonials = () => {
  return (
    <div>
      <div className=" relative h-[420px] xs:h-[450px] sm:h-[500px]  lg:h-[710px]">
        <div className=" border-red-600 w-[250px] xs:w-[300px] sm:w-96  md:w-[500px] lg:w-[800px] border-2 rounded-lg p-2 right-[50%] top-0 lg:top-10 translate-x-[-50%] left-[50%] absolute  z-20">
          <Image className=" rounded-lg" src={bg2} alt=""></Image>
        </div>
        <div className="w-full bottom-0 absolute z-10 h-[350px] sm:h-[400px] lg:h-[500px]  bg-red-600">
         
          <div className="absolute bottom-5 md:bottom-14 gap-5 lg:bottom-10  w-full  flex justify-between flex-col md:flex-row md:w-[760px] lg:w-[1000px] px-4 translate-x-[-50%] left-[50%]  right-[50%] ">
     
            <div className="text-white  flex-shrink-0 flex flex-col items-center">
              <p className="font-bold text-2xl lg:text-3xl">5000+</p>
              <h1 className= " text-xl md:text-2xl font-bold">Positive Feedback</h1>
            </div>
            <div className="text-white  flex-shrink-0 flex flex-col items-center">
              <p className="font-bold text-2xl lg:text-3xl">5000+</p>
              <h1 className="text-xl md:text-2xl font-bold">Medical Blog Post</h1>
            </div>
            <div className="text-white   flex-shrink-0 flex flex-col items-center">
              <p className="font-bold text-2xl lg:text-3xl">5000+</p>
              <h1 className="text-xl md:text-2xl  font-bold">
                Question & Answare
              </h1>
            </div>
          </div>
        </div>
      </div>

<div>
  <PatientsSays></PatientsSays>
</div>

    </div>
  );
};

export default Testimonials;
