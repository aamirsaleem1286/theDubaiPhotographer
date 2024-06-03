"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    img: "/img1.jpg",
    heading: "Capture Your Moments with Professional Photography",
    para:"Experience the art of photography with our expert team. From breathtaking landscapes to intimate portraits, we capture the essence of every moment with precision and creativity. Let us turn your special occasions into timeless memories with our professional and personalized photography services."
  },
  {
    img: "/img3.jpg",
    heading: "Capture Your Moments with Professional Photography",
    para:"Experience the art of photography with our expert team. From breathtaking landscapes to intimate portraits, we capture the essence of every moment with precision and creativity. Let us turn your special occasions into timeless memories with our professional and personalized photography services."
  },
  {
    img: "/img2.jpg",
    heading: "Capture Your Moments with Professional Photography",
    para:"Experience the art of photography with our expert team. From breathtaking landscapes to intimate portraits, we capture the essence of every moment with precision and creativity. Let us turn your special occasions into timeless memories with our professional and personalized photography services.",
  }
];

const ImageCart = () => {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevSlider) => (prevSlider + 1) % data.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col md:flex-row px-5 py-8 items-center">
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <div className="relative">
            <Image
              src={data[slider].img}
              alt="hero"
              className="object-cover object-center rounded w-full md:w-3/4"
              width={450}
              height={250}
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:pl-8 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            className="text-4xl mb-4 font-medium text-[#fc9003]"
            initial={{ x: -100, rotate: 0 }}
            animate={{ x: 0, rotate: 360 }}
            transition={{ duration: 2 }}
          >
            Make It Real
          </motion.h1>
          <h1 className="text-4xl mb-4 font-medium text-[#fc9003]">
            {data[slider].heading}
          </h1>
          <p className="leading-relaxed text-white mb-4">
            {data[slider].para}
          </p>
          <Link href="/booknow">
            <button className="inline-flex bg-[#fc9003] text-white hover:text-black hover:bg-[#f2d5a0] border-0 py-2 px-6 focus:outline-none rounded-lg text-lg">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImageCart;
