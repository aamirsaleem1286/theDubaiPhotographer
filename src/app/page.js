"use client"

import { FaWhatsapp } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import Testimonials from '@/components/Testimonials'; 
import Portfolio from '@/components/Portfolio'; 
import ImageCart from '@/components/ImageCart';
import { useState } from 'react';
import Pricing from '@/components/Pricing';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import ClientPage from '@/components/Client';
import HeroSection from '@/components/HeroSection';
import HeroSection1 from '@/components/HeroSection1';
import HeroSection2 from '@/components/HeroSection2';
import Footer from '@/components/Footer';



export default function Home() {
  const [loading, setLoading] = useState(true);

  const timeLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  timeLoading(); 

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <div className="relative bg-cover bg-center h-min-screen">
          <Navbar/>
          <HeroSection/>
          <HeroSection1/>
          <Pricing/>
          <HeroSection2/>
          <Footer/>
              {/* <ImageCart/>
          <Portfolio/>
          <Statistics/>
          <ClientPage/>
          <Pricing/>
          <Testimonials /> */}
          <a href="https://wa.me/+923242846072" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center">
            <FaWhatsapp className="h-6 w-6 mr-2" />
            WhatsApp
          </a>

          <a href="tel:+923242846072" className="fixed bottom-4 left-4 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center">
            <IoCall className="h-6 w-6 mr-2" />
            Call Us Now
          </a>
        </div>
      )}
    </>
  );
}
