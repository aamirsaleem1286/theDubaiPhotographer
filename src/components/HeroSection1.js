import Image from 'next/image'
import React from 'react'

const HeroSection1 = () => {
  return (
    <section className="text-gray-600   body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
        PHOTOGRAPHY SERVICES        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
        PARIS PHOTO SHOOTS AND WEDDINGS
        </p>
        <div className="flex mt-6 justify-center">
        <div className="w-[150px] h-[3px] rounded-full bg-black inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <Image src="/lifestyle.jpg"width={400}height={50}/>
          <div className="flex-grow">     
            <p className="leading-relaxed text-base">
            First trip to Paris, engagement, honeymoon and anniversary. Get incredible couples photos in Paris.</p>
            <button className="mt-4 text-white bg-black rounded-lg w-full h-12 focus:outline-none"> 
            <a href="tel:+971569667552" >
          Book now</a>
          </button>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <Image src="/family.jpg"width={400}height={50}/>
          {/* <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"> */}
            {/* <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx={6} cy={6} r={3} />
              <circle cx={6} cy={18} r={3} />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg> */}
          {/* </div> */}
          <div className="flex-grow">
            {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              The Catalyzer
            </h2> */}
            <p className="leading-relaxed text-base">
            If you are proposing in Paris, get a photographer to guide you and capture the big moment.
            </p>
            <button className="mt-4 text-white bg-black rounded-lg w-full h-12 focus:outline-none"> 
            <a href="tel:+971569667552" >
          Book now</a>
          </button>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <Image src="/prewedding.jpg"width={400}height={50}/>

          {/* <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div> */}
          <div className="flex-grow">
            {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Neptune
            </h2> */}
            <p className="leading-relaxed text-base">
            Eloping or getting married in Paris ? Your wedding photos will be memorable.
            </p>
            <button className="mt-4 text-white bg-black rounded-lg w-full h-12 focus:outline-none"> 
            <a href="tel:+971569667552" >
          Book now</a>
          </button>
          </div>
        </div>
      </div>
   
    </div>
  </section>
  
  )
}

export default HeroSection1
