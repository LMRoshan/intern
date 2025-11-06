import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
          <div className="flex items-start sm:items-center">
            <h6 className="text-[13px] text-[#9F9F9F] leading-relaxed">
              400 University Drive Suite 200 <br />
              Coral Gables, FL 33134 USA
            </h6>
          </div>

          <div>
            <h2 className="mb-4 md:mb-10 text-[16px] font-medium text-[#9F9F9F] uppercase">
              Links
            </h2>
            <ul className="text-black font-normal text-[13px] space-y-3 md:space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 md:mb-10 text-[16px] font-medium text-[#9F9F9F] uppercase">
              Help
            </h2>
            <ul className="text-black font-normal text-[13px] space-y-3 md:space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 md:mb-10 text-[16px] font-medium text-[#9F9F9F] uppercase">
              Newsletter
            </h2>
            <form className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-grow px-3 py-2 text-[13px] text-black outline-none bg-transparent border-b border-black"
              />
              <button
                type="submit"
                className="font-['Poppins'] text-black text-[13px] font-normal hover:underline hover:font-medium cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />
        <div className="text-center">
          <span className="text-sm text-gray-500">
            © 2025{" "}
            <a href="#" className="hover:underline font-medium text-gray-700">
              Meubel House
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

