import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Filter from "../components/Filter";
import Products from "../components/Shop/Products";
import Footer from "../components/Footer";
import Features from "../components/Features";

const Shop = () => {
  return (
    <>
      <Navbar color="#FFFFFF" />
      <Banner title="Shop" />
      <Filter />
      <Products />
      <Features />
      <Footer />
    </>
  );
};

export default Shop;
