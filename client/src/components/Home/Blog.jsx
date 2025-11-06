import React from "react";
import BlogPic from "../../assets/blog.jpg";
import BlogPic1 from "../../assets/blog1.jpg";
import BlogPic2 from "../../assets/blog2.jpg";

import { GoClock } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Blog = () => {
  const BlogCard = (img) => (
    <div className="max-w-sm bg-transparent rounded-lg">
      <div className="w-[300px] h-[300px] overflow-hidden rounded-lg">
        <img
          className={`w-full h-full object-contain scale-150`}
          src={img}
          alt={img}
        />
      </div>
      <div className="p-5 text-center">
        <p className="mb-3 font-light text-black text-[16px]">
          Going all-in with millennial design
        </p>
        <Link
          to="/underconstruction"
          className="appearance-none border-0 bg-transparent p-0 mt-5 mb-3 leading-none font-['Poppins'] text-black text-[20px] font-normal hover:underline underline-offset-9 hover:font-medium hover:cursor-pointer block m-auto"
        >
          View More
        </Link>
        <div className="flex justify-center gap-x-3">
          <div className="flex gap-x-1 mt-3">
            <GoClock className="text-[#9F9F9F] text-[16px]" />
            <p className="font-['Poppins'] font-light text-[#9F9F9F] text-[12px]">
              5 min
            </p>
          </div>
          <div className="flex gap-x-1 mt-3">
            <CiCalendar className="text-[#9F9F9F] text-[16px]" />
            <p className="font-['Poppins'] font-light text-[#9F9F9F] text-[12px]">
              12th Oct 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-[#FFFFFF] p-1">
        <div className="head">
          <h1 className="font-['Poppins'] font-normal text-[36px] leading-none text-center pt-20 mb-3">
            Our Blogs
          </h1>
          <p className="font-['Poppins'] font-light text-[#9F9F9F] text-center text-[16px]">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>

        <div className="flex flex-wrap justify-around mt-10 gap-y-10">
          {BlogCard(BlogPic)}
          {BlogCard(BlogPic1)}
          {BlogCard(BlogPic2)}
        </div>
        <Link
          to="/blog"
          className="appearance-none border-0 bg-transparent p-0 mt-5 mb-3 leading-none font-['Poppins'] text-black text-[20px] font-normal hover:underline underline-offset-9 hover:font-medium hover:cursor-pointer text-center block m-auto"
        >
          View All Post
        </Link>
      </div>
    </>
  );
};

export default Blog;
