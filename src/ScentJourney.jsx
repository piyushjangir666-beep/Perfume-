import React from 'react';

import p11 from "./images/p11.png";
import p22 from "./images/p22.png";
import p33 from "./images/p33.png";
import p44 from "./images/p44.png";
import p55 from "./images/p55.png";

const ScentJourney = () => {
  const scents = [
    { 
        name: 'IRIS', 
        img: p11 
    },
    { 
        name: 'OUD', 
        img: p22 
    },
    { 
        name: 'SAFFRON', 
        img: p33 
    },
    { 
        name: 'ROSE', 
        img: p44 
    
    },
    { 
        name: 'VETIVER', 
        img: p55 
    },
    { 
        name: 'GRAPEFRUIT', 
        img: p11 
    } 
  ] 

  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto bg-white"> 
      <h2 className="text-center text-xl md:text-2xl font-serif tracking-[0.3em] mb-16 text-gray-800 uppercase">
        ELEVATE YOUR SCENT JOURNEY
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {scents.map((scent, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer">
            
            <div className="w-full aspect-[11/7] overflow-hidden mb-6 bg-gray-100">
              <img src={scent.img} alt={scent.name} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
            </div>

            <h3 className="text-sm md:text-base font-serif tracking-[0.2em] mb-5 text-gray-900">
              {scent.name}
            </h3>

            <button className="border border-gray-200 px-8 py-2 text-[10px] tracking-[0.25em] text-gray-600 uppercase transition-all duration-300 hover:bg-black hover:text-white hover:border-black">
              EXPLORE
            </button>   
          </div>
        ))}
      </div>   
    </section>   
  ) 
} 
  
export default ScentJourney 