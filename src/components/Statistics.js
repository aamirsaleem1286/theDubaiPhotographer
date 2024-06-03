import React from 'react';
import CountUp from 'react-countup';
import { HiPhotograph } from "react-icons/hi";

const Statistics = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Our Achievements in Numbers
          </h1>
          <p className="text-base leading-relaxed mx-auto text-white">
            Over the years, we have captured countless moments, completed numerous projects, and delighted many clients. Here are some highlights of our journey so far.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center text-white">
          <div className="p-4 sm:w-1/3 w-1/2">
            <div className="border-2 border-gray-200 p-6 rounded-lg bg-gray-800">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                <CountUp end={2700} duration={4} />
              </h2>
              <p className="leading-relaxed">Photos Taken</p>
            </div>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <div className="border-2 border-gray-200 p-6 rounded-lg bg-gray-800">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                <CountUp end={1800} duration={4} />
              </h2>
              <p className="leading-relaxed">Projects Completed</p>
            </div>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <div className="border-2 border-gray-200 p-6 rounded-lg bg-gray-800">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                <CountUp end={1500} duration={4} />
              </h2>
              <p className="leading-relaxed">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
