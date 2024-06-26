import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="text-gray-600 bg-custom-gray body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto" style={{letterSpacing:" 1.6px",fontSize: "12px",fontFamily: "monospace"}}>
            PARIS PHOTO SHOOTS AND WEDDINGS
          </p>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4" style={{fontFamily:"cursive"}}>
            PHOTOGRAPHY SERVICES
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-[150px] h-[3px] rounded-full bg-black inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <Image alt="images" src="/couple.jpg" width={400} height={400} className="object-cover rounded-lg" />
            <div className="flex-grow mt-4">
              <p className="leading-relaxed text-base"style={{maxWidth: "94%" ,fontFamily: "cursive"}}>
                First trip to Paris, engagement, honeymoon and anniversary. Get incredible couples photos in Paris.
              </p>
              <button 
  style={{ width: "200px",fontFamily: "fantasy",fontSize: "20px" }} 
  className="mt-4 text-white hover:text-black hover:bg-white bg-black border border-black w-full sm:w-48 h-12 focus:outline-none rounded-full">
               <a href="tel:+971569667552">Book now</a> 
             </button> 
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <Image alt="images" src="/proposal.jpg" width={400} height={400} className="object-cover rounded-lg" />
            <div className="flex-grow mt-4">
            <p className="leading-relaxed text-base"style={{maxWidth: "94%" ,fontFamily: "cursive"}}>
            If you are proposing in Paris, get a photographer to guide you and capture the big moment.
              </p>
              <button 
  style={{ width: "200px",fontFamily: "fantasy",fontSize: "20px" }} 
  className="mt-4 text-white hover:text-black hover:bg-white bg-black border border-black w-full sm:w-48 h-12 focus:outline-none rounded-full">                <a href="https://wa.me/+971569667552" target="_blank" rel="noopener noreferrer">Book now</a>
              </button>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <Image alt="images" src="/wedding.jpg" width={400} height={400} className="object-cover rounded-lg" />
            <div className="flex-grow mt-4">
            <p className="leading-relaxed text-base"style={{maxWidth: "92%" ,fontFamily: "cursive"}}>
            Eloping or getting married in Paris? Your wedding photos will be memorable.
              </p>
              <button 
  style={{ width: "200px",fontFamily: "fantasy",fontSize: "20px" }} 
  className="mt-4 text-white hover:text-black hover:bg-white bg-black border border-black w-full sm:w-48 h-12 focus:outline-none rounded-full">                <a href="https://wa.me/+971569667552" target="_blank" rel="noopener noreferrer">Book now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
