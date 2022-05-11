import React from 'react'
import styles from './styles.module.css'
// import Link from 'next/link'

export const Header = () => {
  return (
    <div className={styles.mainHeader}>
      {/* <div className={styles.mainHeaderLogo}>
        <img src='/logo.png'></img>
      </div> */}
      <p className={styles.headerName}>Photo Journal</p>

      <div className={styles.navItems}>
        {/* <Link href={'/'}>
          <a className={styles.navItem}>About</a>
        </Link> */}
        {/* <Link href={'/'}>
          <a className={styles.navItem}>Clients</a>
        </Link>
        <Link href={'/'}>
          <a className={styles.navItem}>Team</a>
        </Link> */}
      </div>
    </div>
  )
}

export default Header
