import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div>
      <div className="hero md:h-[800px] overflow-hidden" id='home'>
<div className='md:flex w-screen'>
    <div className="left md:w-1/2 md:h-[800px] h-[390px]   lg:ml-20 ml-4 md:gap-6 gap-2 flex flex-col justify-center">
    
        <h1 className='text-[40px] md:text-[50px]  lg:text-[56px] lg:w-[580px] font-bold pr-10  '>Learn new skills online with ease</h1>
        <p className='text-[18px] lg:w-[580px]  md:pr-20 md:mt-0 mt-3 '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        <div className="btn mt-10 flex gap-4">
        <Link href={"#courses"}>
        <button  className='lg:w-[178px] md:w-[160px] h-[48px] py-[12px] px-[24px] bg-[#000000] text-[#FFFFFF] rounded-lg lg:text-[16px] md:text-[13px] ' >Start learning now</button>
                    </Link>
        <Link href={"#courses"}>
        <button className='lg:w-[178px] md:w-[160px] h-[48px] py-[12px] px-[24px] border-[#000000] rounded-lg  text-[#000000] border-[1px] lg:text-[16px] md:text-[13px]  ' >Explore Courses</button>
                    </Link>
            
        </div>
    </div>
    <div className="right md:w-1/2 md:h-[800px] h-[390px] ">
    
    <Image className='md:object-fit object-cover object-top w-full h-[390px]  md:w-[720px] md:h-full' src={"images/Image.svg"} width={720} height={900} alt=''></Image>
    </div>
</div>
      </div>
    </div>
  )
}
