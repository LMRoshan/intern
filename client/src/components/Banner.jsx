import React from "react";
import Pic from "../assets/banner.jpg";
import Logo from "../assets/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = ({ title }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Pic})`,
        }}
        className="relative bg-center bg-cover bg-no-repeat h-[316px] flex flex-col justify-center items-center text-white"
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

        <div className="relative z-10 text-center">
          <img
            src={Logo}
            alt="Logo"
            className="inline m-auto w-[77px] h-[77px] mb-[-20px]"
          />
          <h2 className="text-[40px] font-medium text-black">{title}</h2>
          <div className="flex justify-center items-center gap-2 mt-2">
            <Link to="/">
              <p className="text-black text-[16px] font-medium hover:underline cursor-pointer">
                Home
              </p>
            </Link>
            <MdKeyboardArrowRight className="text-black text-[25px]" />
            <Link to={`/${title}`}>
              <p className="text-black text-[16px] font-light hover:underline cursor-pointer">{title}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
