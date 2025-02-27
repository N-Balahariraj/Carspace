import React from 'react'
import Toggler from '../User/Utils/Toggler'
import { Outlet } from 'react-router-dom'



export default function Auth() {
  return (
    <main className='Auth'>
      <div className='w-[70%] h-[70%] flex bg-white rounded-xl overflow-hidden font-Nunito'>
        <img src="/Pics/Auth/AuthSide.png" alt="car" className='w-[50%] rounded-lg' />
        <div className='w-[50%] h-[100%] px-5 flex flex-col items-center'>
          <span className='h-[20%] text-5xl content-center font-bold'>
            <span className='text-[#0d6efd]'>Car</span>
            <span className='text-[#dc3545]'>space</span>
          </span>
          <Toggler opt1={'Login'} opt2={'Sign Up'} />
          <Outlet/>
        </div>
      </div>
    </main>
  )
}
