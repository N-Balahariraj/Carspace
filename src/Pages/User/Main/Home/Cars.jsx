import React, { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Car from './Car'

export default function Cars() {
  const [val, setVal] = useState([1, 3])
  return (
    <div className='w-[90%] flex flex-col m-10 font-Nunito'>
      <div className='w-[100%] flex justify-between items-center'>
        <h1 className='my-2 border-l-[0.5rem] border-[#dc3545] px-2 text-3xl font-bold font-poppins'>Feature Listing</h1>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton id="tbg-radio-1" variant='danger' className='bg-[white] text-black h-[70%] border-2 border-[#ababab]' value={1}>
            All Cars
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" variant='danger' className='bg-[white] text-black h-[70%] border-2 border-[#ababab]' value={2}>
            New Cars
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" variant='danger' className='bg-[white] text-black h-[70%] border-2 border-[#ababab]' value={3}>
            Used Cars
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex flex-wrap m-4">
        <Car/>
        <Car/>
        <Car/>
        <Car/>
        <Car/>
        <Car/>
        <Car/>
      </div>
    </div>
  )
}
