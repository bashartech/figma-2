import React from 'react'
import Image from "next/image"

export default function Section2() {
  return (
    <div className='w-screen' id='services'>
      <div className="sec1 h-[962px]">
        <div className="heading md:h-[313px] h-[250px] flex flex-col justify-center items-center">
        <h1 className='md:text-[48px] text-[32px] font-bold text-center'>Explore Courses By Category</h1>
        <p className=' md:ml-20 m-6 text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>

        <div className="sec h-[636px] lg:p-0 p-5 md:p-4  grid md:grid-cols-2 lg:grid-cols-3">
            <div className="box1 p-4 flex w-[410px] lg:w-[410px] md:w-[350px]  justify-center items-center gap-5 bg-[#F7F7F7] h-[132px] ">
                <div className='flex justify-center items-center text-xl  w-[100px] h-[100px] bg-[#FFFFFF] '>
           
            <Image className='object-fit ' src={"images/pen-tool-2.svg"} width={32} height={32} alt=''></Image>
                </div>
                <div className="text w-[310px] h-[100px] flex flex-col justify-center
               ">
                    <h1 className='text-[20px] font-bold '>Design & Development</h1>
                    <p className='text-[18px]'>50+ Courses Available</p>
                </div>
            </div>
            <div className="box1 lg:w-[410px] md:w-[350px] p-4 flex w-[410px]  justify-center items-center gap-5 bg-[#F7F7F7] h-[132px] ">
                <div className='flex justify-center items-center text-3xl  w-[100px] h-[100px] bg-[#FFFFFF] '>
                <Image className='object-fit ' src={"images/volume-high.svg"} width={32} height={32} alt=''></Image>
                </div>
                <div className="text w-[310px] h-[100px] flex flex-col justify-center
               ">
                    <h1 className='text-[20px] font-bold '>Marketing</h1>
                    <p className='text-[18px]'>50+ Courses Available</p>
                </div>
            </div>
            <div className="box1  lg:w-[410px] md:w-[350px] p-4 flex w-[410px]  justify-center items-center gap-5 bg-[#F7F7F7] h-[132px] ">
                <div className='flex justify-center items-center text-xl  w-[100px] h-[100px] bg-[#FFFFFF] '>
                <Image className='object-fit ' src={"images/group.svg"} width={32} height={32} alt=''></Image>
                </div>
                <div className="text w-[310px] h-[100px] flex flex-col justify-center
               ">
                    <h1 className='text-[20px] font-bold '>Development</h1>
                    <p className='text-[18px]'>50+ Courses Available</p>
                </div>
            </div>

            <div className="box1 lg:w-[410px] md:w-[350px] p-4 hidden md:flex w-[410px]  justify-center items-center gap-5 bg-[#F7F7F7] h-[132px] ">
                <div className='flex justify-center items-center text-xl  w-[100px] h-[100px] bg-[#FFFFFF] '>
                <Image className='object-fit ' src={"images/microphone.svg"} width={32} height={32} alt=''></Image>
                </div>
                <div className="text w-[310px] h-[100px] flex flex-col justify-center
               ">
                    <h1 className='text-[20px] font-bold '>Communication</h1>
                    <p className='text-[18px]'>50+ Courses Available</p>
                </div>
            </div>
            <div className="box1 lg:w-[410px] md:w-[350px] p-4 hidden md:flex w-[410px]  justify-center items-center gap-5 bg-[#F7F7F7] h-[132px] ">
                <div className='flex justify-center items-center text-xl  w-[100px] h-[100px] bg-[#FFFFFF] '>
                <Image className='object-fit ' src={"images/link.svg"} width={32} height={32} alt=''></Image>
                </div>
                <div className="text w-[310px] h-[100px] flex flex-col justify-center
               ">
                    <h1 className='text-[20px] font-bold '>Digital Marketing</h1>
                    <p className='text-[18px]'>50+ Courses Available</p>
                </div>
            </div>
            <div className="box1 lg:w-[410px] md:w-[350px] p-4 hidden md:flex w-[410px]  justify-center items-center gap-5 bg-[#F7F7F7] h-[132px] ">
                <div className='flex justify-center items-center text-xl  w-[100px] h-[100px] bg-[#FFFFFF] '>
                <Image className='object-fit ' src={"images/arrow-2.svg"} width={32} height={32} alt=''></Image>
                </div>
                <div className="text w-[310px] h-[100px] flex flex-col justify-center
               ">
                    <h1 className='text-[20px] font-bold '>Self Development</h1>
                    <p className='text-[18px]'>50+ Courses Available</p>
                </div>
            </div>
            <div className="box1 lg:w-[410px] md:w-[350px] p-4 hidden md:flex w-[410px]  justify-center items-center gap-5 bg-[#F7F7F7] h-[132px] ">
                <div className='flex justify-center items-center text-xl  w-[100px] h-[100px] bg-[#FFFFFF] '>
                <Image className='object-fit ' src={"images/briefcase.svg"} width={32} height={32} alt=''></Image>
                </div>
                <div className="text w-[310px] h-[100px] flex flex-col justify-center
               ">
                    <h1 className='text-[20px] font-bold '>Business</h1>
                    <p className='text-[18px]'>50+ Courses Available</p>
                </div>
            </div>
            <div className="box1 lg:w-[410px] md:w-[350px] p-4 hidden md:flex w-[410px]  justify-center items-center gap-5 bg-[#F7F7F7] h-[132px] ">
                <div className='flex justify-center items-center text-xl  w-[100px] h-[100px] bg-[#FFFFFF] '>
                <Image className='object-fit ' src={"images/vector.svg"} width={32} height={32} alt=''></Image>
                </div>
                <div className="text w-[310px] h-[100px] flex flex-col justify-center
               ">
                    <h1 className='text-[20px] font-bold '>Finance</h1>
                    <p className='text-[18px]'>50+ Courses Available</p>
                </div>
            </div>
            <div className="box1 lg:w-[410px] md:w-[370px] p-4 hidden lg:flex w-[410px]  justify-center items-center gap-5 bg-[#F7F7F7] h-[132px] ">
                <div className='flex justify-center items-center text-xl  w-[100px] h-[100px] bg-[#FFFFFF] '>
                <Image className='object-fit ' src={"images/book.svg"} width={32} height={32} alt=''></Image>
                </div>
                <div className="text w-[310px] h-[100px] flex flex-col justify-center
               ">
                    <h1 className='text-[20px] font-bold '>Consulting</h1>
                    <p className='text-[18px]'>50+ Courses Available</p>
                </div>
            </div>
           

        </div>
<div className="btn flex justify-center items-center">
    <button className='w-[155px] h-[48px] px-[12px] border-[#000000] border-[1px] rounded-lg py-[12px] '>View All Courses</button>
</div>
      </div>
    </div>
  )
}
