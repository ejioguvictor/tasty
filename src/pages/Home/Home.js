import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
import BannerImage from "../../assets/pizza.jpeg";


const Home = () => {
  return (
    <div className={styles.home} style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Viktor's Tasty Pizzeria </h1>
        <p> YUMMY DELICIOUS TASTE </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;