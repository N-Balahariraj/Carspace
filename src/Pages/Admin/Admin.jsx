import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import AdminHeader from './AdminHeader'
import '../../Styles/AdminApp.css'

export default function Admin() {
  return (
    <main className='Admin font-Nunito'>
        <AdminSidebar/>
        <div className='w-[80%] p-2 bg-[#e8f2fd]'>
            <AdminNavbar/>
            <AdminHeader/>
        </div>
    </main>
  )
}
