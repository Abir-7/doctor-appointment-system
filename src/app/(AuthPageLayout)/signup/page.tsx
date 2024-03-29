"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import img1 from "../../asset/AuthPage/5500661.jpg";
import Image from "next/image";
import styels from "../login/login.module.css";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}

const SignupPage: React.FC = () => {
  const [err,setErr]=useState<any>('')
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
if(name=='mobile'){
  const number=value
  setFormData({
    ...formData,
    [name]: number.toString(),
  });
}
else{
  setFormData({
    ...formData,
    [name]: value,
  });
}
  };
  console.log(formData)

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErr('')
    //console.log(formData);
    // Add logic to submit the form
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status == 409) {
          setErr('Email already exist')
        }
        else if (response.status == 403) {
          setErr('Password not matched')
        }
    else  {  setErr('Failed to sign up. Try again...')}
        //throw new Error(`Failed to sign up`);
      }

      if (response.status == 200) {
        console.log('hit')
        router.push('http://localhost:3000/login')
      }

    } catch (error:any) {
      console.error("Error signing up:", error);
  
    }
  };

  return (
    <div className="mx-auto p-1 grid container md:grid-cols-2 place-items-center h-screen md:gap-10">
      <div className="max-w-[550px] order-last md:order-first place-items-center">
        <Image alt="" src={img1}></Image>
      </div>
      <div className="w-full place-items-center ">
        <h1 className="text-center text-2xl font-semibold text-blue-500">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className={styels.input}>
          {/* Input fields */}
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
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 border-blue-300 rounded-md focus:outline-blue-300"
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
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 border-blue-300 rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-lg text-blue-500 font-medium"
            >
              Email
            </label>
            <input
              placeholder="Your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 border-blue-300 rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="mobile"
              className="text-lg text-blue-500 font-medium"
            >
              Mobile
            </label>
            <input
              placeholder="Your Mobile Number"
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border p-2 border-blue-300 rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-lg text-blue-500 font-medium"
            >
              Password
            </label>
            <input
              placeholder="Your Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 border-blue-300 rounded-md focus:outline-blue-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirmPassword"
              className="text-lg text-blue-500 font-medium"
            >
              Confirm Password
            </label>
            <input
              placeholder="Confirm Your Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border p-2 border-blue-300 rounded-md focus:outline-blue-300"
              required
            />
          </div>
          {/* Link to login page */}
          {err&&  <p className=" text-red-500 text-center mt-3 text-sm">
           {err}
          </p>}
          <p className="text-center mt-3 text-sm">
            Already have an account??{" "}
            <Link
              href={"/login"}
              className="text-blue-500 hover:underline underline-offset-2"
            >
              Click here
            </Link>
          </p>
          {/* Sign Up Button */}
          <div className="w-full flex justify-center mt-3">
            <input
              className="bg-blue-500 text-white w-[250px] hover:bg-blue-600 duration-500 p-2 rounded-md"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
