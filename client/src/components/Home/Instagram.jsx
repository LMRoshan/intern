import React from "react";
import Pic from "../../assets/ins.jpg";

const Instagram = () => {
  return (
    <>
    <div
        style={{
          backgroundImage: `url(${Pic})`,
        }}
        className="relative bg-fixed bg-center bg-cover bg-no-repeat h-[350px] flex flex-col justify-center items-center text-white mt-10 mb-7"
      >
        <div className="absolute inset-0 bg-white opacity-40"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-[40px] font-bold text-black">Our Instagram</h2>
          <p className="text-[14px] mb-4 text-black">Follow our store on Instagram</p>
          <button className="mt-4 bg-[#FAF4F4] text-black px-14 py-3 rounded-[50px] font-normal hover:bg-white transition hover:shadow-lg">
            Follow Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Instagram;
