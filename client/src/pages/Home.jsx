import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Home/HomeBanner";
import Category from "../components/Home/Category";
import TopPick from "../components/Home/TopPick";
import NewArival from "../components/Home/NewArival";
import Blog from "../components/Home/Blog";
import Footer from "../components/Footer";
import Instagram from "../components/Home/Instagram";

const Home = () => {
  return (
    <>
      <Navbar color="#FBEBB5" />
      <Banner />
      <Category />
      <TopPick />
      <NewArival/>
      <Blog/>
      <Instagram/>
      <Footer />
    </>
  );
};

export default Home;
