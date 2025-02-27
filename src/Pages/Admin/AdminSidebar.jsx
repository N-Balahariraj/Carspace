import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { MdHome } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiCardsFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { BiSolidBookAdd } from "react-icons/bi";
import { BiSolidCommentAdd } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";


export default function AdminSidebar() {
  return (
    <div className='sidebar w-[250px] flex flex-col'>
      <div className='h-[5rem] w-[100%] flex justify-center items-center gap-2 content-center'>
        <img src="/Pics/Logo.png" alt="" className='h-[50px] w-[50px]'/>
        <h1 className='text-[#d01818] text-3xl font-bold font-poppins text-center'>Carspace</h1>
      </div>
      <div className='flex flex-col'>
        <div className='menu'> <MdHome className='item text-xl'/> <span>Home</span></div>
        <div className='menu'> <BsFillPeopleFill className='item text-lg'/> <span>Users</span></div>
        <div className='menu'> <PiCardsFill className='item text-lg'/> <span>Responses</span></div>
        <div className='menu'> <FaCar className='item text-lg'/> <span>Manage Listing</span></div>
        <div className='menu'> <BiSolidBookAdd className='item text-lg'/> <span>Bookings</span></div>
        <div className='menu'> <BiSolidCommentAdd className='item text-lg'/> <span>FAQ's</span></div>
        <div className='menu'> <MdLibraryBooks className='item text-lg'/> <span>Blogs</span></div>
      </div>
    </div>
  )
}
