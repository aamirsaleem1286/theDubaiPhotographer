"use client"
import ClientPage from '@/components/Client'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import Statistics from '@/components/Statistics'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Portfolio/>
      <Statistics/>
      <ClientPage/>
      <Pricing/>
    </div>
  )
}

export default page
