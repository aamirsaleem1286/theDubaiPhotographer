"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Page = () => {
  // Get current date and time
  const currentDate = new Date();
  const currentTime = currentDate.toTimeString().split(' ')[0].slice(0, 5); // Format as "HH:mm"

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',  // Added mobile field
    message: '',
    date: currentDate,
    time: currentTime
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date,
    }));
  };

  const handleTimeChange = (time) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      time: time,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, mobile, message, date, time } = formData;

    if (!name || !email || !mobile || !message || !date || !time) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Simulating form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', mobile: '', message: '', date: new Date(), time: currentTime });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 bg-slate-950 body-font relative">
        <div className="container px-5 py-8 mx-auto flex flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3 md:w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-0 mb-4 sm:mb-0 p-6 flex items-end justify-start relative"
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            />
            <div className="bg-black relative flex flex-wrap py-4 sm:py-6 rounded shadow-md">
              <div className="w-full px-4 sm:px-6 mb-2 sm:mb-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-[#fc9003]">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                </p>
              </div>
              <div className="w-full px-4 sm:px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a href="mailto:example@email.com" className="text-[#fc9003] leading-relaxed">aamirsaleem1285@gmail.com</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-2 sm:mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-[#fc9003]">+92 324 2846072</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 md:w-full bg-slate-950 flex flex-col w-full p-8"
          >
            <h2 className="text-white text-lg mb-4 font-medium title-font">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative">
                <label htmlFor="mobile" className="leading-7 text-sm text-white">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative">
                <label htmlFor="date" className="leading-7 text-sm text-white">
                  Select Date
                </label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative">
                <label htmlFor="time" className="leading-7 text-sm text-white">
                  Select Time
                </label>
                <TimePicker
                  onChange={handleTimeChange}
                  value={formData.time}
                  disableClock={true}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="text-white bg-[#fc9003] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300 ease-in-out"
              >
                Submit
              </motion.button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
            </p>
          </motion.div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Page;
