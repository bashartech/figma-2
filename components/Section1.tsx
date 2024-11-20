import React from 'react'
import Image from "next/image"

export default function Section1() {
  return (
    <div className='w-screen' id='sec1'>
      <div className="sec1 bg-[#F7F7F7]   h-[228px] w-screen md:flex justify-around items-center">
        <div className="left md:p-0 px-5 flex justify-center items-center w-[428px] md:w-[320px] md:h-[68px] h-[120px]">
            <h1 className='text-[20px] lg:pl-0 pl-3 lg:text-[24px] md:flex hidden font-bold'>Trusted by 2000+ companies  worldwide.</h1>
            <h1 className='ml-5 text-[18px] md:hidden font-bold'>Trusted by the world's best companies [social proof to build credibility]</h1>
        </div>
<div className="right overflow-hidden flex md:pl-0 pl-8  md:justify-end justify-start gap-5 md:w-[880px] md:h-[56px] h-[70px]  ">
<Image className='object-fit w-[123px] h-full' src={"images/tag1.svg"} width={123} height={38.52} alt=''></Image>
<Image className='object-fit w-[123px] h-full' src={"images/tag4.svg"} width={123} height={38.52} alt=''></Image>
<Image className='object-fit w-[123px] h-full' src={"images/tag5.svg"} width={123} height={38.52} alt=''></Image>
<Image className='object-fit w-[123px] h-full' src={"images/tag9.svg"} width={123} height={38.52} alt=''></Image>
<Image className='object-fit w-[123px] h-full' src={"images/tag8.svg"} width={123} height={38.52} alt=''></Image>
<Image className='object-fit w-[123px] h-full' src={"images/tag2.svg"} width={123} height={38.52} alt=''></Image>
</div>
      </div>
    </div>
  )
}
