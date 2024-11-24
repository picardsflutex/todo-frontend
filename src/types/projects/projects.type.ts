type Status = "TODO" | "INPROGRESS" | "DONE" | "DELETED";

type ProjectRole = "AUTHOR" | "PROJECT_LEAD" | "EXECUTOR";

export interface ProjectParticipant {
  id: number;
  project: Project;
  projectId: number;
  userId: number;
  project_role: ProjectRole;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  status: Status;
  tasks: Task[];
  ProjectParticipant: ProjectParticipant[];
}

export interface Stasuses {
  id: number;
  title: string;
  status: Status;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  status: Status;
  projects?: Project | null;
  projectId?: number | null;
  comments: Comment[];
  userId?: number | null;
}

export interface CreateProjectDto {
  title: string;
  description: string;
  status?: Status;
}

export interface UpdateProjectDto {
  title?: string;
  description?: string;
  status?: Status;
}