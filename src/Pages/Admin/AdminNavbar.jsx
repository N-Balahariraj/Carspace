import React from 'react'

export default function AdminNavbar({ }) {
  return (
    <nav className="h-[5rem] w-[100%] flex justify-between items-top p-2">
      <div className='w-[20%] h-[100%] flex flex-col justify-center'>
        <h1 className='text-2xl font-semibold font-poppins'>Dashboard</h1>
        <span>Welcome navbar admin!</span>
      </div>
      <div className='w-[20%] h-[60%] flex justify-center items-center border-2 rounded-md overflow-hidden'>
          <img src="/Pics/Profile/profile.png" alt="photo" className='h-[100%] w-[30%]' />
          <select name="" id="" className='h-[100%] w-[70%] bg-transparent outline-none'>
            <option value="">Logout </option>
          </select>
      </div>
    </nav>
  )
}
