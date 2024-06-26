"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Pixel Studio captured our special day perfectly. The photos were stunning and the team was incredibly professional.",
    author: "John Doe",
    image: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/04/Types-of-Photography-Fashion-Vladimir-Yelizarov.jpg"
  },
  {
    text: "The creativity and attention to detail were amazing. We couldn’t be happier with our photos.",
    author: "Jane Smith",
    image: "data:image/jpeg;base64,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"

  },
  {
    text: "Absolutely fantastic service! The photos were beyond our expectations.",
    author: "Alice Johnson",
    image: "data:image/jpeg;base64,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"
  },
  {
    text: "Great work! The team was professional and captured amazing moments.",
    author: "Michael Brown",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYPWbCEnkt2Z_aO5-yFz6PlTdoKQB38LkIw&s"
  },
  {
    text: "The photos are fantastic. Highly recommend Pixel Studio!",
    author: "Emily Davis",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBDox39ubeWBKcvnjRzPyPY2-z9AUIlNv_w&s"
  },
  {
    text: "Wonderful experience and beautiful photos.",
    author: "Chris Wilson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6pvWsRXgoVxzqN8mQjEigGv0GzkwHCzKBQ&s"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); // Change between 0 and 1
    }, 5000); // Change set of testimonials every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <div className="container mx-auto my-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {currentTestimonials.map((testimonial, index) => (
      <AnimatePresence key={testimonial.author}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-950 p-4 rounded-lg shadow-md text-center"
        >
          <div className="w-24 h-24 mx-auto mb-4">
            <img
              className="w-full h-full rounded-full object-cover"
              src={testimonial.image}
              alt={testimonial.author}
            />
          </div>
          <p className="text-white italic text-sm md:text-base">{testimonial.text}</p>
          <p className="text-[#fc9003] mt-2 text-sm md:text-base">{testimonial.author}</p>
        </motion.div>
      </AnimatePresence>
    ))}
  </div>
</div>




  
  );
};

export default Testimonials;

