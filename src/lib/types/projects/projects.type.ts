import { Task, Team, User } from "..";
import { ProjectTaskRole, Status } from "../enums";

export interface ProjectParticipant {
  id: number;
  project: Project;
  projectId: number;
  user: User;
  userId: number;
  project_role: ProjectTaskRole;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  status: Status;
  tasks: Task[];
  ProjectParticipant: ProjectParticipant[];
  team?: Team | null;
  teamId?: number | null;
  createdAt: Date;
  updatedAt: Date;
  deadline: Date;
}

export interface Collapse {
  id: number;
  title: string;
  status: Status;
}

export interface CreateProjectDto {
  title: string;
  description: string;
  status?: Status;
}

export type UpdateProjectDto = Partial<CreateProjectDto>;
