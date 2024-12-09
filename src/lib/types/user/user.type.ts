import { ChatParticipant, Message, ProjectParticipant, TaskParticipant, Team, TeamMember } from "..";
import { Role } from "../enums";

export interface User {
  id: number;
  email: string;
  password_hash?: string | null;
  name?: string | null;
  username?: string | null;
  role: Role;
  Account: Account[];
  Comment: Comment[];
  projects: ProjectParticipant[];
  tasks: TaskParticipant[];
  Team: Team[];
  TeamMember: TeamMember[];
  ChatParticipant: ChatParticipant[];
  Message: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Account {
  id: number;
  userId: number;
  user: User;
  provider: string;
  providerAccountId: string;
  createdAt: Date;
  updatedAt: Date;
}