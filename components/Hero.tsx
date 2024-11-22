import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"


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
        
        <Button className='lg:w-[178px] md:w-[160px] h-[48px]  md:py-[12px] md:px-[24px] lg:text-[16px] md:text-[13px] rounded-lg ' variant="default">Start learning now</Button>
                    </Link>
        <Link href={"#courses"}>
        <Drawer>
  <DrawerTrigger className='lg:w-[178px] md:w-[160px] h-[48px] p-3 md:py-[12px] md:px-[24px] border-[#000000] rounded-lg  text-[#000000] border-[1px] lg:text-[16px] md:text-[13px]  '>Explore Courses</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Search Courses </DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <Input className='border-2 w-[97%] ml-4 border-black' />

    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

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
