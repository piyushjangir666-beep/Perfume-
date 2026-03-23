import React from "react"  
import perfume from "./images/perfume.png"
const InFocus = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div className="text-center md:text-left items-center">
          <h2 className="text-2xl md:text-3xl tracking-[6px] font-serif mb-6 text-center">
            IN FOCUS
          </h2>
   
          <p className="text-gray-600 leading-7 text-sm md:text-base mb-6">
            Influenced by traditional perfume rituals as the founder’s travel
            inspirations, OJAR is a fusion of fragrances from East and West.
            A balance between heritage and modernity combining the finest
            ingredients to master the craft of best body perfume making.
            OJAR founded by Sheikha Hind Bahwan, a widely respected Omani
            personality, originated from her passion for perfumery and the
            desire to pay tribute to the rich heritage and culture of Oman.
          </p>

          <button className="border border-gray-400 px-6 py-2 tracking-[3px] text-sm hover:bg-black hover:text-white transition duration-300 ">
            SHOP NOW
          </button> 
        </div>
        
        <div className="flex justify-center">
          <img src={perfume} alt="Perfume Collection"className="w-full max-w-md md:max-w-full object-contain"/>
        </div>  
      </div>
    </section>
  ) 
} 

export default InFocus   