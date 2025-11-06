import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Billing from "../components/Cart/Billing";

const Checkout = () => {
  return (
    <>
      <Navbar color="#FFFFFF" />
      <Banner title="Checkout" />
      <Billing/>
      <Features />
      <Footer />
    </>
  );
};

export default Checkout;
