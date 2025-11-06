import React from 'react'
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import SignupForm from '../components/Account/SignupForm'

const Register = () => {
  return (
    <div>
      <Navbar color="#FFFFFF" />
      <Banner title="Register" />
      <SignupForm />
      <Features />
      <Footer />
    </div>
  )
}

export default Register
