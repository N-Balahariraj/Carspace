import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import '../../../Styles/UserApp.css'

export default function User() {
  return (
    <main className='Site'>
      <Header/>
      <Outlet/>
      <Footer/>
    </main>
  )
}
