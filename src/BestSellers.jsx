import React from "react";

import p1 from "./images/p1.png" 
import p2 from "./images/p2.png" 
import p3 from "./images/p3.png" 
import p4 from "./images/p4.png" 
import p5 from "./images/p5.png" 

const products = [
  { 
    id: 1,
    image: p1,
    name: "WHITE AMBER",
    brand: "CREED",
    price: "₹ 52,400.00",
  },
  {
    id: 2,
    image: p2,
    name: "BOUQUET DE LA REINE",
    brand: "FLORIS LONDON",
    price: "₹ 11,200.00",
  },
  {
    id: 3,
    image: p3,
    name: "DOLCE PASSIONE",
    brand: "PANTHEON ROMA",
    price: "₹ 26,000.00",
  },
  {
    id: 4,
    image: p4,
    name: "FRANGIPANI",
    brand: "ORMONDE JAYNE",
    price: "₹ 23,500.00",
  },
  {
    id: 5,
    image: p5,
    name: "LEATHER ROUGE",
    brand: "MILLER HARRIS",
    price: "₹ 20,800.00",
  },
]

function BestSellers() {
  return (
    <div className="bg-white py-16 px-6 text-center">

      <h2 className="text-2xl tracking-[4px] mb-12">
        BEST SELLERS
      </h2>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

        {products.map((item) => (
          <div key={item.id}>

            <div className="relative overflow-hidden group">

              <img src={item.image} alt={item.name} className="w-full h-[250px] object-contain transition duration-500 group-hover:scale-105"/>

              <div className="absolute left-0 w-full bg-black text-white py-2 text-[12px] tracking-[2px] cursor-pointer bottom-[-50px] ">
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
  ) 
}

export default BestSellers;