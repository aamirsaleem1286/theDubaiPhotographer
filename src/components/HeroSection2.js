import Image from 'next/image'
import React from 'react'

const HeroSection2 = () => {
  return (
    <>
    <section className="text-gray-600 bg-custom-gray  body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        bonjour,
          <br className="hidden lg:inline-block" />
          JE MAPELLE FRAN!
        </h1>
        <p className="mb-8 leading-relaxed">
        I started the Paris Photographer in 2013. It wasn’t long before my passion for divine Parisian photography and desire to show Paris in a unique way, led me to become one of the most wanted artists in town. And luckily, I was blessed to also to work with some amazing clients.


This success, for which I am deeply grateful, has also attracted talented artists wishing to join the Paris Photographer team. I am excited to have had the opportunity to handpick Parisian photographers that share my artistic vision and desire to make people happy. We are now 8 photographers in The Paris Photographer team and 3 videographers.
        </p>
       
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="/owner.jpg"
          width={400}
          height={350}
        />
      </div>
    </div>
  </section>
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
       className="object-cover object-center rounded"
       alt="hero"
       src="/couple2.jpg"
       width={400}
       height={350}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      COUPLE PHOTOSHOOT 
        <br className="hidden lg:inline-block" />
        IDEAS – TWO HOURS SHOOT      </h1>
      <p className="mb-8 leading-relaxed">
      If your dream is to get divine pictures in Paris, then you are in the right place. Let’s explore together why spending at least two hours in the city of love, with a photographer in Paris whom you trust and like will help you get photos that look like they belong in a magazine. You will also
      </p>
    </div>
  </div>
</section>





  </>  
  )
}

export default HeroSection2
