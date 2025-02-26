import React from 'react'

export default function SignIn() {
  return (
    <form action="" className='w-[90%] flex flex-col gap-3'>
      <label htmlFor="mobile" className='label'>Enter your Mobile Number</label>
      <input type="tel" pattern='[0-9]{10}' id='mobile' name='mobile' className='input' placeholder='Mobile Number' required/>
      <button className=' bg-[#dc3545] h-10 my-2 rounded-lg text-white'>Continue</button>
    </form>
  )
}
