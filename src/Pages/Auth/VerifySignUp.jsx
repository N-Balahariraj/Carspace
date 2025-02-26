import React, { useState } from 'react'
import { OtpInput } from 'reactjs-otp-input'

export default function VerifySignUp() {
  const [otp, setOtp] = useState('');
  return (
    <form action="" className='w-[90%] flex flex-col gap-3 text-[#757575]'>
      <p className='text-3xl font-bold'>Verify your Mobile</p>
      <span>We have sent an 6 digit otp on {`+91 0000000000`} </span>
      <OtpInput value={otp} onChange={() => setOtp(otp)} numInputs={6} isInputNum containerStyle={'h-10 w-[90%] gap-2'} inputStyle={'h-10 px-4 bg-[#eeeeee] rounded-md'}/>
      <p>00:20</p>
      <span>Didn't receive OTP ?</span>
      <button className=' bg-[#dc3545] h-10 my-2 rounded-lg text-white'>Continue</button>
    </form>
  )
}
