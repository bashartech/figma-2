import React from "react";

export default function Header() {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="w-screen bg-[#F7F7F7]">
        <header className="md:flex hidden  justify-center border-b-2 border-[#000000]   ">
          <div className="h-[54px] lg:px-0 md:px-3 md:flex hidden justify-between items-center w-[768px] lg:w-[1154px]">
            <div className="flex
            gap-5">
            <h1 className=" text-[14px] ">Phone Number: 956 742 455 678</h1>
            <h1 className=" text-[14px] ">Email:info@ddsgnr.com</h1>
            </div>
            <div className="icons flex justify-center items-center gap-[14px]">
              <i className={`bx bxl-facebook`} aria-hidden="true"></i>
              <i className={`bx bxl-instagram`} aria-hidden="true"></i>
              <i className={`bx bxl-twitter`} aria-hidden="true"></i>
              <i className={`bx bxl-linkedin-square`} aria-hidden="true"></i>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
