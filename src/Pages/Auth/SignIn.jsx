import React, { useEffect } from 'react'
import { initializeRecaptcha, SignInWithPhoneNumber } from '../../Firebase/Utils/users.utils'

export default function SignIn() {

  useEffect(() => {
    initializeRecaptcha();
    return () => { 
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.destroy = true; 
      }
    };
  }, [])

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const code = e.target.code.value
        const phoneNumber = e.target.mobile.value
        try {
          initializeRecaptcha();
          const result = await SignInWithPhoneNumber(code + phoneNumber)
          console.log('result : ', result)
        }
        catch (error) {
          console.log('Error : ', error)
        }
      }}
      className='w-[90%] flex flex-col gap-3'
    >
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
