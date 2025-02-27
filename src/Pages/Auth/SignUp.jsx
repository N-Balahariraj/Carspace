import React from 'react'
import { initializeRecaptcha, signUp } from '../../Firebase/Utils/users.utils';

export default function SignUp() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const code = e.target.code.value
        const phoneNumber = e.target.mobile.value;
        console.log(code)
        try {
          initializeRecaptcha()
          const user = await signUp(name, email, code+phoneNumber)
          console.log('user : ', user)
        }
        catch (error) {
          console.log(error)
        }
      }}
      className='w-[90%] flex flex-col gap-3 overflow-y-auto'
    >
      <label htmlFor="name" className='label'>Enter your Name</label>
      <input type="text" id='name' name='name' className='input' placeholder='Name' required />
      <label htmlFor="email" className='label'>Enter your Email ID</label>
      <input type="email" id='email' name='email' className='input' placeholder='Email ID' required />
      <label htmlFor="mobile" className='label'>Enter your Mobile Number</label>
      <div className='input flex gap-2'>
        <select name="code" id="code" className='h-[100%] w-[20%] border-r-2 outline-none bg-[#eeeeee]'>
          <option value="+91">+91</option>
          <option value="+1">+1</option>
        </select>
        <input type="tel" pattern='[0-9]{10}' id='mobile' name='mobile' className='h-[100%] w-[60%] outline-none bg-[#eeeeee]' placeholder='Mobile Number' required />
      </div>
      <div id="recaptcha-container"></div>
      <button type='submit' className=' bg-[#dc3545] h-10 my-2 rounded-lg text-white'>Continue</button>
    </form>
  )
}
