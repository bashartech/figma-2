import React from "react";
import Image from "next/image"

export default function Section4() {
  return (
    <div>
      <div className="sec1 md:h-[1742px] h-[2135px]" id="courses">
        <div className="heading h-[350px] flex flex-col justify-center items-center">
          <h1 className="mb-6 md:text-[32px] text-[32px] font-bold">Courses</h1>
          <p className="text-[18px]">Your Ultimate Guide to learning</p>
          <div className="sec2 flex gap-5 mt-16">
            <span className="border-b-[1px] p-2 pb-8 border-black h-[24px] ">
              Popular
            </span>
            <span className=" h-[24px] p-2 ">Recommended</span>
            <span className=" h-[24px] p-2 ">Best Price</span>
          </div>
        </div>
        <div className="lg:h-[1340px]  h-[1785px] md:h-[1200px] md:w-full justify-center items-center md:flex flex-col gap-[64px] "
        >
        <div className="box lg:m-0 m-5  lg:p-0 md:p-5  lg:h-[1150px] h-[1785px] md:h-[1200px]  md:w-full   md:grid gap-5 lg:grid-cols-3 md:grid-cols-2   ">

<div className="box1  md:p-0 p-2  bg-[#F7F7F7] lg:w-[416px] w-[380px] md:w-[340px] md:h-[524px] h-[534px]">
<Image className=' object-fit w-[416px] h-[300px] ' src={"images/Image1.svg"} width={416} height={300} alt=''></Image>
<div>
    <div className="flex gap-[14px] h-[210px] mt-[24px] flex-col ">
    <div className="  flex justify-between">
    <h1 className="text-[14px] font-semibold">Design</h1>
    <Image className='object-fit ' src={"images/Star.svg"} width={48} height={24} alt=''></Image>
        </div>
    <h1 className="text-[24px] font-bold">UX/UI Design 201</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className="btn w-[382px] h-[40px]">
        <button className="w-[117px] h-[40px] border-[1px] rounded-lg border-black">Enroll Now</button>
        <button className="w-[117px] h-[40px] font-bold">$400</button>
    </div>
    </div>
</div>
</div>
<div className="box1 md:p-0 p-2 md:mt-0 mt-5 bg-[#F7F7F7] lg:w-[416px] w-[380px] h-[534px] md:w-[340px] md:h-[524px] ">
<Image className='object-fit w-[416px] h-[300px] ' src={"images/Image17.svg"} width={416} height={300} alt=''></Image>
<div>
    <div className="flex gap-[14px] h-[210px] mt-[24px] flex-col ">
    <div className="  flex justify-between">
    <h1 className="text-[14px] font-semibold">Programmimg</h1>
    <Image className='object-fit ' src={"images/Star.svg"} width={48} height={24} alt=''></Image>
        </div>
    <h1 className="text-[24px] font-bold">Introduction to Python</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className="btn w-[382px] h-[40px]">
        <button className="w-[117px] h-[40px] border-[1px] rounded-lg border-black">Enroll Now</button>
        <button className="w-[117px] h-[40px] font-bold">$400</button>
    </div>
    </div>
</div>
</div>
<div className="box1 md:p-0 p-2 md:mt-0 mt-5 bg-[#F7F7F7] lg:w-[416px] w-[380px] h-[534px] md:w-[340px] md:h-[524px] ">
<Image className='object-fit w-[416px] h-[300px] ' src={"images/Image15.svg"} width={416} height={300} alt=''></Image>
<div>
    <div className="flex gap-[14px] h-[210px] mt-[24px] flex-col ">
    <div className="  flex justify-between">
    <h1 className="text-[14px] font-semibold">Business</h1>
    <Image className='object-fit ' src={"images/Star.svg"} width={48} height={24} alt=''></Image>
        </div>
    <h1 className="text-[24px] font-bold">Data Analysis for Beginners</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className="btn w-[382px] h-[40px]">
        <button className="w-[117px] h-[40px] border-[1px] rounded-lg border-black">Enroll Now</button>
        <button className="w-[117px] h-[40px] font-bold">$400</button>
    </div>
    </div>
</div>
</div>
<div className="box1 hidden md:flex flex-col bg-[#F7F7F7] lg:w-[416px] w-[380px] h-[534px] md:w-[340px] md:h-[524px] ">
<Image className='object-fit w-[416px] h-[300px] ' src={"images/Image14.svg"} width={416} height={300} alt=''></Image>
<div>
    <div className="flex gap-[14px] h-[210px] mt-[24px] flex-col ">
    <div className="  flex justify-between">
    <h1 className="text-[14px] font-semibold">Art</h1>
    <Image className='object-fit ' src={"images/Star.svg"} width={48} height={24} alt=''></Image>
        </div>
    <h1 className="text-[24px] font-bold">Art Specialization</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className="btn w-[382px] h-[40px]">
        <button className="w-[117px] h-[40px] border-[1px] rounded-lg border-black">Enroll Now</button>
        <button className="w-[117px] h-[40px] font-bold">$400</button>
    </div>
    </div>
</div>
</div>
<div className="box1 md:hidden hidden lg:flex flex-col bg-[#F7F7F7] w-[416px] h-[534px]">
<Image className='object-fit w-[416px] h-[300px] ' src={"images/Image13.svg"} width={416} height={300} alt=''></Image>
<div>
    <div className="flex gap-[14px] h-[210px] mt-[24px] flex-col ">
    <div className="  flex justify-between">
    <h1 className="text-[14px] font-semibold">Law</h1>
    <Image className='object-fit ' src={"images/Star.svg"} width={48} height={24} alt=''></Image>
        </div>
    <h1 className="text-[24px] font-bold">Rule of Law</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className="btn w-[382px] h-[40px]">
        <button className="w-[117px] h-[40px] border-[1px] rounded-lg border-black">Enroll Now</button>
        <button className="w-[117px] h-[40px] font-bold">$400</button>
    </div>
    </div>
</div>
</div>
<div className="box1 md:hidden hidden lg:flex flex-col bg-[#F7F7F7] w-[416px] h-[534px]">
<Image className='object-fit w-[416px] h-[300px] ' src={"images/Image16.svg"} width={416} height={300} alt=''></Image>
<div>
    <div className="flex gap-[14px] h-[210px] mt-[24px] flex-col ">
    <div className="  flex justify-between">
    <h1 className="text-[14px] font-semibold">Tech</h1>
    <Image className='object-fit ' src={"images/Star.svg"} width={48} height={24} alt=''></Image>
        </div>
    <h1 className="text-[24px] font-bold">Introduction to webflow</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <div className="btn w-[382px] h-[40px]">
        <button className="w-[117px] h-[40px] border-[1px] rounded-lg border-black">Enroll Now</button>
        <button className="w-[117px] h-[40px] font-bold">$400</button>
    </div>
    </div>
</div>
</div>

<div className="btn md:hidden hidden mt-[80px]  justify-center items-center">
    <button className='w-[152px] h-[40px] px-[12px] border-[#000000] border-[1px] rounded-md  '>View All Courses</button>
</div>

        </div>

        <div className="btn md:flex hidden  justify-center items-center">
    <button className='w-[152px] h-[40px] px-[12px] border-[#000000] border-[1px] rounded-md  '>View All Courses</button>
</div>

        </div>
      </div>
    </div>
  );
}
