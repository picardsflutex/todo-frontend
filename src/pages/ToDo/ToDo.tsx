import React from 'react'
import styles from './ToDo.module.css'

import ProjectsList from '../../components/ProjectsList/ProjectsList'
import Projects from './../../components/Projects/Projects';

const ToDo = () => {
  return (
    <main className={styles.todo}>
      <ProjectsList />
      <Projects />
    </main>
  )
}

export default ToDo