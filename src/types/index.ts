export type Status = 'To Do' | 'In progress' | 'Done';

export type Task = {
  id: number;
  userId: number;
  status: Status;
  project: string;
  title: string;
  subtitle: string;
  description: string;
  totalTasks: number;
  completedTasks: number;
  comments: number;
  files: number;
  time: string
};

export type BoardSections = {
  [name: string]: Task[];
};
