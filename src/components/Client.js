import Image from 'next/image';
import { useState, useEffect } from 'react';

const ClientPage = () => {
  const clientImages = [
    { src: '/client1.jpeg', alt: 'Client 1' },
    { src: '/client2.jpeg', alt: 'Client 2' },
    { src: '/client3.jpeg', alt: 'Client 3' },
    { src: '/client4.jpeg', alt: 'Client 4' },
    { src: '/client5.jpeg', alt: 'Client 5' },
    { src: '/client6.jpeg', alt: 'Client 6' },
    { src: '/client7.jpeg', alt: 'Client 7' }
  ];

  const [animate, setAnimate] = useState(false);

  const toggleAnimation = () => {
    setAnimate(!animate);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      toggleAnimation();
    }, 2000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="bg-slate-950">
      <h1 className='text-white text-3xl text-center'>Our Clients</h1><br/>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {clientImages.map((client, index) => (
          <div
            key={index}
            className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ${animate ? 'animate-slide-left' : ''}`}
          >
            <Image src={client.src} alt={client.alt} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientPage;
