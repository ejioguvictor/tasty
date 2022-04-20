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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, perspiciatis veritatis
          amet eum veniam asperiores beatae enim facilis maiores reiciendis quaerat inventore sint sunt
          labore hic adipisci tempore odio laboriosam aut excepturi? Vitae ipsa excepturi officiis non
          consequatur dolorum unde dolore ea, expedita cum, dolores optio eos fuga exercitationem iste.</p>
      </div>

    </div>
  )
}

export default About;