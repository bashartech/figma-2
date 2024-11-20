"use client"
import Link from "next/link"
import React,{useState} from 'react'
import Image from "next/image"
export default function Header2() {

    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
setIsOpen(!isOpen)
    }
    const closeMenu = () => {
        setIsOpen(false)
    }

  return (
    <>
    <div className='md:w-screen w-screen bg-[#F7F7F7]' >
      <header className='h-[72px]  flex justify-center items-center '>
        <div className='lg:w-[1154px] md:w-[768px] w-[380px]'>
        <div className='flex justify-between  '>
            <div className="logo flex justify-center items-center">
<Image src={"images/logo.svg"} width={130.6} height={41} alt=''></Image>
            </div>
            <div className="nav hidden md:flex gap-[32px] ">
                <ul className='flex text-[16px] gap-[32px] w-[603px]  items-center justify-center  bg-[#FFFFFF] rounded-lg '>
                    <Link href={"/"}>
                    <li className='border-b-[1px] border-[#000000]'>Home</li>
                    </Link>
                    <Link href={"#courses"}>
                    <li>Courses</li>
                    </Link>
                    <Link href={"#services"}>
                    <li>Services</li>
                    </Link>
                    <Link href={"#achievements"}>
                    <li>Achievement</li>
                    </Link>
                    <Link href={"#about"}>
                    <li>About Us</li>
                    </Link>
                    <Link href={"#testimonials"}>
                    <li>Testimonial</li>
                    </Link>
                </ul>
                <div className="btn hidden lg:flex gap-[10px] w-[191px]  items-center ">
                    <button className='rounded-lg px-[20px] w-[80px] h-[40px]  py-[8px] border-[1px] border-[#000000]'>Login</button>
                    <button className=' w-[95px] h-[40px] rounded-lg px-[17px] py-[8px] border-2 bg-[#000000] text-[#FFFFFF]'>Sign Up </button>
                </div>
            </div>
            <div className='md:hidden w-[48px] h-[48px] flex justify-center items-center' onClick={handleToggle}>
            <i className='bx bx-menu text-3xl'></i>
            </div>
        </div>
        </div>
      </header>
    </div>
     
    <div className={`bar  md:hidden w-full ${isOpen ? "h-[320px] opacity-100" : "h-0 opacity-0" } `} >
        <div className=' w-full h-full'>
    <ul className=' pl-5 mt-5 text-[24px] gap-[32px] w-[603px]    bg-[#FFFFFF] rounded-lg '>

                    <Link href={"/"}>
                    <li className='mb-4' onClick={closeMenu}>Home</li>
                    </Link>
                    <Link href={"#courses"}>
                    <li onClick={closeMenu} className='mb-4'>Courses</li>
                    </Link>
                    <Link href={"#services"}>
                    <li onClick={closeMenu} className='mb-4'>Services</li>
                    </Link>
                    <Link href={"#achievements"}>
                    <li onClick={closeMenu} className='mb-4'>Achievement</li>
                    </Link>
                    <Link href={"#about"}>
                    <li onClick={closeMenu} className='mb-4'>About Us</li>
                    </Link>
                    <Link href={"#testimonials"}>
                    <li onClick={closeMenu}>Testimonial</li>
                    </Link>
                </ul>
        </div>
    </div>

    </>
  )
}
