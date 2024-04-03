import React from 'react'
import { FaUserInjured } from 'react-icons/fa6'
import { MdOutlineAccessTime } from 'react-icons/md'

const BasicSummary = () => {
  return (
    <div className="mt-4 flex flex-wrap justify-around gap-4">
    <div className="w-[250px] flex-shrink-0  min-h-28 border border-blue-500  rounded-lg flex justify-around items-center ">
      <div className="p-3 border-2 border-blue-500 bg-blue-50 rounded-full">
        <FaUserInjured className="text-4xl text-blue-500" />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-sm">Total Patients</h1>
        <p className="font-semibold text-2xl">4000+</p>
      </div>
    </div>

    <div className="w-[250px] flex-shrink-0   min-h-28 border border-blue-500  rounded-lg flex justify-around items-center ">
      <div className="p-3 border-2 border-blue-500 bg-blue-50 rounded-full">
        <FaUserInjured className="text-4xl text-blue-500" />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-sm">Today Patients</h1>
        <p className="font-semibold text-2xl">4000+</p>
      </div>
    </div>

    <div className="w-[250px] flex-shrink-0  min-h-28 border border-blue-500  rounded-lg flex justify-around items-center ">
      <div className="p-3 border-2 border-blue-500 bg-blue-50 rounded-full">
        <MdOutlineAccessTime className="text-4xl text-blue-500" />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-sm">Today Appointment</h1>
        <p className="font-semibold text-2xl">4000+</p>
      </div>
    </div>
  </div>
  )
}

export default BasicSummary