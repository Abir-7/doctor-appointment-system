import Image from "next/image";
import React from "react";
//import img1 from "../../../asset/aboutUs/img1.jpg";

const AboutUs = () => {
  return (
    <div className="mx-2 lg:mx-20 grid gap-y-16 gap-10 grid-cols-1 md:grid-cols-2 ">
      <div className=" flex gap-3  flex-col justify-center ">
        <h1 className="text-3xl text-red-600 font-semibold">About Our Treatments</h1>
        <p className="text-justify">
          Discover excellence in healthcare with our comprehensive range of
          treatments. Our dedicated team of skilled professionals employs
          cutting-edge medical practices to ensure your well-being. From
          preventive care to specialized treatments, we prioritize your health
          journey. Explore a personalized approach to healing and recovery,
          tailored to your unique needs. Trust us for compassionate and
          effective solutions that prioritize your comfort and long-term health.
          Your path to optimal wellness begins with our commitment to quality
          care and innovative treatments.
        </p>
      </div>
      <div className="flex   mb-10 w-full md:min-h-[500px] items-center md:justify-end justify-center">
        <div className=" xs:max-w-[250px] border p-2 relative h-[350px] md:me-10">
          <Image
            className="h-full w-full"
            style={{ objectFit: "cover", objectPosition: "60% 100%" }}
            width={900}
            height={900}
            src={
              "https://img.freepik.com/free-photo/doctor-talking-with-his-patient-clinic_1303-19772.jpg?t=st=1709828175~exp=1709831775~hmac=e032a8616146edd772baa51ba5d34b8604f8bec8b90b351546d2e1a14ec86bde&w=1380"
            }
            alt="aa"
          ></Image>
          <div className="max-w-[100px] rounded-lg absolute h-[100px] bottom-[-50px] right-0 xs:right-[-40px] p-0.5 border border-red-600">
            <Image
              className="h-full w-full"
              style={{
                objectFit: "cover",
                objectPosition: "60% 100%",
                borderRadius: "0.40rem",
              }}
              width={900}
              height={900}
              src={
                "https://img.freepik.com/free-photo/doctor-talking-with-his-patient-clinic_1303-19772.jpg?t=st=1709828175~exp=1709831775~hmac=e032a8616146edd772baa51ba5d34b8604f8bec8b90b351546d2e1a14ec86bde&w=1380"
              }
              alt="aa"
            ></Image>
          </div>
          <div className="max-w-[100px] rounded-lg absolute h-[100px] top-[-50px] xs:left-[-40px] p-0.5 border border-red-600">
            <Image
              className="h-full w-full"
              style={{
                objectFit: "cover",
                objectPosition: "60% 100%",
                borderRadius: "0.40rem",
              }}
              width={900}
              height={900}
              src={
                "https://img.freepik.com/free-photo/doctor-talking-with-his-patient-clinic_1303-19772.jpg?t=st=1709828175~exp=1709831775~hmac=e032a8616146edd772baa51ba5d34b8604f8bec8b90b351546d2e1a14ec86bde&w=1380"
              }
              alt="aa"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
