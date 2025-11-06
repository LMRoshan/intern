import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import ProdContext from "../../context/ProdContext";

const Cart = () => {
  const { state, dispatch } = useContext(ProdContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const subtotal = state.cart.reduce(
    (acc, item) => acc + item.price * (item.qty),
    0
  );

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <div className="relative overflow-x-auto m-4">
            <table className="w-full text-sm text-left text-black">
              <thead className="text-xs text-gray-700 uppercase bg-[#FFF9E5]">
                <tr>
                  <th className="px-6 py-3 font-['Poppins'] font-medium text-[16px]">
                    Product
                  </th>
                  <th className="px-6 py-3 font-['Poppins'] font-medium text-[16px]">
                    Price
                  </th>
                  <th className="px-6 py-3 font-['Poppins'] font-medium text-[16px]">
                    Quantity
                  </th>
                  <th className="px-6 py-3 font-['Poppins'] font-medium text-[16px]">
                    Subtotal
                  </th>
                  <th className="px-6 py-3 font-['Poppins'] font-medium text-[16px]"></th>
                </tr>
              </thead>
              <tbody>
                {state.cart.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center text-gray-500 py-6"
                    >
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  state.cart.map((item) => (
                    <tr key={item._id} className="bg-white">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <div className="flex items-center gap-7">
                          <img
                            src={
                              item.img && item.img[0]
                                ? `https://ascend-y4h7.onrender.com/uploads/${item.img[0]}`
                                : ""
                            }
                            alt={item.title}
                            className="w-[100px] h-[100px] rounded-md hover:scale-110 transition-all duration-500 ease-in-out"
                          />
                          <p className="text-black font-['Poppins'] text-[16px]">
                            {item.title}
                          </p>
                        </div>
                      </th>
                      <td className="px-6 py-4 font-['Poppins'] text-[#9F9F9F] font-light text-[16px]">
                        Rs. {item.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 font-['Poppins'] text-[#9F9F9F] font-light text-[16px]">
                        {item.qty || 1}
                      </td>
                      <td className="px-6 py-4 font-['Poppins'] text-[#9F9F9F] font-light text-[16px]">
                        Rs. {(item.price * (item.qty || 1)).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <MdDelete
                          onClick={() => handleRemove(item._id)}
                          className="text-[24px] text-[#B88E2F] cursor-pointer hover:text-red-600"
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="flex justify-center m-4">
            <div className="flex flex-col items-center bg-[#FFF9E5] p-10 w-full">
              <h6 className="font-['Poppins'] font-medium text-[30px]">
                Cart Totals
              </h6>
              <div className="flex flex-col gap-5 mt-10 w-full">
                <div className="flex justify-between items-center">
                  <p className="font-['Poppins'] font-normal text-[16px]">
                    Subtotal
                  </p>
                  <p className="font-['Poppins'] font-light text-[#9F9F9F] text-[16px]">
                    Rs. {subtotal.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-['Poppins'] font-normal text-[16px]">
                    Total
                  </p>
                  <p className="font-['Poppins'] font-medium text-[#B88E2F] text-[20px]">
                    Rs. {subtotal.toLocaleString()}
                  </p>
                </div>
              </div>
              <Link
                to="/checkout"
                className="text-black border mt-5 py-2 px-6 rounded-md hover:shadow-md hover:bg-[#FBEBB5] transition-all duration-200"
              >
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

