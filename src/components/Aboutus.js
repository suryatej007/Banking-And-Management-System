import React from "react"
import Back from "./Back"
import Heading from "./Heading"
import "./Aboutus.css"
import Navbar from "./Navbar"
const Aboutus = () => {
  return (
    <>
    <Navbar/>
      <section className='about'>
        <br/>
        <Back name='' title='About Us - Who We Are?'  />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='BANKING AND MANAGEMENT SYSTEM' /><br/>
            <br/>
            </div>
            <p>We are a trusted banking and finance system that provides a wide range of financial services to individuals and businesses. Our mission is to help our clients achieve their financial goals through innovative and tailored solutions.</p>
      <p>Our team of experienced professionals are dedicated to providing exceptional customer service and ensuring that our clients have access to the resources and tools they need to succeed. We offer a comprehensive range of services, including personal and business banking, investments, loans, and insurance.</p>
      <h2>Our Values</h2>
      
      <p>We believe in operating with the highest levels of integrity and ethics, and in delivering excellence in everything we do. We are constantly striving to innovate and improve our services, and we value collaboration and teamwork in order to achieve the best results for our clients.</p>
          </div>
          
      </section>
    </>
  )
}

export default Aboutus