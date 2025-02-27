import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Explore() {
  return (
    <div className='w-[90%] flex flex-col m-10 font-Nunito'>
      <div className='w-[100%] flex justify-between items-center'>
        <h1 className='my-2 border-l-[0.5rem] border-[#dc3545] px-2 text-3xl font-bold font-poppins'>Explore Our Cars</h1>
        <span className='font-semibold text-lg'>View More</span>
      </div>
      <div className="flex flex-wrap m-4 gap-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/Pics/Cars/pickup.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/Pics/Cars/pickup.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/Pics/Cars/pickup.png" />
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/Pics/Cars/pickup.png" />
        </Card>
        
      </div>
    </div>
  )
}
