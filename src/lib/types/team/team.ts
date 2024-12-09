import { TeamRole } from "../enums";
import { Project, User } from "..";

export interface TeamMember {
  id: number;
  team: Team;
  teamId: number;
  user: User;
  userId: number;
  role: TeamRole;
}

export interface Team {
  id: number;
  name: string;
  description?: string | null;
  createdBy: User;
  createdById: number;
  members: TeamMember[];
  projects: Project[];
  createdAt: Date;
  updatedAt: Date;
}