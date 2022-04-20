import React from 'react'
import Logo from "../assets/pizzaLogo.png"
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left-nav'>
        <img src={Logo} alt='pizza logo' />
      </div>
      <div className='right-nav'></div>

    </div>
  )
}

export default Navbar