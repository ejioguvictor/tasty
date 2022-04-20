import React from 'react'
import Logo from "../../assets/pizzaLogo.png"
import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <img src={Logo} alt='pizza logo' />
      </div>
      <div className={styles.rightSide}></div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

    </div >
  )
}

export default Navbar;