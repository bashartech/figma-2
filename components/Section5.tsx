import React from "react";
import Image from "next/image";

export default function Section5() {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicon8.min.css"
        rel="8tylesheet"
      />
      <div>
        <div className="sec1 gap-14 flex flex-col justify-center items-center  md:h-[895px] h-[1075px] bg-[#F7F7F7]" id="about">
          <div className="heading md:h-[300px] h-[120px] flex flex-col justify-center items-center">
            <h1 className="mb-6 text-[32px] md:text-[56px] font-bold">
              Our team
            </h1>
            <p className="text-[18px] text-center w-[363px] md:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="box gap-[24px] md:w-full w-[394px] md:grid md:grid-cols-3 md:h-[610px] h-[723px]">
            <div className="box gap-[24px] md:w-[1280px] md:grid grid-cols-3 md:h-[610px] h-[723px]">
              <div className="box1 md:mb-0 mb-10 flex flex-col gap-[24px]  w-[394px] md:h-[273px] h-[209px] ">
                <div className="h-[159px] w-full flex flex-col justify-center items-center gap-[24px] ">
                  <Image
                    className=" w-[80px] h-[80px] "
                    src={"images/Image21.svg"}
                    width={80}
                    height={80}
                    alt=""
                  ></Image>
                  <div className="sec">
                    <h1 className="text-center font-bold text-[20px] w-[394px] h-[30px]">
                      James Nduku
                    </h1>
                    <p className="text-center  text-[18px] w-[394px] h-[30px]">
                      Marketing Coordinator
                    </p>
                  </div>
                </div>
                <div className="icon w-full h-[80px] flex  justify-center items-end gap-[14px] text-xl ">
                  <i
                    className={`bx bxl-linkedin-square`}
                    aria-hidden="true"
                  ></i>
                  <i className={`bx bxl-twitter`} aria-hidden="true"></i>
                  <i className={`bx bxl-dribbble`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="box1 md:mb-0 mb-10  flex flex-col gap-[24px]  w-[394px] md:h-[273px] h-[209px] ">
                <div className="h-[159px] w-full flex flex-col justify-center items-center gap-[24px] ">
                  <Image
                    className=" w-[80px] h-[80px] "
                    src={"images/Image22.svg"}
                    width={80}
                    height={80}
                    alt=""
                  ></Image>
                  <div className="sec">
                    <h1 className="text-center font-bold text-[20px] w-[394px] h-[30px]">
                      Joseph Munyambu
                    </h1>
                    <p className="text-center  text-[18px] w-[394px] h-[30px]">
                      Nursing Assistant
                    </p>
                  </div>
                </div>
                <div className="icon w-full h-[80px] flex  justify-center items-end gap-[14px] text-xl ">
                  <i
                    className={`bx bxl-linkedin-square`}
                    aria-hidden="true"
                  ></i>
                  <i className={`bx bxl-twitter`} aria-hidden="true"></i>
                  <i className={`bx bxl-dribbble`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="box1 flex flex-col gap-[24px]  w-[394px] md:h-[273px] h-[209px] ">
                <div className="h-[159px] w-full flex flex-col justify-center items-center gap-[24px] ">
                  <Image
                    className=" w-[80px] h-[80px] "
                    src={"images/Image23.svg"}
                    width={80}
                    height={80}
                    alt=""
                  ></Image>
                  <div className="sec">
                    <h1 className="text-center font-bold text-[20px] w-[394px] h-[30px]">
                      Joseph Ngumbau
                    </h1>
                    <p className="text-center  text-[18px] w-[394px] h-[30px]">
                      Medical Assistant
                    </p>
                  </div>
                </div>
                <div className="icon w-full h-[80px] flex  justify-center items-end gap-[14px] text-xl ">
                  <i
                    className={`bx bxl-linkedin-square`}
                    aria-hidden="true"
                  ></i>
                  <i className={`bx bxl-twitter`} aria-hidden="true"></i>
                  <i className={`bx bxl-dribbble`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="box1 hidden md:flex flex-col gap-[24px]  w-[394px] h-[273px] ">
                <div className="h-[159px] w-full flex flex-col justify-center items-center gap-[24px] ">
                  <Image
                    className=" w-[80px] h-[80px] "
                    src={"images/Image24.svg"}
                    width={80}
                    height={80}
                    alt=""
                  ></Image>
                  <div className="sec">
                    <h1 className="text-center font-bold text-[20px] w-[394px] h-[30px]">
                      Erick Kipkemboi
                    </h1>
                    <p className="text-center  text-[18px] w-[394px] h-[30px]">
                      Web Designer
                    </p>
                  </div>
                </div>
                <div className="icon w-full h-[80px] flex  justify-center items-end gap-[14px] text-xl ">
                  <i
                    className={`bx bxl-linkedin-square`}
                    aria-hidden="true"
                  ></i>
                  <i className={`bx bxl-twitter`} aria-hidden="true"></i>
                  <i className={`bx bxl-dribbble`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="box1 hidden md:flex flex-col gap-[24px]  w-[394px] h-[273px] ">
                <div className="h-[159px] w-full flex flex-col justify-center items-center gap-[24px] ">
                  <Image
                    className=" w-[80px] h-[80px] "
                    src={"images/Image25.svg"}
                    width={80}
                    height={80}
                    alt=""
                  ></Image>
                  <div className="sec">
                    <h1 className="text-center font-bold text-[20px] w-[394px] h-[30px]">
                      Stephen Kerubo
                    </h1>
                    <p className="text-center  text-[18px] w-[394px] h-[30px]">
                      President of Sales
                    </p>
                  </div>
                </div>
                <div className="icon w-full h-[80px] flex  justify-center items-end gap-[14px] text-xl ">
                  <i
                    className={`bx bxl-linkedin-square`}
                    aria-hidden="true"
                  ></i>
                  <i className={`bx bxl-twitter`} aria-hidden="true"></i>
                  <i className={`bx bxl-dribbble`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="box1 hidden md:flex flex-col gap-[24px]  w-[394px] h-[273px] ">
                <div className="h-[159px] w-full flex flex-col justify-center items-center gap-[24px] ">
                  <Image
                    className=" w-[80px] h-[80px] "
                    src={"images/Image26.svg"}
                    width={80}
                    height={80}
                    alt=""
                  ></Image>
                  <div className="sec">
                    <h1 className="text-center font-bold text-[20px] w-[394px] h-[30px]">
                      John Leboo
                    </h1>
                    <p className="text-center  text-[18px] w-[394px] h-[30px]">
                      Dog Trainer
                    </p>
                  </div>
                </div>
                <div className="icon w-full h-[80px] flex  justify-center items-end gap-[14px] text-xl ">
                  <i
                    className={`bx bxl-linkedin-square`}
                    aria-hidden="true"
                  ></i>
                  <i className={`bx bxl-twitter`} aria-hidden="true"></i>
                  <i className={`bx bxl-dribbble`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="btn md:hidden mt-[80px] flex justify-center items-center">
    <button className='w-[89px] h-[40px] px-[12px] border-[#000000] border-[1px] rounded-md  '>View All </button>
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
