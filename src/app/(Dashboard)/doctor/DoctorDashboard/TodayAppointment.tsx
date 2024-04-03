import React from 'react'

const TodayAppointment = () => {
  return (
    <div className=" h-96 bg-blue-50 p-2">
    <h1 className="m-2 font-semibold text-blue-500">Today Appoinment</h1>
    <div
      style={{ height: "calc(100% - 40px)" }}
      className=" overflow-y-auto"
    >
      {/* dATA */}
      <div className=" mb-3 bg-white p-2 rounded-md  flex justify-around items-center gap-5">
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
  )
}

export default TodayAppointment