import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = ({cartCount}) => {
  return (
    <>
    <Navbar cartCount={cartCount} />
    <Outlet/>  
    </>
  )
}

export default Layout
