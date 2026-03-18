import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#f5f4f2] py-16 px-10">

      <div className="grid md:grid-cols-4 gap-12">

        <div>
          <h3 className="tracking-widest mb-6 text-sm font-semibold">
            LEGAL
          </h3>
             
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Authenticity Policy</li>
            <li>Refund policy</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="tracking-widest mb-6 text-sm font-semibold">
            CUSTOMER SERVICE
          </h3>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>Contact Us</li>
            <li>My account</li>
            <li>FAQ'S</li>
            <li>Store Locator</li>
          </ul>
        </div>

        <div>
          <h3 className="tracking-widest mb-6 text-sm font-semibold">
            ABOUT US
          </h3>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className="tracking-widest text-sm font-semibold mb-6">
            SUBSCRIBE TO GET 5% OFF ON YOUR FIRST ORDER
          </h3>

          <div className="flex items-center border-b pb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 text-sm"
            />

            <HiOutlineMail className="text-xl cursor-pointer" />
          </div>

          <h3 className="tracking-widest mt-8 mb-4 text-sm font-semibold">
            EXPLORE MORE
          </h3>

          <div className="flex gap-4 text-xl">
            <FaInstagram className="cursor-pointer hover:text-gray-600" />
            <FaFacebookF className="cursor-pointer hover:text-gray-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-600" />
          </div>
        </div>

      </div>

      <div className="text-center mt-16 text-sm text-gray-600">
        © 2026 SCENTIDO
      </div>

    </footer>
  ) 
} 

export default Footer   