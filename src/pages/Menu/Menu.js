import React from 'react'
import { MenuList } from '../../helpers/MenuLists'
import MenuItem from '../../components/MenuItems/MenuItem'
import styles from './Menu.module.scss'


const Menu = () => {
  return (
    <div className={styles.menu}>
      <h1 className={styles.menuTitle}>Our Menu</h1>
      <div className={styles.menuList}>
        {MenuList.map((menuItem, key) => {
          return <MenuItem key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price} />
        })}
      </div>
    </div>
  )
}

export default Menu