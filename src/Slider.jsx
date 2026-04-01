import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag, FaHeart, FaTimes } from "react-icons/fa";

import slider1 from "./images/slider2.png"
import slider2 from "./images/slider3.png"
import slider3 from "./images/slider.png"
import slider4 from "./images/slider4.png"

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [slider1, slider2, slider3, slider4] 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length) 
    }, 3000)   
      
    return () => clearInterval(interval) 
  }, [slides.length]) 
  
  return (
   <>
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
  
export default Slider
  