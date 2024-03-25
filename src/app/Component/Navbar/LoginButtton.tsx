import React from 'react'

const LoginButtton = () => {
  return (
    <button
    onClick={() => {
     // navAction();
    }}
    className=" text-blue-500 bg-white w-full py-2 px-4 rounded-lg  active:scale-[.9] duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md mt-1 md:mt-0 "
  >
    Login
  </button>
  )
}

export default LoginButtton