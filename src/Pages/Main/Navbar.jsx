import React from 'react'

export default function Navbar() {
    const src = '/Pics/Profile/profile.png'
    return (
        <nav className='w-[90%] h-[20%] flex justify-between text-[white] mx-auto my-3 font-Nunito'>
            <div className="w-[15%] flex justify-center items-center gap-4">
                <span className='text-3xl font-bold font-poppins'>Carspace</span>
            </div>
            <div className="w-[30%] flex justify-around items-center">
                <span className=' underline underline-offset-8 decoration-[#dc3545] decoration-[0.2rem]'>Home</span>
                <span className=' underline underline-offset-8 decoration-[#dc3545] decoration-[0.2rem]'>About Us</span>
                <span className=' underline underline-offset-8 decoration-[#dc3545] decoration-[0.2rem]'>Certified Pre-Owned</span>
            </div>
            <div className="w-[30%] flex justify-center items-center gap-4">
                <button className='button w-[50%]'>Compare cars</button>
                {src ? <img src={src} alt="" className='w-[10%] rounded-md' /> : <span></span>}
            </div>
        </nav>
    )
}
