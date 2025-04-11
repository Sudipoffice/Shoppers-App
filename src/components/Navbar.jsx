import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = ({cartCount}) => {
  return (
    <nav className="Navbar">
  <Link className="NavLink" to="/products">Home</Link>
  <Link className="NavLink" to="/cart">Cart <sup className='cartCount'>{cartCount}</sup></Link>
  <Link className="NavLink" to="/">Logout</Link>
</nav>
  )
}

export default Navbar
