import React from "react";
import perfumeImg from "../images/perfume11.png"

import p1 from "../images/p1.png" 
import p2 from "../images/p2.png" 
import p3 from "../images/p3.png" 
import p4 from "../images/p4.png" 
import p5 from "../images/p5.png" 

const products = [
  {
    id: 1,
    name: "POMELO ASSOLUTO 100ML",
    price: "₹ 20,500.00",
    img: p1,
  },
  {
    id: 2,
    name: "TUTU (PINK) 100ML",
    price: "₹ 27,300.00",
    img: p2,
  },
  {
    id: 3,
    name: "RIALTO EXTRAIT",
    price: "₹ 35,200.00",
    img: p3,
  },
  {
    id: 4,
    name: "DUCHESSA EXTRAIT",
    price: "₹ 35,200.00",
    img: p4,
  },
  {
    id: 5,
    name: "GOSSIP NIGHT",
    price: "₹ 20,500.00",
    img: p5,
  },
  {
    id: 6,
    name: "TUTU BLANC",
    price: "₹ 20,500.00",
    img: p1,
  },
]  

function Perfume() {
  return (
    <div className="bg-white">
      
      <div className="text-center py-6">
       
        <h1 className="text-3xl md:text-4xl tracking-[6px] font-serif mt-2">
          PERFUME
        </h1>
      </div>

      <div className="w-[90%] mx-auto">
        <img
          src={perfumeImg}
          alt="Perfume Banner"
          className="w-full h-[250px] md:h-[500px] object-cover rounded"
        />
      </div>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center py-6 gap-4">
        
        <p className="text-gray-500 text-sm">
          Showing 275 results for "Perfume"
        </p>

        <div className="flex items-center gap-3">
          
          <button className="border p-2 hover:bg-gray-100">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
            </svg>
          </button>

          <button className="border p-2 hover:bg-gray-100">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <select className="border px-4 py-2 text-gray-600 outline-none">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex gap-8">

        <div className="w-[20%] hidden md:block">
          {[
            "PRICE, MRP: ₹",
            "BRANDS",
            "SUMMER EDIT",
            "OLFACTIVE GROUPS",
            "CONCENTRATION",
            "GENDER",
            "INGREDIENTS",
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-3 text-sm cursor-pointer"
            >
              <span className="text-gray-600">{item}</span>
              <span>+</span>
            </div>
          ))}
        </div>

        <div className="w-full md:w-[80%]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {products.map((item) => (
              <div key={item.id} className="text-center group">

        <img  src={item.img}alt={item.name}className="mx-auto h-[150px] object-contain group-hover:scale-105 transition"/>

                <h3 className="text-[12px] tracking-widest mt-4 text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-[11px] mt-1">
                  SCENTIDO
                </p>
                <p className="text-[12px] mt-2">
                  MRP: {item.price}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>  

    </div>
  )  
}

export default Perfume 