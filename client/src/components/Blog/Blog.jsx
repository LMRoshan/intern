import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendar, FaTag } from "react-icons/fa";
import Pic from "../../assets/blog.jpg";
import Pic1 from "../../assets/recent.jpg";

const Blog = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3">
          <div className="flex flex-col items-center gap-y-5 m-8">
            <div className="w-full bg-transparent rounded-lg hover:border hover:border-black">
              <div className="w-full h-[400px] overflow-hidden rounded-[10px]">
                <img
                  className={`w-full h-full object-cover rounded-[10px]`}
                  src={Pic}
                  alt="img"
                />
              </div>
              <div className="flex gap-x-4 justify-flex-start p-6">
                <div className="flex items-center">
                  <FaUser className="text-[#9F9F9F] mr-2" />
                  <p className="font-['Poppins'] font-light text-[#9F9F9F] text-[14px] mr-4">
                    Admin
                  </p>
                </div>
                <div className="flex items-center">
                  <FaCalendar className="text-[#9F9F9F] mr-2" />
                  <p className="font-['Poppins'] font-light text-[#9F9F9F] text-[14px] mr-4">
                    12th Oct 2022
                  </p>
                </div>
                <div className="flex items-center">
                  <FaTag className="text-[#9F9F9F] mr-2" />
                  <p className="font-['Poppins'] font-light text-[#9F9F9F] text-[14px] mr-4">
                    Wood
                  </p>
                </div>
              </div>
              <div className="p-5">
                <h6 className="mb-3 font-medium text-black text-[25px]">
                  Going all-in with millennial design
                </h6>
                <p className="mb-3 font-light text-black text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam itaque labore nam aut voluptatibus repudiandae molestias
                  aspernatur saepe quidem earum est eaque minima, tempora
                  aliquid praesentium facilis nulla! Numquam, id!
                </p>
                <Link
                  to="/blog"
                  className="appearance-none border-0 bg-transparent p-0 mt-5 mb-3 leading-none font-['Poppins'] text-black text-[16px] font-normal hover:underline underline-offset-9 hover:font-medium hover:cursor-pointer block m-auto"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-8">
          <div className="flex flex-col">
            <form className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 right-5 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-4 text-sm text-black border border-black rounded-lg bg-white"
                  required
                />
              </div>
            </form>
            <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
              <div className="flex flex-col w-[300px]">
                <h6 className="font-['Poppins'] text-[24px] font-medium mb-5">
                  Categories
                </h6>
                <div className="flex justify-between items-center gap-y-2 mt-3">
                  <p>Crafts</p>
                  <p>2</p>
                </div>
                <div className="flex justify-between items-center gap-y-2 mt-3">
                  <p>Design</p>
                  <p>8</p>
                </div>
                <div className="flex justify-between items-center gap-y-2 mt-3">
                  <p>Handmade</p>
                  <p>7</p>
                </div>
                <div className="flex justify-between items-center gap-y-2 mt-3">
                  <p>Interior</p>
                  <p>1</p>
                </div>
                <div className="flex justify-between items-center gap-y-2 mt-3">
                  <p>Wood</p>
                  <p>6</p>
                </div>
              </div>
            </div>
            {/* recent posts */}
            <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
              <div className="flex flex-col w-[250px]">
                <h6 className="font-['Poppins'] text-[24px] font-medium mb-5">
                  Recent Posts
                </h6>
                <div className="flex justify-between items-center gap-y-2 mt-3">
                  <img
                    src={Pic1}
                    alt="recent post"
                    className="w-[80px] h-[80px] rounded-[10px]"
                  />
                  <div className="flex flex-col ms-3">
                    <p className="font-['Poppins'] text-[14px] font-normal">
                      Going all-in with millennial design
                    </p>
                    <p className="font-['Poppins'] text-[12px] font-light text-[#9F9F9F] mt-2">
                      12th Oct 2022
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-y-2 mt-3">
                  <img
                    src={Pic1}
                    alt="recent post"
                    className="w-[80px] h-[80px] rounded-[10px]"
                  />
                  <div className="flex flex-col ms-3">
                    <p className="font-['Poppins'] text-[14px] font-normal">
                      Going all-in with millennial design
                    </p>
                    <p className="font-['Poppins'] text-[12px] font-light text-[#9F9F9F] mt-2">
                      12th Oct 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7">
        <button className="text-['Poppins', #9F9F9F, 16px] bg-[#FBEBB5] font-medium rounded-[10px] mr-2 mt-1 border-none py-3 px-5 cursor-pointer hover:bg-[#FBEBB5] hover:shadow-lg">
          1
        </button>
        <button className="text-['Poppins', #9F9F9F, 16px] bg-[#FFF9E5] font-medium rounded-[10px] mr-2 mt-1 border-none py-3 px-5 cursor-pointer hover:bg-[#FBEBB5] hover:shadow-lg">
          2
        </button>
        <button className="text-['Poppins', #9F9F9F, 16px] bg-[#FFF9E5] font-medium rounded-[10px] mr-2 mt-1 border-none py-3 px-5 cursor-pointer hover:bg-[#FBEBB5] hover:shadow-lg">
          3
        </button>
        <button className="text-['Poppins', #9F9F9F, 16px] bg-[#FFF9E5] font-medium rounded-[10px] mr-2 mt-1 border-none py-3 px-5 cursor-pointer hover:bg-[#FBEBB5] hover:shadow-lg">
          Next
        </button>
      </div>
    </>
  );
};

export default Blog;
