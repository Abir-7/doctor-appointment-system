import Image from "next/image";
import React from "react";

const doctorList = () => {
  const data = [
    {
      name: "Md.Tazwarul Islam Abir",
      email: "sdasd@gmail.com",
      specialist: "Cardiologist",
      mobile: "123-456-7890",
      visitFee: "$150",
    },
    {
      name: "Md.Tazwarul Islam Abir",
      email: "sdasd@gmail.com",
      specialist: "Cardiologist",
      mobile: "123-456-7890",
      visitFee: "$150",
    },
    {
      name: "Md.Tazwarul Islam Abir",
      email: "sdasd@gmail.com",
      specialist: "Cardiologist",
      mobile: "123-456-7890",
      visitFee: "$150",
    },
  ];

  return (
    <div className="p-3 h-full">
      <h1 className="text-xl rounded-md  font-bold text-center mb-2 text-white bg-blue-500 p-2">
        All Doctors{" "}
      </h1>
      <hr />

      <div className="w-full overflow-x-auto">
        <table className="table-fixed  w-full border-collapse border text-center text-nowrap">
          <thead>
            <tr className=" border h-10 text-blue-500">
              <th className="border border-blue-500 px-2">Doctor</th>
              <th className="border border-blue-500 px-2">Email</th>
              <th className="border border-blue-500 px-2">Specialist</th>
              <th className="border border-blue-500 px-2">Mobile</th>
              <th className="border border-blue-500 px-2">Visit Fee</th>
              <th className="border border-blue-500 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index}>
                <td className="border px-2 flex justify-center items-center p-2">
                  <div className="flex gap-4 items-center w-96">
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
                <td className="border px-2">{person.email}</td>
                <td className="border px-2">{person.specialist}</td>
                <td className="border px-2">{person.mobile}</td>
                <td className="border px-2 font-bold">{person.visitFee}</td>
                <td className="border px-2 font-bold "><button className="py-1 px-2 bg-blue-500 text-white rounded-md mx-2">Update</button><button  className="mx-2 py-1 px-2 bg-red-500 text-white rounded-md">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default doctorList;
