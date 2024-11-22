"use client"
import Link from "next/link"
import React,{useState} from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
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

                <Dialog>
  <DialogTrigger className='rounded-lg px-[20px] w-[80px] h-[40px]  py-[8px] border-[1px] border-[#000000]'>Login</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        You are successfully login to this website and know you can communicate with our team and get courses
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

                    
                <Button className="w-[95px] h-[40px] rounded-lg px-[17px] py-[8px] border-2" variant="default">Sign Up</Button>
                </div>
            </div>
            <div className='md:hidden w-[48px] h-[48px] flex justify-center items-center' onClick={handleToggle}>
            <Sheet>
  <SheetTrigger>
  <i className='bx bx-menu text-3xl'></i>
    </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Slidebar Menu</SheetTitle>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
    <div className=' w-full h-full'>
    <ul className=' pl-2  mt-10 text-[24px] gap-[32px] w-[603px]  font-robot bg-[#FFFFFF] rounded-lg '>

                    <Link href={"/"}>
                    <li className='mb-7' onClick={closeMenu}>Home</li>
                    </Link>
                    <Link href={"#courses"}>
                    <li onClick={closeMenu} className='mb-7'>Courses</li>
                    </Link>
                    <Link href={"#services"}>
                    <li onClick={closeMenu} className='mb-7'>Services</li>
                    </Link>
                    <Link href={"#achievements"}>
                    <li onClick={closeMenu} className='mb-7'>Achievement</li>
                    </Link>
                    <Link href={"#about"}>
                    <li onClick={closeMenu} className='mb-7'>About Us</li>
                    </Link>
                    <Link href={"#testimonials"}>
                    <li onClick={closeMenu}>Testimonial</li>
                    </Link>
                </ul>
                <div className="btn mt-10 flex gap-4">
        <Link href={"#courses"}>
        
        <Button className='lg:w-[178px] md:w-[160px] h-[48px]  md:py-[12px] md:px-[24px] lg:text-[16px] md:text-[13px] rounded-lg ' variant="default">Start learning now</Button>
                    </Link>
        <Link href={"#courses"}>
        <Drawer>
  <DrawerTrigger className='lg:w-[178px] md:w-[160px] w-[120px] font-bold h-[48px] p-3 md:py-[12px] md:px-[24px] border-[#000000] rounded-lg  text-[#000000] border-[1px] lg:text-[16px] md:text-[13px]  '>Courses</DrawerTrigger>
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
  </SheetContent>
</Sheet>

            
            </div>
        </div>
        </div>
      </header>
    </div>
     
    </>
  )
}
