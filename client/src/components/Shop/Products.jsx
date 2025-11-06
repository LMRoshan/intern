import React, { useContext } from "react";
import Pic from "../../assets/newArrival.png";
import ProdContext from "../../context/ProdContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useContext(ProdContext);

  return (
    <>
      <div className="flex flex-wrap justify-around gap-6 mt-6">
        {products.length === 0 ? (
          <h6 className="text-gray-500 text-lg font-medium">
            No Products Available
          </h6>
        ) : (
          products.map((prod) => (
            <div
              className="max-w-sm bg-transparent rounded-lg transition-transform hover:scale-105"
              key={prod._id}
            >
              <Link to={`/shop/${prod._id}`}>
                <div className="w-[287px] h-[287px] overflow-hidden rounded-t-lg bg-white shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      prod.img && prod.img.length > 0
                        ? `http://localhost:3010/uploads/${prod.img[0]}`
                        : Pic
                    }
                    alt={prod.title}
                  />
                </div>
                <div className="p-5 text-center">
                  <p className="mb-2 font-medium text-black text-lg">
                    {prod.title}
                  </p>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-800">
                    Rs. {prod.price}
                  </h5>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        {["1", "2", "3", "Next"].map((label, index) => (
          <button
            key={index}
            className={`text-[#9F9F9F] text-[16px] font-medium rounded-[10px] py-3 px-6 cursor-pointer transition
            ${
              label === "1"
                ? "bg-[#FBEBB5]"
                : "bg-[#FFF9E5] hover:bg-[#FBEBB5] hover:shadow-lg"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Products;
