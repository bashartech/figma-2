import React from 'react'

export default function Section7() {
  return (
    <div className='hidden  lg:flex  justify-center items-center md:h-[500px] lg:h-[451px] '>
      <div className="sec1 flex lg:mt-10 md:mt-[80px] md:justify-center items-center flex-col w-screen md:h-[488px] h-[355px]">
        <div className="heading gap-5 mb-5 md:w-[1152px] h-[136px] flex flex-col justify-start  items-center ">
            <h1 className='md:text-[48px] text-[32px] font-bold '>Our Achivements</h1>
            <p className='text-[18px] md:flex hidden  w-[362px] h-[81px] lg:w-[1152px] md:w-[705px] md:h-[54px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <p className='text-[18px] md:hidden w-[362px] h-[81px] md:w-[1152px] md:h-[54px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
        </div>
        <div className="sec md:w-[1256px] w-[380px] h-[176px] mt-5 md:mt-10 lg:mt-5 md:h-[96px] md:flex grid grid-cols-2 lg:gap-48 md:gap-14 justify-center">
            <div className="box md:gap-0 gap-2 flex flex-col justify-center items-center">
                <h1 className='md:text-[40px] text-[20px] font-bold'>+200</h1>
                <p>Courses</p>
            </div>
            <div className="box md:gap-0 gap-2 flex flex-col justify-center items-center">
                <h1 className='md:text-[40px] text-[20px] font-bold'>+50K</h1>
                <p>Courses</p>
            </div>
            <div className="box md:gap-0 gap-2 flex flex-col justify-center items-center">
                <h1 className='md:text-[40px] text-[20px] font-bold'>370k</h1>
                <p>Students</p>
            </div>
            <div className="box md:gap-0 gap-2 flex flex-col justify-center items-center">
                <h1 className='md:text-[40px] text-[20px] font-bold'>+100</h1>
                <p>Recognition</p>
            </div>
        </div>
      </div>

    </div>
  )
}