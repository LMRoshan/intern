import React, { useContext } from "react";
import { BsBagX } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import ProdContext from "../context/ProdContext";
import Pic from "../assets/topPick1.png";
import { Link } from "react-router-dom";

const Drawer = ({ isOpen, onClose }) => {
  const { state, dispatch } = useContext(ProdContext);
  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const subtotal = state.cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-30" onClick={onClose}></div>
      )}

      <div
        className={`fixed top-0 right-0 z-40 p-4 overflow-y-auto bg-white w-80 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h5 className="inline-flex items-center mb-4 text-[25px] font-semibold p-3">
          Shopping Cart
        </h5>
        <hr className="border-gray-300" />

        <button
          type="button"
          onClick={onClose}
          className="text-[19px] text-[#9F9F9F] hover:text-red-600 absolute top-4 right-2.5 p-5"
        >
          <BsBagX />
        </button>

        {state.cart.length === 0 ? (
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Your shopping cart is currently empty.
          </p>
        ) : (
          <div className="mt-6 flex flex-col gap-4">
            {state.cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center gap-2"
              >
                <img
                  className="w-[105px] h-[105px] object-contain bg-[#FBEBB5] rounded-[10px]"
                  src={Pic}
                  alt={item.title}
                />
                <div className="flex flex-col gap-y-2 flex-1">
                  <h6 className="font-regular text-[16px]">{item.title}</h6>
                  <div className="flex gap-x-2 items-center">
                    <p className="text-[16px] font-light">{item.qty || 1}</p>
                    <p className="text-[12px] font-light">X</p>
                    <p className="text-[#B88E2F] text-[12px] font-medium">
                      Rs. {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <IoIosCloseCircle
                  onClick={() => handleRemove(item._id)}
                  className="text-[#9F9F9F] text-[20px] hover:text-red-600 cursor-pointer"
                />
              </div>
            ))}

            <div className="flex justify-between mt-4">
              <p className="font-regular text-[16px]">Subtotal</p>
              <p className="text-[#B88E2F] font-semibold text-[16px]">
                Rs. {subtotal.toLocaleString()}
              </p>
            </div>

            <hr className="border-gray-300 mt-5" />
            <div className="flex mt-5 gap-x-4 pb-5">
              <Link to="/cart" className="border border-black hover:bg-[#FBEBB5] hover:shadow-lg font-medium rounded-[50px] text-[12px] px-7 py-2 text-center transition w-1/2">
                View Cart
              </Link>
              <Link to="/checkout" className="border border-black hover:bg-[#FBEBB5] hover:shadow-lg font-medium rounded-[50px] text-[12px] px-7 py-2 text-center transition w-1/2">
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Drawer;
