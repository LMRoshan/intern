import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CartTable from "../components/Cart/Cart.jsx";

const Cart = () => {
  return (
    <>
      <Navbar color="#FFFFFF" />
      <Banner title="Cart" />
      <CartTable />
      <Features />
      <Footer />
    </>
  );
};

export default Cart;
