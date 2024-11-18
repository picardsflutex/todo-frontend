"use client"

import React from 'react'

import styles from './ThemeSwitcher.module.css'
import { MdOutlineLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { useTheme } from './useTheme';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={
        theme === 'light' ?
          `${styles.switchContainer} ${styles.active}`
          :
          styles.switchContainer
      }
    >
      <button className={styles.themeSwitchButton} onClick={toggleTheme}>
        <div
          className={styles.themeSwitchButtonItem}>
          <MdOutlineLightMode /> Light
        </div>
        <div
          className={styles.themeSwitchButtonItem}>
          <FiMoon /> Dark
        </div>
      </button>
    </div>
  )
}

export default ThemeSwitcher