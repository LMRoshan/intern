import React from "react";
import Pic from "../../assets/newArrival.png";

const MoreDetails = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center item-center space-x-10 mt-7">
          <h6 className="text-[24px] font-['Poppins'] font-normal hover:font-medium">
            Description
          </h6>
          <h6 className="text-[24px] font-['Poppins'] font-normal text-[#9F9F9F] hover:font-medium">
            Additional Information
          </h6>
          <h6 className="text-[24px] font-['Poppins'] font-normal text-[#9F9F9F] hover:font-medium">
            Reviews
          </h6>
        </div>

        <div className="flex flex-col items-center justify-center space-y-5 mx-4 md:mx-auto mt-10 max-w-3xl">
          <p className="text-[#9F9F9F] text-base md:text-[16px] font-['Poppins'] font-normal">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] text-base md:text-[16px] font-['Poppins'] font-normal">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-5 mt-10">
          <div className="w-[505px] h-[300px] rounded-[10px] bg-[#FFF9E5] overflow-hidden flex justify-center items-center">
            <img
              src={Pic}
              alt="Image 1"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="w-[505px] h-[300px] rounded-[10px] bg-[#FFF9E5] overflow-hidden flex justify-center items-center">
            <img
              src={Pic}
              alt="Image 2"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 mt-7" />
    </>
  );
};

export default MoreDetails;
