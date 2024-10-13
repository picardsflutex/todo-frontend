import React from 'react'
import styles from './ToDo.module.css'

import ProjectsList from '../../components/ProjectsList/Menu'

const ToDo = () => {
  return (
    <main className={styles.todo}>
      <ProjectsList />
    </main>
  )
}

export default ToDo