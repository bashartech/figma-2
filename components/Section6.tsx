
'use client'

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "James Nduku",
    role: "Software Developer",
    image: "images/Image23.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
  },
  {
    name: "Erick Kipkemboi",
    role: "Scrum Master",
    image: "images/Image21.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
  },
  {
    name: "Stephen Kerubo",
    role: "UI/UX Designer",
    image: "images/Image26.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
  }
];

export default function Section6() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="sec1 w-screen h-auto md:h-[830px] bg-[#F7F7F7] py-10" id="testimonials">
        <div className="heading h-auto md:h-[300px] flex flex-col justify-end md:ml-14 md:items-start items-center px-4 md:px-0 md:my-0 my-14 md:m-0 m-5">
          <h1 className="mb-6 md:flex hidden text-[48px] font-bold">Customer testimonials</h1>
          <h1 className="mb-3 md:hidden text-[32px] md:text-[48px] font-bold">What Our Student Say</h1>
          <p className="text-[18px] text-center md:text-start w-full md:w-[361px] lg:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="w-screen h-auto md:h-[530px] flex flex-col justify-center items-center">
          <div className="lg:w-[1152px] md:w-[768px] grid lg:grid-cols-3 lg:pl-0 md:pl-[15px] grid-cols-1 md:grid-cols-2 w-full max-w-[380px] md:max-w-none h-auto md:h-[417px] gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`box1 w-full md:w-[362.67px] h-[321.89px] border-[1px] border-[#000000] flex flex-col justify-center items-start pl-10 gap-[24px] transition-all duration-300 ease-in-out ${
                  index === currentSlide ? 'block' : 'hidden md:flex'
                } ${index === 2 ? 'md:hidden lg:flex' : ''}`}
              >
                <div className="icon w-[116px] h-[18.89px] text-xl">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bx bxs-star"></i>
                  ))}
                </div>
                <p className="w-[298px] text-[18px]">{testimonial.content}</p>
                <div className="id flex items-center gap-6">
                  <Image
                    className="rounded-full w-[56px] h-[56px]"
                    src={testimonial.image}
                    width={56}
                    height={56}
                    alt={`${testimonial.name}'s profile picture`}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="font-bold">{testimonial.name}</h1>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-48px md:w-[768px] w-full max-w-[380px] lg:w-[1152px] flex justify-between items-center mt-6 px-4 md:px-0">
            <Image
              className="rounded-full w-[56px] h-[56px]"
              src={"images/Image27.svg"}
              width={72}
              height={8}
              alt="Decorative dots"
            />
            <div className="btn flex gap-3">
              <button onClick={prevSlide} className="md:hidden">
                <Image
                  className="rounded-full w-[48px] h-[48px]"
                  src={"images/Button.svg"}
                  width={48}
                  height={48}
                  alt="Previous slide"
                />
              </button>
              <button onClick={nextSlide} className="md:hidden">
                <Image
                  className="rounded-full w-[48px] h-[48px]"
                  src={"images/Button1.svg"}
                  width={48}
                  height={48}
                  alt="Next slide"
                />
              </button>
              <Image
                className="rounded-full w-[48px] h-[48px] hidden md:block"
                src={"images/Button.svg"}
                width={48}
                height={48}
                alt="Decorative button"
              />
              <Image
                className="rounded-full w-[48px] h-[48px] hidden md:block"
                src={"images/Button1.svg"}
                width={48}
                height={48}
                alt="Decorative button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}