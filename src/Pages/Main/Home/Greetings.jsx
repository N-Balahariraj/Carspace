import React from 'react'
import Card from 'react-bootstrap/Card'
import Toggler from '../../Utils/Toggler'
import MultiRangeSlider from 'multi-range-slider-react'

export default function Greetings() {
  return (
    <div className=' w-[90%] h-[70%] place-self-center flex justify-between text-white font-poppins'>
      <div className='w-[40%] h-[100%] flex flex-col justify-around gap-3'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-5xl font-bold'>
            Find Quality-Assured Cars Tailored to Your Budget and Preferences
          </h1>
          <span>
            Browse a Wide Range of Certified Used Cars from Trusted Dealers and Private Sellers
          </span>
        </div>
        <div className='w-[100%] flex gap-3'>
          <button className="w-[40%] button">Book my car</button>
          <div className='flex flex-col'>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
            <span>Working with 50+ Happy members</span>
          </div>
        </div>
        <span>Welcome</span>
      </div>
      <Card className='w-[40%] h-[100%] flex flex-col p-5 gap-3'>
        <Toggler opt1={'Used cars'} opt2={'New cars'}/>
        <input type="text" placeholder='Make' className='h-[10%] outline-none border-2 rounded-lg p-2'/>
        <input type="text" placeholder='Models' className='h-[10%] outline-none border-2 rounded-lg p-2'/>
        <MultiRangeSlider ruler={false} className='border-none shadow'/>
        <input type="text" placeholder='Body' className='h-[10%] outline-none border-2 rounded-lg p-2'/>
        <button className="button">2233 cars</button>
      </Card>
    </div>
  )
}
