import React from 'react'

import styles from './ProjectsList.module.css'
import { IoAdd } from "react-icons/io5";
import ThemeSwitcher from './../ThemeSwitcher/ThemeSwitcher';



const ProjectsList = () => {

  return (
    <aside className={styles.projectList}>
      <div className={styles.flex}>
        <header className={styles.projectListHeader}>
          <h1 className={styles.title}>Projects</h1>
          <button className={styles.addButton}>
            <IoAdd />
          </button>
        </header>
        <main>
          <section>Team</section>
          <section>Projects</section>
          <section>Tasks</section>
          <section>Reminders</section>
        </main>
      </div>
      <footer className={styles.projectListFooter}>
        <ThemeSwitcher />
      </footer>
    </aside>
  )
}

export default ProjectsList