"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <>
      <Navbar/>
      <section className="text-gray-600 body-font bg-custom-gray">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#fc9003]">
              About Pixels        
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              About Pixels
              Welcome to Pixels Studio Istanbul, your ultimate photography and videography solution in Istanbul, Dubai, and Pakistan. Our exceptional service and timeless visuals are designed to capture your special moments and create memories that last a lifetime. Our team of expert photographers and videographers are dedicated to providing you with an unforgettable experience, and we pride ourselves on being different from our competitors. We believe that every client is unique and deserves a personalized approach to their photography and videography needs. Let us pixel you and bring your vision to life. Contact us today to schedule your session.
              <br/><br/>
              Led by Ali Hamza, our Creative Head, our studio stands as a beacon of creativity and expertise in the field. With an eye for innovation and an unparalleled dedication to our craft, we ensure that your memories are transformed into visual stories that resonate for generations.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }} 
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/aboutsec.jpg"
              width={400}
              height={350}
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default page
