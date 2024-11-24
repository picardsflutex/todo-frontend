"use client"

import { ThemeSwitcher } from '@/features';
import styles from './AsideMenu.module.css'

import { IoAdd } from 'react-icons/io5';
import CollapseMenu from '../CollapseMenu/CollapseMenu';
import { MENU_ROUTES } from '@/routes/routes';
import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { CreateProjectDto, Project } from '@/types';
import { statuses } from './statuses';

const AsideMenu = () => {

  const [projects, setProjects] = useState<Project[]>([])

  async function getUserProjects() {
    const resposne = await axiosInstance.get('/projects/user')
    const currentProjects: Project[] = resposne.data
    setProjects(currentProjects)
  }

  useEffect(() => {
    getUserProjects()
  }, [])

  const createProject = async (data: CreateProjectDto) => {
    const resposne = await axiosInstance.post('/projects', {
      ...data
    })
    const createdProjects: Project = resposne.data;
    if (createdProjects) {
      setProjects([...projects, createdProjects])
    }
  }

  return <aside className={styles.projectList}>
    <div className={styles.flex}>
      <header className={styles.projectListHeader}>
        <h1 className={styles.title}>Menu</h1>
        <button className={styles.addButton} onClick={() => createProject({ title: "testTitle5", description: 'testDescription5' })}>
          <IoAdd />
        </button>
      </header>
      <main>
        <CollapseMenu title={MENU_ROUTES[0].name} link={MENU_ROUTES[0].path} />
        <CollapseMenu title={MENU_ROUTES[1].name} link={MENU_ROUTES[1].path} elements={projects} />
        <CollapseMenu title={MENU_ROUTES[2].name} link={MENU_ROUTES[2].path} elements={statuses} isStatuses={true} />
        <CollapseMenu title={MENU_ROUTES[3].name} link={MENU_ROUTES[3].path} />
      </main>
    </div>
    <footer className={styles.projectListFooter}>
      <ThemeSwitcher />
    </footer>
  </aside>
};

export default AsideMenu;
