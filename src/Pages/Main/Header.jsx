import React from 'react'
import Navbar from './Navbar'
import Greetings from './Home/Greetings'

export default function Header() {
  return (
    <header>
      <Navbar/>
      <Greetings/>
    </header>
  )
}
