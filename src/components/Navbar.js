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
      <nav className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-white text-black shadow-md' :  'bg-transparent text-white'}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <ul className="hidden md:flex space-x-24 text-2xl text-bold">
            <li><Link href="/" className=" hover:text-[#fc9003]">Home</Link></li>
            <li><Link href="/about" className="] hover:text-[#fc9003]">About</Link></li>
          </ul>

          <div className="flex justify-center">
            <Link href="/" className=" text-xl font-bold">
              <h1 className='text-bold text-xl '><i>The Dubai Photographer</i></h1>
              {/* <img src="/logo.png" width={92} height={45} alt="Logo"/> */}
            </Link>
          </div>

          <ul className="hidden md:flex space-x-24 text-2xl text-bold">
            <li><Link href="/services" className=" hover:text-[#fc9003]">Services</Link></li>
            <li><Link href="/booknow" className="  hover:text-[#fc9003]">Book Now</Link></li>
          </ul>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black`}>
          <ul className="flex flex-col items-center">
            <li><Link href="/" className="text-white hover:text-[#fc9003] block py-2">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-[#fc9003] block py-2">About</Link></li>
            <li><Link href="/services" className="text-white hover:text-[#fc9003] block py-2">Services</Link></li>
            <li><Link href="/booknow" className="text-white hover:text-[#fc9003] block py-2">Book Now</Link></li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-col text-white sm:flex-row items-center justify-center" style={{ marginTop: "200px" }}>
    <h1 className='text-bold text-3xl'>UNFORGETTABLE PHOTOS IN PARIS</h1><br/>
  <p className='text-xl text-bold'>Photos Of Your Paris Experience You Will Treasure Forever…
be warned your friends might become a bit jealous.</p><br/>
  <button className="text-black hover:text-white hover:bg-black bg-white w-full sm:w-32 mb-4 sm:mb-0 sm:mr-4 h-12 focus:outline-none rounded-lg">
    Start Here
  </button>
  <button className="text-white hover:text-black hover:bg-white bg-black w-full sm:w-32 h-12 focus:outline-none rounded-lg">
    How It Works
  </button>
</div>
    </div>
  )
}

export default Navbar
