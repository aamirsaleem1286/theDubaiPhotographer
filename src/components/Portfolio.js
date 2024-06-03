import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const portfolioData = [
  {
    imgSrc: "/wedding.jpg",
    title: "Wedding",
  },
  {
    imgSrc: "/family.jpg",
    title: "Family",
  },
  {
    imgSrc: "/couple.jpg",
    title: "Couples",
  },
  {
    imgSrc: "/spor.jpg",
    title: "Homes",
  },
  {
    imgSrc: "/birthday.jpg",
    title: "Birthday",
  },
  {
    imgSrc: "/food.jpg",
    title: "Food",
  },
  {
    imgSrc: "/realstate.jpg",
    title: "Real Estate",
  },
  {
    imgSrc: "/travel.jpg",
    title: "Travel",
  },
];

const Portfolio = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {portfolioData.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="services"
      ref={ref}
      className="lg:w-1/4 md:w-1/2 p-4 w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 rounded overflow-hidden">
        <motion.img
          alt={item.title}
          className={`object-cover object-center w-full h-full block transition-transform duration-500 ${hovered ? 'brightness-125' : ''}`}
          src={item.imgSrc}
          initial={{ rotate: 0 }}
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 2 }}
        >
          {!hovered && (
            <h2 className="text-white title-font text-lg font-medium bg-black bg-opacity-80 p-2 rounded">
              {item.title}
            </h2>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
