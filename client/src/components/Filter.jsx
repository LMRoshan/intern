import React from "react";
import { MdFilterList } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";

const Filter = () => {
  return (
    <>
      <div className="flex justify-around bg-[#FAF4F4] h-[70px]">
        <div className="flex justify-between items-center gap-6.5">
          <div className="flex justify-around items-center cursor-pointer">
            <MdFilterList className="text-black text-[25px]" />
            <p className="text-['Poppins'] text-[16px] font-medium ml-2 mt-1">
              Filter
            </p>
          </div>
          <div className="flex justify-between items-center cursor-pointer gap-4">
            <HiViewGrid className="text-black text-[25px] mr-[-10px]" />
            <BsViewList className="text-black text-[25px] ml-4" />
          </div>
          <div className="w-px h-6 bg-black"></div>
          <p>Showing 1–16 of 32 results</p>
        </div>

        <div className="flex justify-between items-center gap-6.5">
            <div className="flex justify-around items-center">
                <p className="text-['Poppins'] text-[16px] font-medium mr-2 mt-1">Show</p>
                <p className="text-['Poppins', #9F9F9F, 16px] bg-[#FFFFFF] font-medium mr-2 mt-1 border-none p-2 cursor-pointer">16</p>
            </div>
            <div className="flex justify-around items-center">
                <p className="text-['Poppins'] text-[16px] font-medium mr-2 mt-1">Sort By</p>
                <p className="text-['Poppins', #9F9F9F, 16px] bg-[#FFFFFF] font-medium mr-2 mt-1 border-none p-2 cursor-pointer">Default</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
