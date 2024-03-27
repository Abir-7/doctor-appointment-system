import React from "react";
import img1 from "../../asset/AuthPage/5500661.jpg";
import Image from "next/image";
import styels from "../login/login.module.css";
const SignupPage = () => {
  return (
    <div className="mx-auto p-1 grid container   md:grid-cols-2 place-items-center h-screen   md:gap-10">
      <div className="max-w-[550px] order-last md:order-first place-items-center">
        <Image alt="" src={img1}></Image>
      </div>
      <div className="w-full place-items-center ">
        <h1 className="text-center text-2xl font-semibold text-blue-500">
          Sign Up
        </h1>
        <form action="" className={styels.input}>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="firstName"
              className="text-lg text-blue-500 font-medium"
            >
              First Name
            </label>
            <input
              placeholder="Your First Name"
              type="text"
              className="border p-2 border-blue-300  rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="lastName"
              className="text-lg text-blue-500 font-medium"
            >
              Last Name
            </label>
            <input
              placeholder="Your Last Name"
              type="text"
              className="border p-2 border-blue-300  rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-lg text-blue-500 font-medium"
            >
              Email:
            </label>
            <input
              placeholder="Your Email"
              type="email"
              className="border p-2 border-blue-300  rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="mobile"
              className="text-lg text-blue-500 font-medium"
            >
              Mobile:
            </label>
            <input
              placeholder="Your Mobile Number"
              type="number"
              className="border p-2 border-blue-300  rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <label
              htmlFor="password"
              className="text-blue-500 text-lg font-medium"
            >
              Password:
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="border border-blue-300 p-2 rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <label
              htmlFor="confirmPassword"
              className="text-blue-500 text-lg font-medium"
            >
             Confirm Password:
            </label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="border border-blue-300 p-2 rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="w-full flex justify-center mt-4">
            <input
              className="bg-blue-500 text-white  w-[250px] p-2 rounded-md focus:outline-blue-300 "
              type="submit"
              value={"Login"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
