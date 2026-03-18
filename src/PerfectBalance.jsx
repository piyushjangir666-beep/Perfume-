import React from 'react'

import herImg from "./images/her.png" 
import himImg from "./images/him.png" 
function PerfectBalance() {
  return (
    <>   
     <div className="bg-white py-16 px-6 text-center">

      <h2 className="text-center text-3xl tracking-[6px] mb-16 font-serif">
        THE PERFECT BALANCE
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        <div className="bg-[#ffffff] p-8 relative flex flex-col items-center">


          <img src={herImg} className="w-[320px]" />

          <button className="mt-8 border border-gray-400 px-8 py-2 tracking-[4px] hover:bg-black hover:text-white transition">
            BUY NOW
          </button>

        </div>

        <div className="bg-[#ffffff] p-8 relative flex flex-col items-center">


          <img src={himImg} className="w-[320px]" />
     

          <button className="mt-8 border border-gray-400 px-8 py-2 tracking-[4px] hover:bg-black hover:text-white transition">
            BUY NOW
          </button>

        </div>

      </div>
    </div>
    </>
  )
}

export default PerfectBalance
