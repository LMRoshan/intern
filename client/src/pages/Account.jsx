import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Forms from "../components/Account/Forms";

const Account = () => {
  return (
    <>
      <Navbar color="#FFFFFF" />
      <Banner title="My Account" />
      <Forms />
      <Features />
      <Footer />
    </>
  );
};

export default Account;
