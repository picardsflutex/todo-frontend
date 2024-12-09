import { Project, User } from "..";
import { ProjectTaskRole, Status } from "../enums";

export interface TaskParticipant {
  id: number;
  task: Task;
  taskId: number;
  user: User;
  userId: number;
  task_role: ProjectTaskRole;
}

export interface Task {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  status: Status;
  project?: Project | null;
  projectId?: number | null;
  comments: Comment[];
  taskParticipants: TaskParticipant[];
  createdAt: Date;
  updatedAt: Date;
  deadline: Date;
}

export interface Comment {
  id: number;
  description: string;
  task?: Task | null;
  taskId?: number | null;
  author?: User | null;
  authorId?: number | null;
  createdAt: Date;
  updatedAt: Date;
}