import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className='w-[70%] h-[100%] flex flex-col items-center justify-center font-Nunito'>
        <div className='h-[30%] w-[100%] flex justify-between'>
          <span className='text-3xl font-bold font-poppins'>Do you have Something <br/> to Sell through Us?</span>
          <button className='button h-[50%] w-[20%]'> Sell your car today</button>
        </div>
        <hr className='w-[100%] h-[0.1rem] bg-white my-2 border-none rounded-md'/>
        <div className='h-[70%] w-[100%] flex justify-between'>
          <ul className="decoration-none">
            <li className='text-[#afafaf] font-semibold'>Overview</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Cars</li>
            <li>Testimonials</li>
            <li>FAQ's</li>
          </ul>
          <ul className="decoration-none">
            <li className='text-[#afafaf] font-semibold'>Explore</li>
            <li>Blogs</li>
            <li>Press mentions</li>
            <li>Careers</li>
          </ul>
          <div className='w-[50%] h-[90%] flex flex-col justify-around text-black bg-white m-0 rounded-lg px-5 py-2 gap-2'>
            <span className='w-[70%] flex items-center gap-3'>
              <FaLocationDot className='w-[10%] text-[#dc3545] text-xl '/>
              <span className='w-[90%]'>7th b main Btm 1st stage Bangalore Karnataka 560029</span>
            </span>
            <span className='w-[70%] flex items-center gap-3'>
              <IoMail className='w-[10%] text-[#dc3545] text-xl '/>
              <span className='w-[90%]'>hello@email.com</span>
            </span>
            <span className='w-[70%] flex items-center gap-3'>
              <FaPhoneAlt className='w-[10%] text-[#dc3545] text-lg '/>
              <span className='w-[90%]'>+91 8310955920</span>
            </span>
          </div>
        </div>
        <hr className='w-[100%] h-[0.1rem] bg-white my-2 border-none rounded-md'/>
        <div className='w-[100%] h-[10%] flex justify-between '>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <div className='w-[20%] flex justify-between'>
            <span className="w-[20%] h-[100%] content-center rounded-full bg-[#dc3545]"><FaFacebookF className='mx-auto'/></span>
            <span className="w-[20%] h-[100%] content-center rounded-full bg-[#dc3545]"><BsLinkedin className='mx-auto'/></span>
            <span className="w-[20%] h-[100%] content-center rounded-full bg-[#dc3545]"><FaTwitter className='mx-auto'/></span>
            <span className="w-[20%] h-[100%] content-center rounded-full bg-[#dc3545]"><FaYoutube className='mx-auto'/></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
