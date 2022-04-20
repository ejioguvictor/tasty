import React from 'react'
import { MenuList } from '../../helpers/MenuLists'
import styles from './Menu.module.scss'


const Menu = () => {
  return (
    <div className={styles.menu}>
      <h1 className={styles.menuTitle}>Our Menu</h1>
      <div className={styles.menuList}>
        {MenuList.map((menuItem, key) => {
          return <div>{menuItem.name}</div>
          // <div>{menuItem.image}</div>
          // <div>{menuItem.price}</div>
        })}
      </div>
    </div>
  )
}

export default Menu