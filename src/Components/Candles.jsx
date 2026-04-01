import React from 'react'
import perfumeImg from "../images/perfume11.png"
function Candles() {
  return (
   <>
    <div className="text-center py-6">
           
            <h1 className="text-3xl md:text-4xl tracking-[6px] font-serif mt-2">
              CANDLES
            </h1>
          </div>
          
          <div className="w-[90%] mx-auto">
            <img
              src={perfumeImg}
              alt="Perfume Banner"
              className="w-full h-[250px] md:h-[500px] object-cover rounded"
            />
          </div>
   </>
  )
}

export default Candles
