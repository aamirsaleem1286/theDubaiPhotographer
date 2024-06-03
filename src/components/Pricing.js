import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
const Pricing = () => {
  const pricingData = [
    {
      type: 'PRO',
      price: '1000 aed',
       features :[
        "30-minutes session",
        "24-Hour Turnaround",
        "Online Gallery",
        "High-Resolution Images",
        "Digital Delivery",
        "5 Edited Photos Included",
        "Single Location",
        "On Location or Studio",
        "Add-ons Available"
      ],
            popular: true
    },
    {
      type: 'BUSINESS',
      price: '2000 aed',
      features : [
        "one day session",
        "24-Hour Turnaround",
        "Online Gallery",
        "High-Resolution Images",
        "Digital Delivery",
        "10 Edited Photos Included",
        "Access to All Photos",
        "Single Location",
        "On Location or Studio",
        "Add-ons Available"
      ],      popular: true
    },
    {
      type: 'SPECIAL',
      price: '3000 aed',
      features : [
        "two days session",
        "24-Hour Turnaround",
        "Online Gallery",
        "High-Resolution Images",
        "Digital Delivery",
        "25 Edited Photos Included",
        "Access to All Photos",
        "Multiple Location",
        "On Location or Studio",
        "Add-ons Available"
      ],        popular: true
    }
  ];

  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  const headingVariants = {
    offscreen: {
      opacity: 0,
      y: -50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      }
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          className="flex flex-col text-center w-full mb-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
        >
          <h1 className="sm:text-4xl font-medium title-font mb-2 text-5xl text-[#000]">
            Pricing
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((pricing, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className={`h-full p-6 rounded-lg border-2 bg-black ${pricing.popular ? 'border-indigo-500' : 'border-gray-300'} flex flex-col relative overflow-hidden`}>
                {pricing.popular && (
                  <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-white">
                  {pricing.type}
                </h2>
                <h1 className="text-4xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>{pricing.price}</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">/month</span>
                </h1>
                {pricing.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {feature}
                  </p>
                ))}
                      <Link href="/booknow" >Book Now
                <button className={`flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none ${pricing.popular ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-700 hover:bg-gray-800'} rounded`}>
                  Book now
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button></Link>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably havenot heard of them jean shorts.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
