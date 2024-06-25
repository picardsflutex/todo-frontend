import React, { useState } from 'react'

import styles from './ThemeSwitcher.module.css'
import { MdOutlineLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return document.querySelector('body')?.getAttribute('data-theme') || 'dark';
  });

  const setDarkMode = () => {
    setTheme('dark')
    document.querySelector("body")?.setAttribute('data-theme', 'dark')
  }
  const setLightMode = () => {
    setTheme('light')
    document.querySelector("body")?.setAttribute('data-theme', 'light')
  }

  return (
    <div
      className={
        theme === 'light' ?
          `${styles.switchContainer} ${styles.themeActive}`
          :
          styles.switchContainer
      }
    >
      <button
        onClick={setLightMode}
        className={styles.themeSwitchButton}>
        <MdOutlineLightMode /> Light
      </button>
      <button
        onClick={setDarkMode}
        className={styles.themeSwitchButton}>
        <FiMoon /> Dark
      </button>
    </div>
  )
}

export default ThemeSwitcher