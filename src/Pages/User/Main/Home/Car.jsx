import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { LuFuel } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { RxGear } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiHeartCircle } from "react-icons/bi";

export default function Car() {
  return (
    <Card style={{ width: '18rem', margin:'1rem'}}>
      <Card.Img variant="top" src="/Pics/Cars/chevrolet-eqinox.jpeg" />
      <Card.Body>
        <Card.Text className='text-[#dc3545]'>Mini cooper 3</Card.Text>
        <Card.Title>Chevrolet suburban 2021</Card.Title>
        <Card.Text className='text-[#dc3545]'>$ 27,000</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='flex items-center justify-around w-[100%]'>
          <span className='flex items-center gap-2 w-[50%]'><LuFuel /> Fuel type </span>
          <span className='text-[#dc3545] w-[30%]'>Petrol</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex items-center justify-around w-[100%]'>
          <span className='flex items-center gap-2 w-[50%]'><BsSpeedometer /> Milage </span>
          <span className='text-[#dc3545] w-[30%]'>90 km</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex items-center justify-around w-[100%]'>
          <span className='flex items-center gap-2 w-[50%]'><RxGear /> Transmission </span>
          <span className='text-[#dc3545] w-[30%]'>Auto</span>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className='flex items-center justify-between'>
        <Card.Link href="#" className='flex gap-2 items-center'>View details <FaArrowRightLong /></Card.Link>
        <Card.Link href="#" className='w-[10%]'><BiHeartCircle className='text-3xl' /></Card.Link>
      </Card.Body>
    </Card>
  )
}
