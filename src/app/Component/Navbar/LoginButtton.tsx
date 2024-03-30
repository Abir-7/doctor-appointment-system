'use client'

import { signOut} from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


interface Props{
  userLoading:boolean,
  isVerified:boolean
}

const LoginButtton = ({userLoading,isVerified}:Props) => {




  if(userLoading==true){
    return <p  className=" text-blue-500 bg-white w-full py-2 px-4 rounded-lg  active:scale-[.9] duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md mt-1 md:mt-0 ">Loading...</p>
  }
  return (
   <>{
    isVerified==true? <div onClick={()=>signOut()} className='w-10 rounded-full bg-red-500  h-10'>

    </div> :<Link
    href={'/api/auth/signin'}
    onClick={() => {
     // navAction();
    }}
    className=" text-blue-500 bg-white w-full py-2 px-4 rounded-lg  active:scale-[.9] duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md mt-1 md:mt-0 "
  >
    Login
  </Link>
   }
   </>
  )
}

export default LoginButtton