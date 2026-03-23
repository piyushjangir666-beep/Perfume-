import React from 'react'
import { Gift, Truck, SprayCan } from "lucide-react";

function  Exclusive() { 
  return (  
    <div>
      <div className="bg-white py-16 px-10 text-center">
      
      <h2 className="text-center text-2xl tracking-[6px] font-medium mb-12">
        UNLOCK EXCLUSIVE ONLINE BENEFITS
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

        <div className="flex flex-col items-center">
          <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center mb-6">  
            <Gift size={40} className="text-gray-600" />
          </div>   
          <p className="text-lg">
            Add a Special Touch with Gift Wrapping
          </p>
        </div>
    
        <div className="flex flex-col items-center">
          <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center mb-6">
            <Truck size={40} className="text-gray-600" />
          </div>
          <p className="text-lg">
            Enjoy Free Shipping on All Orders
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center mb-6">
            <SprayCan size={40} className="text-gray-600" />
          </div>
          <p className="text-lg">
            Complimentary Vials with Every Order
          </p>
        </div>  
      
      </div>
    </div>
    </div>    
  )   
}    
 
export default Exclusive
