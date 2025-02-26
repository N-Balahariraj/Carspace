import React from 'react'
import { signUp } from '../../Firebase/Utils/users.utils';

export default function SignUp() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const name = e.target.name.value ;
        const email = e.target.email.value ;
        const phoneNumber = e.target.mobile.value ;
        try {
          const user = await signUp(name,email,phoneNumber)
          console.log('user : ',user)
        } 
        catch (error) {
          console.log(error)
        }
      }}
      className='w-[90%] flex flex-col gap-3'
    >
      <label htmlFor="name" className='label'>Enter your Name</label>
      <input type="text" id='name' name='name' className='input' placeholder='Name' required />
      <label htmlFor="email" className='label'>Enter your Email ID</label>
      <input type="email" id='email' name='email' className='input' placeholder='Email ID' required />
      <label htmlFor="mobile" className='label'>Enter your Mobile Number</label>
      <input type="tel" pattern='[0-9]{10}' id='mobile' name='mobile' className='input' placeholder='Mobile Number' required />
      <button type='submit' className=' bg-[#dc3545] h-10 my-2 rounded-lg text-white'>Continue</button>
    </form>
  )
}
