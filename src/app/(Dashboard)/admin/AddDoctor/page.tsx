import React from "react";
import styles from "./AddDoctor.module.css";
const page = () => {
  return (
    <div className="p-3 h-full">
      <h1 className="text-xl rounded-md  font-bold text-center mb-2 text-white bg-blue-500 p-2">
        Add New Doctor{" "}
      </h1>
      <hr />

      <form action="" className="my-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
          <div className="flex gap-3 items-center">
            <label htmlFor="" className="w-16 font-semibold text-blue-500">
              Name:
            </label>
            <input
              placeholder="Name"
              type="text"
              className="border placeholder:text-blue-400 w-full border-blue-500 p-1 rounded-md focus:outline-blue-600"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="" className="font-semibold text-blue-500 w-16">
              Email:
            </label>
            <input
              placeholder="Email"
              type="email"
              className="border w-full border-blue-500 placeholder:text-blue-400 p-1 rounded-md focus:outline-blue-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
          <div className="flex gap-3 items-center">
            <label htmlFor="" className=" w-16 font-semibold text-blue-500">
              Mobile:
            </label>
            <input
              placeholder="Mobile"
              type="number"
              className="border placeholder:text-blue-400 w-full border-blue-500 p-1 rounded-md focus:outline-blue-600"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="" className="font-semibold text-blue-500 w-16">
              Image:
            </label>
            <input
              type="file"
              className={`${styles.customFileInput} border w-full border-blue-500 p-1 rounded-md focus:outline-blue-600`}
            />
          </div>
        </div>
        <div className="flex gap-3 items-center my-5">
            <label htmlFor="" className="font-semibold text-blue-500 w-16">
              Fee:
            </label>
            <input
              type="number"
              className={`${styles.customFileInput} border w-full border-blue-500 p-1 rounded-md focus:outline-blue-600`}
            />
          </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="" className="font-semibold text-blue-500 w-16">
            Bio:
          </label>
          <textarea
            placeholder="Bio"
            rows={5}
            className="border placeholder:text-blue-400 w-full border-blue-500 p-1 rounded-md focus:outline-blue-600"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default page;
