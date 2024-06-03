import React from 'react';

const Hero = () => {
  return (
    <div 
      style={{ backgroundImage: "url('/herosec.png')" }} 
      className="bg-cover bg-center 
      h-screen flex items-center justify-center"
    >
         <button style={{marginTop: "450px"}} className="text-black bg-[white] w-32 h-12 focus:outline-none rounded-lg">
          Start Here
          </button>
          <button style={{marginTop: "450px"}} className="text-white ml-4 bg-[black] w-32 h-12 focus:outline-none rounded-lg">
          How Its Work
          </button>
    </div>
  );
}

export default Hero;
