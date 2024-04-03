import React from 'react'

const NextPatient = () => {
  return (
    <div className=" min-h-96 bg-blue-50 p-2 ">
          <h1 className="m-2 font-semibold text-blue-500">Next Patient</h1>
          <div className=" gap-2 bg-white p-5 rounded-md  flex flex-col justify-between">
          <div className="w-16 bg-red-400 h-16 rounded-full mx-auto"></div>
            <div className="flex justify-between flex-wrap gap-2">
             
              <div className="">
                <h1 className=" font-semibold text-sm">Name</h1>
                <h1 className="text-sm  text-blue-500">
                  Md.Tazwarul Islam Abir
                </h1>
              </div>
              <div className="">
                <h1 className=" font-semibold text-sm">Patient Id</h1>
                <h1 className="text-sm font-semibold text-blue-500">
                  12ca12123caz
                </h1>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <div className="">
                <h1 className=" font-semibold text-sm">Weight</h1>
                <h1 className="text-sm font-semibold text-blue-500">74 kg</h1>
              </div>
              <div className="">
                <h1 className=" font-semibold text-sm">Sex</h1>
                <h1 className="text-sm font-semibold text-blue-500">Male</h1>
              </div>
              <div className="">
                <h1 className=" font-semibold text-sm">Time</h1>
                <h1 className="text-sm font-semibold text-blue-500">
                  10.30 AM
                </h1>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <div className="">
                <h1 className=" font-semibold text-sm">Last Appointment</h1>
                <h1 className="text-sm font-semibold text-blue-500">11/2/25</h1>
              </div>
              <div className="">
                <h1 className=" font-semibold text-sm">Last Pescription</h1>
                <h1 className="text-sm font-semibold text-blue-500">file</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <h1 className=" font-semibold text-sm">Action</h1>
                <h1 className="text-sm font-semibold text-blue-500">file</h1>
              </div>
              <div className="">
                <h1 className=" font-semibold text-sm">Mobile</h1>
                <h1 className="text-sm font-semibold text-blue-500">01795377643</h1>
              </div>
            </div>
          </div>
        </div>
  )
}

export default NextPatient