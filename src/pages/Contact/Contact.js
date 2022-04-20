import React from 'react'
import PizzaLeft from '../../assets/pizzaLeft.jpg'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.leftSide} style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      <div className={styles.rightSide}>
        <h1>Contact Us</h1>
        <form id="contact-form" method='POST'>
          <label htmlFor="name">Full Name</label>
          <input type="text" name='name' placeholder='Enter full name ...' />
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='Enter your email ...' />
          <label htmlFor="message">Message</label>
          <textarea name="message" rows="10" placeholder='Enter your message ...' required></textarea>

          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
