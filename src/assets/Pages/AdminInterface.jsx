import React from 'react'
import Header from '../Components/AdminComponents/Header'
import Navbar from '../Components/AdminComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/UserComponents/Footer'

export default function AdminInterface() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className=' mt-48'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
