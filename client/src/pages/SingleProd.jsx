import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/SingleProd.jsx/Product";
import MoreDetails from "../components/SingleProd.jsx/MoreDetails";
import RelatedProd from "../components/SingleProd.jsx/RelatedProd";

const SingleProd = () => {
  return (
    <>
      <Navbar color="#FFFFFF" />
      <Product />
      <MoreDetails />
      <RelatedProd />
      <Footer />
    </>
  );
};

export default SingleProd;
