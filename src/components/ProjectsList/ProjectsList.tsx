import React, { useState } from 'react'

import styles from './ProjectsList.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import ThemeSwitcher from './../ThemeSwitcher/ThemeSwitcher';
import CollapseMenu from '../Projects/CollapseMenu';

const ProjectsList = () => {

  const [active, setActive] = useState(false)
  const [checked, setChecked] = useState('')


  const openCloseMenu = () => {
    setActive(!active)
  }

  return (
    <aside className={styles.projectList}>
      <div className={styles.flex}>
        <header className={styles.projectListHeader}>
          <h1 className={styles.title}>Projects</h1>
          <button className={styles.addButton}>
            <IoAdd />
          </button>
        </header>
        <main className={styles.collapseContainer} >
          <section>
            Team
          </section>
          <CollapseMenu title='Projects' itemTitle='All projects' items={['Design system', 'User flow', 'Ux research']} onItemClick={() => { }}></CollapseMenu>
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