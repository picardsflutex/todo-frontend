import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import styles from './NavigationBar.module.css';
import { RxExit } from "react-icons/rx";

import { ROUTES } from '../../routes/routes';
import Logo from './../Logo/Logo';

const NavigationBar = () => {
  const location = useLocation();
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <div className={styles.logo}>
          <Logo />
        </div>
        {ROUTES.map((route) => (
          <li
            className={
              location.pathname === route.path ?
                `${styles.navigationItem} ${styles.active}`
                :
                styles.navigationItem
            }
            key={route.name}
          >
            <Link className={styles.navigationLink} to={route.path}>
              <route.icon />
            </Link>
          </li>
        ))}
      </ul>
      <button className={styles.button}>
        <RxExit />
      </button>
    </nav>
  )
}

export default NavigationBar