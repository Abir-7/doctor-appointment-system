"use client";
import { useEffect, useState } from "react";
import Banner from "./Component/HomePage/Banner/Banner";
import SectionHeader from "./Component/SectionHeader/SectionHeader";
import OurServices from "./Component/HomePage/OurServices/OurServices";
import AboutUs from "./Component/HomePage/AboutUs/AboutUs";
import DoctorTimeTable from "./Component/HomePage/DoctorTimeTable/DoctorTimeTable";
import Testimonials from "./Component/Testimonials/Testimonials";


export default function Page() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <div className="sm:mt-[-10px] mb-2">
        <SectionHeader headerText="Our Services"></SectionHeader>
      </div>
      <div className="container mx-auto my-10">
        <OurServices></OurServices>
      </div>
      <div className="container mx-auto my-10">
        <AboutUs></AboutUs>
      </div>
      <div className="sm:mt-[-10px]">
        <SectionHeader headerText="Doctors Time Table"></SectionHeader>
      </div>
      <div className="mx-0.5 my-10">
        <DoctorTimeTable />
      </div>
      <div className="mx-0.5 my-10">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}
