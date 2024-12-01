"use client"

import { ThemeSwitcher } from '@/features';
import styles from './AsideMenu.module.css'

import { IoAdd } from 'react-icons/io5';
import CollapseMenu from '../CollapseMenu/CollapseMenu';
import { MENU_ROUTES } from '@/routes/routes';
import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { Project } from '@/types';
import { useSession } from 'next-auth/react';

const AsideMenu = () => {
  const session = useSession()
  console.log("session = ", session)

  const [projects, setProjects] = useState<Project[]>([])

  async function fetchData() {
    const resposne = await axiosInstance.get('/projects/user')
    const currentProjects: Project[] = resposne.data
    setProjects(currentProjects)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(projects)

  const createProject = () => {

  }

  return <aside className={styles.projectList}>
    <div className={styles.flex}>
      <header className={styles.projectListHeader}>
        <h1 className={styles.title}>Menu</h1>
        <button className={styles.addButton} onClick={() => createProject()}>
          <IoAdd />
        </button>
      </header>
      <main>
        <CollapseMenu title={MENU_ROUTES[0].name} link={MENU_ROUTES[0].path} />
        <CollapseMenu title={MENU_ROUTES[1].name} link={MENU_ROUTES[1].path} summingElement='Projects' elements={['proj1', 'proj2', 'proj3']} />
        <CollapseMenu title={MENU_ROUTES[2].name} link={MENU_ROUTES[2].path} summingElement='Tasks' elements={['ToDo', 'InProgress', 'Done']} />
        <CollapseMenu title={MENU_ROUTES[3].name} link={MENU_ROUTES[3].path} />
      </main>
    </div>
    <footer className={styles.projectListFooter}>
      <ThemeSwitcher />
    </footer>
  </aside>
};

export default AsideMenu;
