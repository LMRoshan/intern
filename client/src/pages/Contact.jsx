import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Footer from '../components/Footer'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
  return (
    <>
    <Navbar color="#FFFFFF"/>
    <Banner title="Contact" />
    <ContactForm/>
    <Features/>
    <Footer/>
    </>
  )
}

export default Contact
