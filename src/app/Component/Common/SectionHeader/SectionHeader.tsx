'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './SectionHeader.module.css'

interface Props{
    headerText:string
}

const SectionHeader = ({headerText}:Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<any>()

  useEffect(() => {
    const handleScroll = () => {
        if (elementRef.current) {
            const elementTop = elementRef.current.getBoundingClientRect().top
            const windowHeight = window.innerHeight;
            setIsVisible(elementTop < windowHeight);
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [])

  console.log(isVisible)
  return (
    <div ref={elementRef} className=' text-2xl sm:text-3xl  text-blue-500 font-semibold text-center'><h1 className={`${isVisible ? styles.sectionHeaderBorder:''}  border-4 px-5 rounded-3xl inline-block  border-r-0 border-l-0 border-t-0 border-b-blue-500 `}>{headerText}</h1></div>
  )
}

export default SectionHeader