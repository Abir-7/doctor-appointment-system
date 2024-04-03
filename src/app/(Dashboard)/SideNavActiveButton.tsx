'use client'
import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

interface Props{
    activeSideNave:()=>void;
}

const SideNavActiveButton = ({activeSideNave}:Props) => {
  return (
    <div onClick={activeSideNave} className='text-white'><FaRegArrowAltCircleRight /></div>
  )
}

export default SideNavActiveButton