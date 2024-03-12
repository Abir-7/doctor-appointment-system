import Image from 'next/image'
import React from 'react'

const SingleTableData = ({day,time}:{day:string,time:string}) => {
  return (
    <div>
    <div className="flex justify-center mb-2">
        <Image className="border p-0.5 border-red-500"
          style={{
            objectFit: "cover",
            objectPosition: "100% 100%",
            borderRadius: "50%",
          }}
        alt="" height={50} width={50} src={'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1709875096~exp=1709878696~hmac=e2e3392e8110535d4df0ced8111b250f23e6110a40536e17cf53a82d2bda0d3f&w=826'} ></Image>
    </div>
    <div className="flex flex-col items-center mb-2">
        <h1 className="font-semibold">Md. Tazwarul Islam Abir</h1>
        <h1 className="text-sm">Cardiology</h1>
    </div>
   <div className="flex justify-center">
   <p className="mx-2 w-auto text-sm border   px-3 border-red-600 rounded-3xl">
      9.00 am - 12.00 pm
    </p>
   </div>
  </div>
  )
}

export default SingleTableData