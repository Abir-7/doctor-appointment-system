import VisitedDoctorList from "@/app/Component/Dashboard/Patient_Component/VisitedDoctorList";
import React from "react";

import styles from "./PatientDashboard.module.css";

const PatientDashboard = () => {
  return (
    <div className="p-3 w-full h-screen overflow-x-hidden overflow-y-auto  ">
      <div>
        <div className="grid h-full w-full gap-5 grid-cols-1 2xl:grid-cols-2">
          <div className="w-full">
            <div className="">
              <h1 className="text-xl rounded-md  font-bold text-center mb-2 text-white bg-blue-500 p-2">
                Patient Info{" "}
              </h1>
              <div className=" grid grid-cols-2 lg:grid-cols-4  p-2 px-2 min-h-[100px] border border-blue-400 rounded-md">
                <div className="flex p-2 m-2 rounded-lg bg-blue-500 flex-col justify-center items-center">
                  <h1 className="text-lg text-white font-bold w-28 text-center">
                    Age
                  </h1>
                  <p className="font-medium text-white ">28</p>
                </div>
                <div className="flex p-2 m-2 rounded-lg bg-blue-500  flex-col justify-center items-center">
                  <h1 className="text-lg text-nowrap text-white font-bold w-28 text-center">
                    Blood Group
                  </h1>
                  <p className="font-medium text-white">O+</p>
                </div>

                <div className="flex p-2 m-2 rounded-lg bg-blue-500  flex-col justify-center items-center">
                  <h1 className="text-lg w-28 text-center text-white font-bold">
                    Height
                  </h1>
                  <p className="font-medium text-white">5.9 fit</p>
                </div>
                <div className="flex p-2 m-2 rounded-lg bg-blue-500  flex-col justify-center items-center">
                  <h1 className="text-lg w-28 text-center text-white font-bold">
                    Weight
                  </h1>
                  <p className="font-medium text-white">74 Kg</p>
                </div>
              </div>
            </div>
            <div className="w-96 gap-5 p-4 justify-evenly flex flex-col sm:flex-row items-center min-h-44 border border-blue-500 rounded-md mx-auto mt-5  md:mt-16">
              <div className={`${styles.box} `}>
                <div className={`${styles.percent}`}>
                  <svg>
                    <circle cx={"70"} cy={"70"} r={"70"}></circle>
                    <circle
                      style={{
                        strokeDashoffset: "calc(440 - (440 * 70) / 100)",
                      }}
                      cx={"70"}
                      cy={"70"}
                      r={"70"}
                    ></circle>
                  </svg>
                </div>
                <div className={`${styles.info} flex flex-col items-center `}>
                  <h1 className="text-sm font-bold text-nowrap text-blue-500">
                    SUGER LEVEL
                  </h1>
                  <h1 className=" font-bold text-xl bg-blue-600 rounded-full w-11 h-11 flex justify-center items-center text-white">
                    10
                  </h1>
                </div>
              </div>
              <div className={`${styles.box} `}>
                <div className={`${styles.percent2}`}>
                  <svg>
                    <circle cx={"70"} cy={"70"} r={"70"}></circle>
                    <circle
                      style={{
                        strokeDashoffset: "calc(440 - (440 * 40) / 100)",
                      }}
                      cx={"70"}
                      cy={"70"}
                      r={"70"}
                    ></circle>
                  </svg>
                </div>
                <div className={`${styles.info} flex flex-col items-center `}>
                  <h1 className="text-sm font-bold text-nowrap text-blue-500">
                    SUGER LEVEL
                  </h1>
                  <h1 className=" font-bold text-xl bg-blue-600 rounded-full w-11 h-11 flex justify-center items-center text-white">
                    40
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-16 ">
              <h1 className="text-xl font-bold rounded-md text-center mb-2 text-white bg-blue-500 p-2">
                Visited Doctors
              </h1>
              <div className="mt-3">
                <VisitedDoctorList></VisitedDoctorList>
              </div>
            </div>
          </div>

          <div className="min-h-[40vh] max-h-[97vh] xl:max-h-[67vh] overflow-hidden grid gap-4 xl:grid-cols-2 2xl:max-h-[97vh]">
            <div className="h-full  min-h-60 overflow-hidden">
              <h1 className="text-xl rounded-md  font-bold text-center mb-2 text-white bg-blue-500 p-2">
                Upcoming Appointment{" "}
              </h1>
              <div
              
                style={{ height: "calc(100% - 52px)" }}
                className=" overflow-y-auto flex flex-col gap-5 "
              >
                <div className="bg-blue-50 p-2 rounded-md justify-evenly flex items-center gap-5">
                  <div className="w-10 bg-red-400 h-10 rounded-full "></div>
                  <div className="text-center">
                    <h1 className=" font-bold">Name</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                      Specialist
                    </h1>
                  </div>
                  <div className="text-center">
                    <h1 className=" font-bold">Time</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                      10.30 AM
                    </h1>
                  </div>
                </div>

                <div className="bg-blue-50 p-2 rounded-md justify-evenly flex items-center gap-5">
                  <div className="w-10 bg-red-400 h-10 rounded-full "></div>
                  <div className="text-center">
                    <h1 className=" font-bold">Name</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                      Specialist
                    </h1>
                  </div>
                  <div className="text-center">
                    <h1 className=" font-bold">Time</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                      10.30 AM
                    </h1>
                  </div>
                </div>

              </div>
            </div>
            <div className="h-full min-h-60 overflow-hidden">
              <h1 className="text-xl font-bold rounded-md  text-center mb-2 text-white bg-blue-500 p-2">
                Previous Appointment{" "}
              </h1>
              <div
                style={{ height: "calc(100% - 52px)" }}
                className=" overflow-y-auto flex flex-col gap-5"
              >
                <div className="bg-blue-50 p-2 rounded-md justify-evenly flex items-center gap-5">
                  <div className="w-10 bg-red-400 h-10 rounded-full "></div>
                  <div className="text-center">
                    <h1 className=" font-bold">Name</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                      Specialist
                    </h1>
                  </div>
                  <div className="text-center">
                    <h1 className=" font-bold">Time</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                      10.30 AM
                    </h1>
                  </div>
                  <div className="text-center">
                    <h1 className=" font-bold">Status</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                     Missed
                    </h1>
                  </div>
                </div>
                <div className="bg-blue-50 p-2 rounded-md justify-evenly flex items-center gap-5">
                  <div className="w-10 bg-red-400 h-10 rounded-full "></div>
                  <div className="text-center">
                    <h1 className=" font-bold">Name</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                      Specialist
                    </h1>
                  </div>
                  <div className="text-center">
                    <h1 className=" font-bold">Time</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                      10.30 AM
                    </h1>
                  </div>
                  <div className="text-center">
                    <h1 className=" font-bold">Status</h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                    Attended
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
