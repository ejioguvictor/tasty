import React from 'react'
import MultiplePizzas from '../../assets/multiplePizzas.jpeg'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTop} style={{ backgroundImage: `url(${MultiplePizzas})` }}>
      </div>
      <div className={styles.aboutBottom}>
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Debitis sit nostrum exercitationem,
          error quisquam saepe dolorem nam et ipsa aperiam cum in,
          voluptate a magnam commodi blanditiis nihil perferendis
          vel harum, enim similique voluptatem quidem aut. Accusantium,
          aliquam! Alias rerum odio sed libero iste laborum inventore
          quia, provident laboriosam repellat.</p>
      </div>

    </div>
  )
}

export default About;