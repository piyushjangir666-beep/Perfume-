import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";
import slider1 from "./images/slider2.png"
import slider2 from "./images/slider3.png"
import slider3 from "./images/slider.png"
import slider4 from "./images/slider4.png"

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0) 
  
  const slides = [slider1, slider2, slider3, slider4] 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length) 
    }, 3000)   
    
    return () => clearInterval(interval) 
  }, []) 

  const showCart = () => {  
    alert("Cart is empty!")
  }

  return (
    <>
      <div className="fixed top-0 w-full bg-[#b79b73] text-white text-center text-[12px] md:text-[13px] tracking-[2px] py-2 z-50 px-2">
        AVAIL FLAT 40% OFF ON YOUR FIRST PURCHASE WITH THE CODE - FIRST40
      </div>

      <header className="fixed top-[36px] w-full bg-[#f3f3f3] px-6 md:px-16 py-6 z-40">
        <div className="flex items-center justify-between">
          <div className="text-lg cursor-pointer">  
                   
            <Link to="/Search" className="hover:text-sky-400"><FaSearch /> </Link>
          </div>
 
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl tracking-[5px] font-medium text-[#b79b73]">
              SCENTIDO
            </h1>
            <p className="text-[10px] md:text-[12px] tracking-[4px] text-[#b79b73] mt-1">
              NICHE PERFUMERY
            </p>
          </div>

          <div className="flex gap-4 md:gap-6 text-lg cursor-pointer">
            <Link to="/login" className="hover:text-sky-400"><FaUser /></Link>
            <FaShoppingBag  onClick={showCart}/>
            <FaHeart />
          </div>  
        </div>   
        
        <nav className="flex justify-center gap-6 md:gap-10 mt-6 text-xs md:text-sm tracking-[2px] flex-wrap">
          <a href="#" className="hover:text-[#b79b73]">PERFUMES</a>
          <a href="#" className="hover:text-[#b79b73]">CANDLES</a> 
          <a href="#" className="hover:text-[#b79b73]">DISCOVERY SETS</a>
          <a href="#" className="hover:text-[#b79b73]">OILS</a>
          <a href="#" className="hover:text-[#b79b73]">BRANDS</a>
          <a href="#" className="hover:text-[#b79b73]">SERVICES</a>
          <a href="#" className="hover:text-[#b79b73]">ABOUT US</a>  
        </nav> 
      </header>     
      
      <div className="h-[200px] md:h-[180px]"></div>

      <div className="w-full relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <img  key={index}src={slide} alt={`slider-${index}`} className="w-full object-cover flex-shrink-0"/>
          ))}
        </div>
      </div>   
    </>
  ) 
}      
export default Header  
