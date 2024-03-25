import Image from "next/image";
import React from "react";

const AllDoctorPage = () => {

  const array= new Array(20).fill('')

  return (
    <div className="flex flex-wrap justify-center gap-5 my-5 mx-1">

     {array.map((arr,i)=> <div key={i} className="p-2 flex-shrink-0 w-[250px] rounded-lg min-h-[290px] bg-blue-500">
        <div className=" w-full h-[200px] ">
          <Image
            className="w-full h-full shadow-lg rounded-md object-cover"
            width={400}
            height={400}
            src={
              "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1711264952~exp=1711268552~hmac=17e28a351b3114746193549315616c65ccfed8fdfd506eca38bd4efc33e4de20&w=826"
            }
            alt=""
          ></Image>
        </div>

        <div className=" bg-white mt-2 min-h-[66px] rounded-lg text-center p-2">
          <h1 className="text-xl font-bold ">Robin Islam</h1>
          <h2 className="text-sm font-medium "><span className="text-blue-500">Cardiology</span> </h2>
        </div>
      </div>
)}

    </div>
  );
};

export default AllDoctorPage;
