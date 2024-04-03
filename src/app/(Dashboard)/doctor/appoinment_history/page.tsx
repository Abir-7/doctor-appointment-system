import React from 'react'
import Image from "next/image";
const AppointmentHistory = () => {
    const data = [
        { name: 'Md.Tazwarul Islam Abir', specialist: 'Cardiologist', mobile: '123-456-7890', visitFee: '$150' },
        { name: 'Jane', specialist: 'Dermatologist', mobile: '234-567-8901', visitFee: '$120' },
        { name: 'Doe', specialist: 'Pediatrician', mobile: '345-678-9012', visitFee: '$100' }
      ];
  return (
    <div className="p-3 h-full">
   <h1 className="text-xl rounded-md  font-bold text-center mb-2 text-white bg-blue-500 p-2">
               Payment Info{" "}
              </h1>
      <hr />



     <div className="w-full overflow-x-auto">
     <table className="table-fixed  w-full border-collapse border text-center text-nowrap">
        <thead>
          <tr className=" border h-10 text-blue-500">
            <th className="border border-blue-500 px-2">Name</th>
            <th className="border border-blue-500 px-2">Prescription</th>
            <th className="border border-blue-500 px-2">Mobile</th>
            <th className="border border-blue-500 px-2">Visit Fee</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
          
              <td className="border px-2 flex justify-center items-center p-2">
                <div className="flex gap-4 items-center w-96" >
                <div className="w-10 rounded-full overflow-hidden h-10 bg-red-300 object-cover  ">
                <Image
                  width={150}
                  height={150}
                  className=" w-full h-full"
                  style={{ objectFit: "cover" }}
                  src={
                    "https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?t=st=1711908152~exp=1711911752~hmac=6823f8e5ae7e1837c1645abea66c26f3bc370281a2adbe632db64ee1e72a103b&w=1380"
                  }
                  alt=""
                ></Image>
              </div>
                
                {person.name}
                </div>
       </td>
              <td className="border px-2">{person.specialist}</td>
              <td className="border px-2">{person.mobile}</td>
              <td className="border px-2 font-bold">{person.visitFee}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  )
}

export default AppointmentHistory