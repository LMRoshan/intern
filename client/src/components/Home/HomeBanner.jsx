import React from "react";
import Sofa from "../../assets/bannerSofa.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex justify-between bg-[#FBEBB5] p-1.5">
        <div className="flex flex-col justify-center items-start ml-20 space-y-6">
          <h1 className="font-['Poppins'] font-normal text-[64px] leading-none">
            Rocket single seater
          </h1>
          <Link
            to="/shop"
            className="appearance-none border-0 bg-transparent p-0 mt-5 leading-none font-['Poppins'] text-black text-[24px] font-light hover:underline underline-offset-9 hover:font-medium hover:cursor-pointer"
          >
            Shop Now
          </Link>
        </div>

        <div>
          <img
            src={Sofa}
            className="scale-x-[-1] w-[1000px] h-[700px] opacity-100 mr-4"
            alt="Sofa"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
