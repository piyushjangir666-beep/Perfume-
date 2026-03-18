import React from "react";

import d1 from "./images/d1.png"
import d2 from "./images/d2.png"
import d3 from "./images/d3.png"

const Discover = () => {
  const data = [
    {
      id: 1,
      image: d1,
      title: "PERFUMES",
    },
    {
      id: 2,
      image: d2,
      title: "DISCOVERY SETS",
    },
    {
      id: 3,
      image: d3,
      title: "CANDLES",
    },
  ] 

  return (
    <div className="w-full py-20 bg-white text-center">  
      <h2 className="text-3xl tracking-widest font-semibold">DISCOVER</h2>
      <p className="text-gray-500 mt-3">
        A myriad collections of scents, handpicked from around the world
      </p>  
      <div className="grid md:grid-cols-3 gap-10 mt-16 px-10">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center">  
            <div className="overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
            </div>   
            <h3 className="mt-6 tracking-widest text-sm">{item.title}</h3>  
            <button className="mt-3 border px-6 py-2 text-xs tracking-widest hover:bg-black hover:text-white transition">
              SHOP NOW
            </button>   
          </div>      
        ))}
      </div>
       
    </div>  
  ) 
}

export default Discover  