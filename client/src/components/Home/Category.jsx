import React from "react";
import Table from "../../assets/table.png";
import Sofa from "../../assets/3sofa.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="bg-[#FAF4F4] flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-10 md:py-20">
      <div className="max-w-xs sm:max-w-sm bg-transparent rounded-lg text-center">
        <img
          className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover rounded-t-lg"
          src={Table}
          alt="table"
        />
        <div className="p-5">
          <h5 className="mt-[-30px] sm:mt-[-50px] text-2xl sm:text-3xl tracking-tight text-black font-['Poppins'] font-medium">
            Side Table
          </h5>
          <Link
            to="/underconstruction"
            className="block mt-3 text-[16px] sm:text-[17px] font-light text-black font-['Poppins'] hover:underline underline-offset-8 hover:font-medium"
          >
            View More
          </Link>
        </div>
      </div>

      <div className="max-w-xs sm:max-w-sm bg-transparent rounded-lg text-center">
        <img
          className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover rounded-t-lg"
          src={Sofa}
          alt="sofa"
        />
        <div className="p-5">
          <h5 className="mt-[-30px] sm:mt-[-50px] text-2xl sm:text-3xl tracking-tight text-black font-['Poppins'] font-medium">
            Side Sofa
          </h5>
          <Link
            to="/underconstruction"
            className="block mt-3 text-[16px] sm:text-[17px] font-light text-black font-['Poppins'] hover:underline underline-offset-8 hover:font-medium"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;

