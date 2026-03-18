import React from 'react'

import pp1 from "./images/pp1.png" 
import pp2 from "./images/pp2.png" 
import pp3 from "./images/pp3.png" 
import pp4 from "./images/pp4.png" 
import pp5 from "./images/pp5.png" 
import pp6 from "./images/pp6.png"
import pp7 from "./images/pp7.png"
import pp8 from "./images/pp8.png"
import pp9 from "./images/pp9.png"
import pp10 from "./images/pp10.png"


const products = [
  {
    id: 1,
    image: pp1,
    name: "NÉROLI SAUVAGE",
    brand: "CREED",
    price: "₹ 40,500.00",   
  },
  {
    id: 2,
    image: pp2,
    name: "NEROLI ORANGER",
    brand: "MATIERE PREMIERE",
    price: "₹ 24,000.00",
  },
  {
    id: 3,
    image: pp3,
    name: "TANGER",
    brand: "ORMONDE JAYNE",
    price: "₹ 13,500.00",
  },
  {
    id: 4,
    image: pp4,
    name: "NOIR PATCHOULI",
    brand: "HISTOIRES DE PARFUMS",
    price: "₹ 17,500.00",
  },
  {
    id: 5,
    image: pp5,
    name: "WANDER THROUGH THE PARKS",
    brand: "MILLER HARRIS",
    price: "₹ 15,000.00",
  },
  {
    id: 6,
    image: pp6,
    name: "IL SENTIERO DEGLI DEI",
    brand: "NOBILE 1942",
    price: "₹ 12,200.00",
  },
  {
    id: 7,
    image: pp7,
    name: "BERGAMOTTO DI POSITANO",
    brand: "FLORIS LONDON",
    price: "₹ 18,300.00",
  },
  {
    id: 8,
    image: pp8,
    name: "MALLOW EXTRAIT",
    brand: "SCENTED",
    price: "₹ 20,000.00",
  },
  {
    id: 9,
    image: pp9,
    name: "MATAHARI DI BALI",
    brand: "BERDOUES",
    price: "₹ 10,000.00",
  },
  {
    id: 10,
    image: pp10,
    name: "OVERDOSE",
    brand: "OMAN LUXURY",
    price: "₹ 16,500.00",
  }    
]  

function Summer() {
  return (
   <>
   <div className="bg-white py-16 px-6 text-center">

      <h2 className="text-2xl tracking-[4px] mb-12">
        SUMMER EDIT
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

        {products.map((item) => (
          <div key={item.id}>

            <div className="relative overflow-hidden group">

              <img
                src={item.image} 
                alt={item.name}
                className="w-full h-[250px] object-contain transition duration-500 group-hover:scale-105"
              />

              <div className="absolute left-0 w-full bg-[#b79b73] text-white py-2 text-[12px] tracking-[2px] cursor-pointer bottom-[-50px] transition-all duration-500 group-hover:bottom-0">
                QUICK VIEW
              </div>
    
            </div>

            <h3 className="text-sm tracking-[2px] mt-4">
              {item.name}
            </h3>

            <p className="text-xs tracking-[2px] text-gray-500">
              {item.brand}
            </p>

            {item.tag && (
              <p className="text-sm mt-1">
                {item.tag}
              </p>
            )}

              <p className="text-sm mt-1">
              MRP: {item.price}
            </p>     
          
          </div>     
        ))}

      </div>
    </div>  
   </>
  )
}

export default Summer
