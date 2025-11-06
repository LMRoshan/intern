import React, { useState } from "react";
import { TbUserExclamation } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Drawer from "../pages/Drawer";

const Navbar = ({ color }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      <nav className={`bg-[${color}] border-gray-200`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse order-3">
            <div className="hidden md:flex justify-between gap-4">
              <Link to="/account" className="text-gray-500 hover:text-black">
                <TbUserExclamation className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-black">
                <RiSearch2Line className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-black">
                <IoIosHeartEmpty className="w-6 h-6 " />
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-gray-500 hover:text-black"
              >
                <IoCartOutline className="w-6 h-6" />
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex items-center justify-between w-full md:w-auto md:order-2 md:flex-1 md:justify-center`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex md:hidden items-center space-x-3 order-2">
            <div className="flex justify-between gap-4">
              <Link to="/account" className="text-gray-500 hover:text-black">
                <TbUserExclamation className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-black">
                <RiSearch2Line className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-black">
                <IoIosHeartEmpty className="w-6 h-6 " />
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-gray-500 hover:text-black"
              >
                <IoCartOutline className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Drawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Navbar;
