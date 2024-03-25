import Link from 'next/link'
import React, { ReactNode } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
interface Props{
    icon:ReactNode,
    title:string,
    des:string,
}

const ServiceCard = ({icon,title,des}:Props) => {
  return (
    <div className="flex shadow-lg rounded-lg p-5 flex-col gap-5">
    <div className=" text-blue-500 rounded-lg text-4xl w-[80px] h-[80px] flex justify-center items-center bg-blue-100">
    {icon}
    </div>

    <h1 className="text-2xl font-semibold">{title}</h1>
    <p className="text-lg">
{des}
    </p>
    <Link href={"#"} className="flex gap-2 hover:gap-3 duration-300 hover:underline hover:underline-offset-2 text-blue-500 items-center">
      Read More <FaArrowRightLong />{" "}
    </Link>
  </div>
  )
}

export default ServiceCard