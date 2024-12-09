import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project, UpdateProjectDto } from '../types';

export type State = {
  projects: Project[];
  draggedProject: number | null;
};

export type Actions = {
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  dragProject: (id: number | null) => void;
  removeProject: (id: number) => void;
  updateProject: (id: number, updateProjectDto: UpdateProjectDto) => void;
};

export const useProjectStore = create<State & Actions>()(
  persist(
    (set) => ({
      projects: [],
      draggedProject: null,
      
      setProjects: (projects: Project[]) => {
        set(() => ({
          projects
        }))
      },
      
      addProject: (project) =>
        set((state) => ({
          projects: [...state.projects, project],
        })),

      dragProject: (id: number | null) =>
        set({ draggedProject: id }),

      removeProject: (id: number) =>
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
        })),
        
      updateProject: (id: number, updateProjectDto: UpdateProjectDto) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id && updateProjectDto
              ? { ...project, ...updateProjectDto }
              : project
          ),
        })),
    }),
    { name: 'project-store', skipHydration: true }
  )
);

