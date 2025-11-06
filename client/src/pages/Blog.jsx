import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import BlogComp from "../components/Blog/Blog";

const Blog = () => {
  return (
    <>
      <Navbar color="#FFFFFF" />
      <Banner title="Blog" />
      <BlogComp />
      <Features />
      <Footer />
    </>
  );
};

export default Blog;
