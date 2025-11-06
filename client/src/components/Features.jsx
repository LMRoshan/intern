import React from "react";

const Features = () => {
  return (
    <>
      <div className="bg-[#FAF4F4] h-[250px] flex justify-evenly items-center gap-10 text-white mt-10 mb-7">
        <div className="flex flex-col hover:bg-[#ffecec] hover:shadow-lg p-5 rounded-2xl">
          <h6 className="text-black text-[30px] text-medium">Free Delivery</h6>
          <p
            className="text-[#9F9F9F] text-[16px]"
          >
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div className="flex flex-col hover:bg-[#ffecec] hover:shadow-lg p-5 rounded-2xl">
          <h6 className="text-black text-[30px] text-medium">90 Days Return</h6>
          <p
            className="text-[#9F9F9F] text-[16px]"
          >
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div className="flex flex-col hover:bg-[#ffecec] hover:shadow-lg p-5 rounded-2xl">
          <h6 className="text-black text-[30px] text-medium">Secure Payment</h6>
          <p
            className="text-[#9F9F9F] text-[16px]"
          >
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
