import React from 'react'
import Image from "next/image"

export default function Footer() {
  return (
      <div className='h-[1600px] md:h-[864px]'>
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicon8.min.css"
            rel="8tylesheet"
          />
      <div className="sec1 h-[864px] flex justify-center md:items-center items-start">

        <div className='h-[684px] flex justify-center  items-start'>

            <div className='h-[524px] lg:w-[1120px] md:w-[768px] flex flex-col gap-[80px] lg:p-0 md:p-5'>

                <div className='md:flex md:justify-between '>
                    <div className="heading md:w-[500px] w-[428px] md:h-[51px] h-[91px] ">
                    <h1 className='font-semibold md:text-start text-center'>Subscribe to our newsletter</h1>
                    <p className='md:p-0 px-24 md:mt-0 mt-6 md:text-start  text-center lg:w-[500px] md:w-[300px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="form md:mt-0 mt-10 flex flex-col gap-3   w-[428px] h-[146px] md:h-[82px] ">
                        <div className='h-full'>
                        <div className=' w-[400px] md:flex grid justify-center h-full items-start gap-2'>
                        <input placeholder='Enter your email' className=' border-[1px] border-[#000000] w-[380px] md:w-[265px] h-[48px] p-[12px] rounded' type="text" />
                        <button className='px-[24] w-[380px] md:w-[119px] h-[48px] py-[12px] border-[1px] border-[#000000] rounded'>Subscribe</button>
                        </div>
                        </div>
                        <p className=' text-center md:text-start '>By subscribing you agree to with our Privacy Policy</p>
                    </div>

                </div>

<div className="sec2 h-[811px] md:h-[225px] grid md:grid-cols-4 grid-cols-1 w-full gap-[40px]">
    <div className="logo w-full flex md:justify-start md:items-start justify-center items-center  md:w-[250px] h-[40px] md:h-[225px] ">
    <Image className='md:w-[130px] w-[172px]' src={"images/logo.svg"} width={130} height={40} alt=''></Image>
    </div>
    
    <div className="list2 md:text-start text-center w-full md:w-[250px] h-[225px]">
        <ul className='flex flex-col gap-3'>
            <h1 className='font-semibold mb-2'>Courses</h1>
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
        </ul>
    </div>
    <div className="list3 text-center md:text-start w-full md:w-[250px] h-[225px]">
        <ul className='flex flex-col gap-3'>
            <h1 className='font-semibold mb-2'>Resources</h1>
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
        </ul>
    </div>
    <div className="list1 md:text-start text-center w-full md:w-[250px] h-[225px]">
        <ul className='flex flex-col gap-3'>
            <h1 className='font-semibold mb-2'>About Us</h1>
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Partners</li>
        </ul>
    </div>
</div>
<div className="line w-[380px] md:ml-0 ml-5  md:w-full h-full flex flex-col gap-6 ">
    <div className='bg-[#000000] w-full h-[1px]'></div>
<div className="footer md:flex w-[428px] h-[147px]  md:w-full md:h-full md:justify-between md:pl-0 pl-3  gap-5 md:gap-0">
    <div className=' md:flex gap-3'>
        <div className=''>
    <p className='md:mb-0 mb-6 text-center'>2023 Ddsgnr. All right reserved.</p>
        </div>
        <div className='flex gap-4 md:mb-0 mb-6'>
    <p className='underline'>Privacy Policy</p>
    <p className='underline'>Terms of Service</p>
    <p className='underline'>Cookies Settings</p>
        </div>
    </div>
    <div className='flex gap-2 justify-center items-center text-2xl  md:text-xl'>
    <i className={`bx bxl-facebook`} aria-hidden="true"></i>
    <i className={`bx bxl-instagram`} aria-hidden="true"></i>
    <i className={`bx bxl-twitter`} aria-hidden="true"></i>
    <i className={`bx bxl-linkedin-square`} aria-hidden="true"></i>
    </div>
</div>
</div>
            </div>

        </div>

      </div>
    </div>
  )
}
