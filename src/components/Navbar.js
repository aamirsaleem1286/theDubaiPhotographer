import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      style={{ backgroundImage: "url('/bg.jpg')" }} 
      className="bg-cover bg-center h-screen flex flex-col justify-between"
    >
      <nav className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <ul className={`hidden md:flex space-x-24 text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            <li><Link href="/" className="hover:text-[#fc9003]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#fc9003]">About</Link></li>
          </ul>

          <div className="flex justify-center">
            <Link href="/" className="text-xl font-bold">
              <h1 className="text-center text-sm" style={{ marginLeft: "110px", marginTop: "-10px" ,fontFamily:'__Libre_Baskerville_63cb14',fontSize:"17px"}}>
                <span className={`text-xl ${isScrolled ? 'text-black' : 'text-gray-100'}`}>The</span> <br />
                <span className={`font-bold text-xl ${isScrolled ? 'text-black' : 'text-white '}`} style={{fontSize:"17px"}}>Dubai</span> <br />
                <span className={` text-xl ${isScrolled ? 'text-black' : 'text-gray-100'}`}>Photographer</span>
              </h1>
            </Link>
          </div>

          <ul className={`hidden md:flex space-x-24 text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            <li><Link href="/services" className="hover:text-[#fc9003]">Services</Link></li>
            <li><Link href="/booknow" className="hover:text-[#fc9003]">Book Now</Link></li>
          </ul>

          <div className="md:hidden">
            <button onClick={toggleMenu} className={`${isScrolled ? 'text-black' : 'text-white'} focus:outline-none`}>
              <svg className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> */}
              </svg>
            </button>
          </div>
        </div>

        <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} md:hidden bg-[#3a3a3a]`}>
          <ul className="flex flex-col items-center">
            <li><Link href="/" className="text-white hover:text-[#fc9003] block py-2">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-[#fc9003] block py-2">About</Link></li>
            <li><Link href="/services" className="text-white hover:text-[#fc9003] block py-2">Services</Link></li>
            <li><Link href="/booknow" className="text-white hover:text-[#fc9003] block py-2">Book Now</Link></li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-col text-white sm:flex-row items-center justify-center mt-48 sm:mt-32 space-y-4 sm:space-y-0 sm:space-x-4 px-4">
        <div className="text-center sm:text-left">
          <p style={{letterSpacing: "5px" ,fontFamily:'cursive'}} className="text-sm text-gray-200 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto fontSize ">
          ‘THE FRIENDLIEST PARIS PHOTOGRAPHERS’

          </p>
          <h1 className="font-medium  mt-4 text-xl mb-2"style={{fontSize:"30px",fontFamily:'monospace'}}>UNFORGETTABLE PHOTOS IN PARIS  </h1>
          <p className="text-sm mt-4 text-gray-200 font-bold" style={{fontSize:"13px",opacity:1.7,letterSpacing:"3px",fontFamily:'cursive'}}>
          Photos Of Your Paris Experience You Will Treasure Forever…
          be warned your friends
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
        <button 
  style={{ width: "200px" }} 
  className="mt-12 text-white hover:text-black hover:bg-white bg-black border border-black w-full sm:w-48 h-12 focus:outline-none rounded-full">
  Start Here
</button>

          <button className="mt-6 text-black hover:text-white hover:bg-black bg-white   w-full sm:w-48 h-12 focus:outline-none rounded-full border-white">
            How It Works
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
