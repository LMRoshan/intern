import React from "react";
import Pic1 from "../../assets/topPick.png";
import Pic2 from "../../assets/topPick1.png";
import Pic3 from "../../assets/topPick2.png";
import Pic4 from "../../assets/topPick3.png";
import { Link } from "react-router-dom";

const RelatedProd = () => {
  const TopPickCard = (img, title, price, scale) => (
    <div class="max-w-sm bg-transparent rounded-lg">
      <div className="w-[287px] h-[287px] overflow-hidden rounded-t-lg">
        <a href="#">
          <img
            class={`w-full h-full object-contain scale-${scale}`}
            src={`${img}`}
            alt={title}
          />
        </a>
      </div>
      <div class="p-5">
        <p class="mb-3 font-normal text-black">{title}</p>
        <h5 class="mb-2 text-2xl font-medium tracking-tight text-black">
          {price}
        </h5>
      </div>
    </div>
  );
  return (
    <>
      <div className="bg-[#FFFFFF] p-5 mb-10">
        <div className="head">
          <h1 className="font-['Poppins'] font-normal text-[36px] leading-none text-center pt-20 mb-10">
            Related Products
          </h1>
        </div>

        {/* cards */}
        <div className="flex flex-wrap justify-around mt-10">
          {TopPickCard(Pic1, "Trenton modular sofa_3", "Rs. 25,000.00", 300)}
          {TopPickCard(
            Pic2,
            "Granite dining table with dining chair",
            "Rs. 25,000.00",
            100
          )}
          {TopPickCard(
            Pic3,
            "Outdoor bar table and stool",
            "Rs. 25,000.00",
            150
          )}
          {TopPickCard(
            Pic4,
            "Plain console with teak mirror",
            "Rs. 25,000.00",
            100
          )}
        </div>
        <Link
          to="/shop"
          className="appearance-none border-0 bg-transparent p-0 mt-5 leading-none font-['Poppins'] text-black text-[17px] font-light hover:underline underline-offset-9 hover:font-medium hover:cursor-pointer block m-auto text-center"
        >
          View More
        </Link>
      </div>
    </>
  );
};

export default RelatedProd;
