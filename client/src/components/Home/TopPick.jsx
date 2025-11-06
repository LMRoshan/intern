import React from "react";
import Pic1 from "../../assets/topPick.png";
import Pic2 from "../../assets/topPick1.png";
import Pic3 from "../../assets/topPick2.png";
import Pic4 from "../../assets/topPick3.png";
import { Link } from "react-router-dom";

const TopPick = () => {
  const TopPickCard = (img, title, price, scale) => (
    <div className="bg-transparent rounded-lg w-full sm:w-[45%] md:w-[22%] mb-8">
      <div className="w-full h-[250px] sm:h-[300px] overflow-hidden rounded-t-lg flex items-center justify-center bg-gray-50">
        <img
          className="object-contain transition-transform duration-300 hover:scale-105"
          src={img}
          alt={title}
          style={{ transform: `scale(${scale / 100})` }}
        />
      </div>
      <div className="p-4 text-center">
        <p className="mb-2 font-light text-black text-[16px]">{title}</p>
        <h5 className="text-xl font-medium tracking-tight text-black">
          {price}
        </h5>
      </div>
    </div>
  );

  return (
    <div className="bg-white px-5 sm:px-10 lg:px-20 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-['Poppins'] text-[28px] sm:text-[36px] font-normal mb-3">
          Top Picks For You
        </h1>
        <p className="font-['Poppins'] text-[#9F9F9F] text-[14px] sm:text-[16px] font-light">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {TopPickCard(Pic1, "Trenton modular sofa_3", "Rs. 25,000.00", 100)}
        {TopPickCard(
          Pic2,
          "Granite dining table with dining chair",
          "Rs. 25,000.00",
          100
        )}
        {TopPickCard(Pic3, "Outdoor bar table and stool", "Rs. 25,000.00", 100)}
        {TopPickCard(
          Pic4,
          "Plain console with teak mirror",
          "Rs. 25,000.00",
          100
        )}
      </div>

      {/* Button */}
      <Link
        to="/shop"
        className="block mx-auto mt-8 font-['Poppins'] text-black text-[17px] font-light hover:underline underline-offset-8 hover:font-medium hover:cursor-pointer text-center"
      >
        View More
      </Link>
    </div>
  );
};

export default TopPick;
