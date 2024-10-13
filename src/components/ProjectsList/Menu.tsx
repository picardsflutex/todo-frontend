import React, { useEffect, useState } from 'react'

import styles from './Menu.module.css'
import { IoAdd } from "react-icons/io5";
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import CollapseMenu from '../CollapseMenu/CollapseMenu';
import { Outlet } from 'react-router-dom';

const ProjectsList = () => {

  const [projects, setProjects] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/projects');
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setProjects(data.projects);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Произошла неизвестная ошибка');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <section className={styles.section}>
      <aside className={styles.projectList}>
        <div className={styles.flex}>
          <header className={styles.projectListHeader}>
            <h1 className={styles.title}>Projects</h1>
            <button className={styles.addButton}>
              <IoAdd />
            </button>
          </header>
          <main className={styles.collapseContainer} >
            <CollapseMenu link="team" title='Team'/>
            <CollapseMenu link='projects' title='Projects' parentTitle='All projects' items={projects || []}></CollapseMenu>
            <CollapseMenu link='tasks' title='Tasks' parentTitle='All tasks' items={['To Do', 'In progress', 'Done']}></CollapseMenu>
            <CollapseMenu link="reminders" title='Reminders'/>
          </main>
        </div>
        <footer className={styles.projectListFooter}>
          <ThemeSwitcher />
        </footer>
      </aside>
      <Outlet />
    </section>
  )
}

export default ProjectsList