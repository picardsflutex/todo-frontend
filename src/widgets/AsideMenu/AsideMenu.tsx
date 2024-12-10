"use client";

import { ThemeSwitcher } from '@/features';
import styles from './AsideMenu.module.css';

import { IoAdd } from 'react-icons/io5';
import CollapseMenu from '../CollapseMenu/CollapseMenu';
import { MENU_ROUTES } from '@/lib/routes/routes';
import { CreateProjectDto, Project } from '@/lib/types';
import { statuses } from './statuses';
import { useEffect } from 'react';
import { useProjectStore } from '@/lib/stores';
import { axiosPrivate } from '@/lib/utils';

const AsideMenu = () => {
  const projects = useProjectStore(state => state.projects)
  const setProjects = useProjectStore(state => state.setProjects)

  // const { addProject, projects, setProjects } = useProjectStore(
  //   (state) => ({
  //     addProject: state.addProject,
  //     projects: state.projects,
  //     setProjects: state.setProjects,
  //   })
  // );

  const fetchProjects = async () => {
    const response = await axiosPrivate.get('/projects/user');
    // const currentProjects: Project[] = response.data;
    // setProjects(currentProjects ? currentProjects : [])
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const createProject = async (data: CreateProjectDto) => {
    // const response = await axiosInstance.post('/projects', {
    //   ...data,
    // });
    // const createdProject: Project = response.data;
    // if (createdProject) {
    //   addProject(createdProject);
    // }
  };
  // if (!projects)
  //   return (<div>Loading...</div>)
  // else
  return (
    <aside className={styles.projectList}>
      <div className={styles.flex}>
        <header className={styles.projectListHeader}>
          <h1 className={styles.title}>Menu</h1>
          <button
            className={styles.addButton}
            onClick={() => createProject({ title: 'testTitle5', description: 'testDescription5' })}
          >
            <IoAdd />
          </button>
        </header>
        <main>
          <CollapseMenu title={MENU_ROUTES[0].name} link={MENU_ROUTES[0].path} />
          {/* <CollapseMenu
            title={MENU_ROUTES[1].name}
            link={MENU_ROUTES[1].path}
            elements={projects}
          />
          <CollapseMenu
            title={MENU_ROUTES[2].name}
            link={MENU_ROUTES[2].path}
            elements={statuses}
            isStatuses={true}
          /> */}
          <CollapseMenu title={MENU_ROUTES[3].name} link={MENU_ROUTES[3].path} />
        </main>
      </div>
      <footer className={styles.projectListFooter}>
        <ThemeSwitcher />
      </footer>
    </aside>
  );
};

export default AsideMenu;
