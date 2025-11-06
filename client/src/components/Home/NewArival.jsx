import React from "react";
import Pic1 from "../../assets/newArrival.png";

const NewArrival = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#FFF9E5] mt-10">
      <div className="w-full md:w-8/12">
        <img
          src={Pic1}
          className="w-full h-[300px] sm:h-[400px] md:h-[710px] object-cover"
          alt="sofa"
        />
      </div>

      <div className="w-full md:w-4/12 flex justify-center items-center">
        <div className="text-center p-6 md:p-10">
          <h3 className="font-['Poppins'] text-[20px] sm:text-[24px] font-normal mb-3">
            New Arrival
          </h3>
          <h2 className="font-['Poppins'] font-bold text-[32px] sm:text-[48px] leading-tight mb-6">
            Asgaard Sofa
          </h2>
          <button className="border border-black bg-transparent px-6 sm:px-8 py-2 sm:py-3 font-['Poppins'] text-[16px] sm:text-[20px] font-light hover:font-medium transition-all duration-200 hover:scale-105">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

