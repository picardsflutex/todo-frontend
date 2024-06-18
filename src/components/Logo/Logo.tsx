import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg width="24" height="26" viewBox="0 0 24 26" className='App-logo' xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8.88887L14 4V5.46663L22.5 9.62219L14 13.7777V26L24 21.1111V8.88887Z" fill="current" />
        <path d="M0 17.1111L10 22V20.5334L1.49996 16.3778L10 12.2223V0L0 4.88888V17.1111Z" fill="current" />
      </svg>
    </div>
  )
}

export default Logo